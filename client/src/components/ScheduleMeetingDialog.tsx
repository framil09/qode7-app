import { useState } from "react";
import { Calendar, Clock, Mail, User, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      toast.error(t("schedule_dialog.error"));
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(t("schedule_dialog.error"));
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

      toast.success(t("schedule_dialog.success"));
      closeDialog();
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedDate(undefined);
      setSelectedTime("");
    } catch (error) {
      console.error("Erro ao agendar reunião:", error);
      toast.error(t("schedule_dialog.error"));
    } finally {
      setLoading(false);
    }
  };

  const isDisabledDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);

    // Desabilita domingos
    if (date.getDay() === 0) return true;

    // Desabilita datas passadas
    if (date < today) return true;

    // Desabilita datas além de 60 dias
    if (date > maxDate) return true;

    return false;
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (open) openDialog();
      else closeDialog();
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("schedule_dialog.title")}</DialogTitle>
          <DialogDescription>
            {t("schedule_dialog.subtitle")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Pessoais */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Informações Pessoais</h3>

            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User size={16} />
                {t("schedule_dialog.name")} *
              </Label>
              <Input
                id="name"
                name="name"
                placeholder={t("schedule_dialog.name")}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail size={16} />
                  {t("schedule_dialog.email")} *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone size={16} />
                  {t("schedule_dialog.phone")} *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("schedule_dialog.projectInfo")}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("schedule_dialog.projectPlaceholder")}
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
              />
            </div>
          </div>

          {/* Seleção de Data */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Calendar size={18} />
              {t("schedule_dialog.selectDate")} *
            </h3>
            <div className="flex justify-center p-4 bg-muted rounded-lg">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={isDisabledDate}
                autoFocus
              />
            </div>
          </div>

          {/* Seleção de Hora */}
          {selectedDate && (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Clock size={18} />
                {t("schedule_dialog.selectTime")} *
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 px-3 rounded-lg border transition-all font-medium text-sm ${
                      selectedTime === slot
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-muted border-border hover:border-accent hover:bg-accent hover:bg-opacity-10"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {selectedTime && (
                <p className="text-sm text-muted-foreground text-center">
                  Horário selecionado: <span className="font-semibold">{selectedTime}</span>
                </p>
              )}
            </div>
          )}

          {/* Resumo */}
          {selectedDate && selectedTime && (
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-foreground">Resumo do Agendamento</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <span className="font-medium">Data:</span> {selectedDate.toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
                <p>
                  <span className="font-medium">Hora:</span> {selectedTime}
                </p>
                <p>
                  <span className="font-medium">Contato:</span> {formData.email}
                </p>
              </div>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex gap-3 justify-end pt-4">
            <Button type="button" variant="outline" onClick={() => closeDialog()}>
              {t("schedule_dialog.close")}
            </Button>
            <Button
              type="submit"
              disabled={loading || !selectedDate || !selectedTime}
              className="bg-accent hover:bg-accent/90"
            >
              {loading ? t("schedule_dialog.submitting") : t("schedule_dialog.submit")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
