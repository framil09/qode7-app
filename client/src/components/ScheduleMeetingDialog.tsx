import { useState } from "react";
import { Calendar, Clock, Mail, User, Phone, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { toast } from "sonner";
import axios from "axios";
import { useScheduleMeeting } from "@/contexts/ScheduleMeetingContext";

export default function ScheduleMeetingDialog() {
  const { t } = useTranslation();
  const { isOpen, openDialog, closeDialog } = useScheduleMeeting();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, phone: formatPhone(e.target.value) }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedDate(undefined);
    setSelectedTime("");
    setSuccess(false);
  };

  const handleClose = () => {
    closeDialog();
    setTimeout(resetForm, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      toast.error("Selecione uma data e horário.");
      return;
    }
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    try {
      const meetingDateTime = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(":").map(Number);
      meetingDateTime.setHours(hours, minutes, 0, 0);

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: selectedDate.toISOString().split("T")[0],
        time: selectedTime,
        dateTime: meetingDateTime.toISOString(),
      };

      await axios.post("/api/schedule-meeting", payload);
      setSuccess(true);
      toast.success("Reunião agendada com sucesso!");
    } catch (error) {
      console.error("Erro ao agendar reunião:", error);
      toast.error("Erro ao agendar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabledDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    if (date.getDay() === 0) return true;
    if (date < today) return true;
    if (date > maxDate) return true;
    return false;
  };

  // Tela de sucesso
  if (success) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
        <DialogContent
          className="max-w-md border-0 p-0 overflow-hidden"
          style={{ background: "#111827", border: "1px solid rgba(29,201,164,0.15)" }}
        >
          <div className="p-8 text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: "rgba(29,201,164,0.1)", border: "1px solid rgba(29,201,164,0.2)" }}
            >
              <CheckCircle2 size={32} style={{ color: "#1dc9a4" }} />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#f0f4f8", letterSpacing: "-0.5px" }}>
              Reunião Agendada!
            </h2>
            <p className="mb-2" style={{ color: "rgba(160,174,192,0.7)", fontSize: "15px" }}>
              {selectedDate?.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })} às {selectedTime}
            </p>
            <p className="mb-6" style={{ color: "rgba(160,174,192,0.5)", fontSize: "13px" }}>
              Enviamos um email de confirmação para <strong style={{ color: "#1dc9a4" }}>{formData.email}</strong> com os detalhes e convite para agenda.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer border-0"
              style={{ background: "#1dc9a4", color: "#0b0f1a" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#00ffe0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#1dc9a4"; }}
            >
              Fechar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (open) openDialog(); else handleClose(); }}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto border-0 p-0"
        style={{ background: "#111827", border: "1px solid rgba(29,201,164,0.15)" }}
      >
        <DialogHeader className="p-6 pb-0">
          <div
            className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-[11px] font-bold uppercase mb-3"
            style={{ background: "rgba(29,201,164,0.08)", border: "1px solid rgba(29,201,164,0.15)", color: "#1dc9a4", letterSpacing: "1.5px" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1dc9a4" }} />
            Agendamento
          </div>
          <DialogTitle className="text-2xl font-bold" style={{ color: "#f0f4f8", letterSpacing: "-0.5px" }}>
            {t("schedule_dialog.title")}
          </DialogTitle>
          <p style={{ color: "rgba(160,174,192,0.6)", fontSize: "14px", marginTop: "4px" }}>
            {t("schedule_dialog.subtitle")}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-6">
          {/* Informações Pessoais */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase" style={{ color: "rgba(160,174,192,0.5)", letterSpacing: "1px" }}>
              Informações de contato
            </h3>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-medium" style={{ color: "rgba(160,174,192,0.7)" }}>
                <User size={14} style={{ color: "#1dc9a4" }} />
                Nome completo *
              </label>
              <input
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#f0f4f8",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(29,201,164,0.4)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-medium" style={{ color: "rgba(160,174,192,0.7)" }}>
                  <Mail size={14} style={{ color: "#1dc9a4" }} />
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f4f8" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(29,201,164,0.4)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                />
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-medium" style={{ color: "rgba(160,174,192,0.7)" }}>
                  <Phone size={14} style={{ color: "#1dc9a4" }} />
                  Telefone *
                </label>
                <input
                  name="phone"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f4f8" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(29,201,164,0.4)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-medium" style={{ color: "rgba(160,174,192,0.7)" }}>
                <MessageSquare size={14} style={{ color: "#1dc9a4" }} />
                Sobre o projeto (opcional)
              </label>
              <textarea
                name="message"
                placeholder="Conte-nos sobre seu projeto..."
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all resize-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f4f8" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(29,201,164,0.4)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              />
            </div>
          </div>

          {/* Seleção de Data */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase flex items-center gap-2" style={{ color: "rgba(160,174,192,0.5)", letterSpacing: "1px" }}>
              <Calendar size={14} style={{ color: "#1dc9a4" }} />
              Escolha a data *
            </h3>
            <div
              className="flex justify-center p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={(day) => setSelectedDate(day ?? undefined)}
                disabled={isDisabledDate}
              />
            </div>
          </div>

          {/* Seleção de Hora */}
          {selectedDate && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase flex items-center gap-2" style={{ color: "rgba(160,174,192,0.5)", letterSpacing: "1px" }}>
                <Clock size={14} style={{ color: "#1dc9a4" }} />
                Escolha o horário *
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className="py-2.5 px-3 rounded-lg transition-all font-semibold text-sm cursor-pointer"
                    style={{
                      background: selectedTime === slot ? "#1dc9a4" : "rgba(255,255,255,0.04)",
                      color: selectedTime === slot ? "#0b0f1a" : "rgba(160,174,192,0.7)",
                      border: selectedTime === slot ? "1px solid #1dc9a4" : "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      if (selectedTime !== slot) {
                        e.currentTarget.style.borderColor = "rgba(29,201,164,0.3)";
                        e.currentTarget.style.color = "#f0f4f8";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedTime !== slot) {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "rgba(160,174,192,0.7)";
                      }
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Resumo */}
          {selectedDate && selectedTime && (
            <div
              className="p-4 rounded-xl space-y-2"
              style={{ background: "rgba(29,201,164,0.05)", border: "1px solid rgba(29,201,164,0.1)" }}
            >
              <h4 className="text-sm font-semibold" style={{ color: "#1dc9a4" }}>Resumo do Agendamento</h4>
              <div className="space-y-1" style={{ fontSize: "14px" }}>
                <p style={{ color: "rgba(160,174,192,0.7)" }}>
                  <span style={{ color: "#f0f4f8", fontWeight: 600 }}>Data:</span>{" "}
                  {selectedDate.toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
                <p style={{ color: "rgba(160,174,192,0.7)" }}>
                  <span style={{ color: "#f0f4f8", fontWeight: 600 }}>Hora:</span> {selectedTime}
                </p>
                {formData.email && (
                  <p style={{ color: "rgba(160,174,192,0.7)" }}>
                    <span style={{ color: "#f0f4f8", fontWeight: 600 }}>Confirmação para:</span> {formData.email}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Botões */}
          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer"
              style={{ background: "transparent", color: "rgba(160,174,192,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#f0f4f8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(160,174,192,0.6)"; }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading || !selectedDate || !selectedTime}
              className="px-8 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer border-0 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "#1dc9a4", color: "#0b0f1a" }}
              onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.background = "#00ffe0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#1dc9a4"; }}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  Agendando...
                </span>
              ) : (
                "Agendar Reunião"
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
