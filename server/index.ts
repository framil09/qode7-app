import "dotenv/config";
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar pasta de dados
const dataDir = path.join(__dirname, "..", "data");
const meetingsFile = path.join(dataDir, "meetings.json");

// Criar pasta de dados se não existir
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Inicializar arquivo de reuniões se não existir
if (!fs.existsSync(meetingsFile)) {
  fs.writeFileSync(meetingsFile, JSON.stringify([], null, 2));
}

// Função para salvar reunião na agenda local
function saveMeetingToLocal(meetingData: any) {
  try {
    const meetings = JSON.parse(fs.readFileSync(meetingsFile, "utf-8"));
    meetings.push({
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...meetingData,
    });
    fs.writeFileSync(meetingsFile, JSON.stringify(meetings, null, 2));
    return true;
  } catch (error) {
    console.error("Erro ao salvar reunião local:", error);
    return false;
  }
}

// Função para gerar arquivo iCalendar (.ics)
function generateICS(meetingData: { name: string; email: string; dateTime: string; message: string }) {
  const start = new Date(meetingData.dateTime);
  const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hora

  const formatICSDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Qode7//Meeting Scheduler//PT",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@qode7.com`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:Reunião Qode7 - ${meetingData.name}`,
    `DESCRIPTION:Cliente: ${meetingData.name}\\nEmail: ${meetingData.email}\\n\\nMensagem: ${meetingData.message.replace(/\n/g, "\\n")}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Lembrete de Reunião Qode7",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
}

// Configurar transportador de email (GMAIL OU OUTRO SMTP)
const hasEmailConfig = process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;
const emailTransporter = hasEmailConfig
  ? nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })
  : null;

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Endpoint para agendar reunião
  app.post("/api/schedule-meeting", async (req, res) => {
    try {
      const { name, email, phone, message, date, time, dateTime } = req.body;

      if (!name || !email || !phone || !date || !time) {
        return res.status(400).json({ error: "Dados incompletos" });
      }

      // Salvar localmente
      saveMeetingToLocal({ name, email, phone, message, date, time, status: "confirmado" });

      const scheduledDate = new Date(dateTime);
      const formattedDate = scheduledDate.toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
      const formattedTime = String(time).padStart(5, "0");

      // Gerar link direto para Google Calendar (Universal Link)
      const startDateStr = scheduledDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const endDateStr = new Date(scheduledDate.getTime() + 3600000).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(`Reunião Qode7 - ${name}`)}&dates=${startDateStr}/${endDateStr}&details=${encodeURIComponent(`Cliente: ${name}\nEmail: ${email}\nTelefone: ${phone}\n${message ? `Mensagem: ${message}` : ""}`)}`;

      // Conteúdo do e-mail para o cliente
      const clientEmailHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #003d7a;">✅ Reunião Agendada com Sucesso!</h2>
          <p>Olá <strong>${name}</strong>, recebemos sua solicitação de reunião.</p>
          <div style="background: #f0f7ff; padding: 20px; border-radius: 12px; border-left: 5px solid #0066cc;">
            <p><strong>📅 Data:</strong> ${formattedDate}</p>
            <p><strong>🕐 Horário:</strong> ${formattedTime}</p>
          </div>
          <p style="text-align: center; margin: 30px 0;">
            <a href="${googleCalendarUrl}" style="background: #4285f4; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              📅 Adicionar ao Google Calendar
            </a>
          </p>
          <p>Também anexamos um arquivo de convite (.ics) que você pode abrir em qualquer aplicativo de agenda (Outlook, iPhone, etc).</p>
          <hr style="border: none; border-top: 1px solid #eee;">
          <footer style="text-align: center; color: #999; font-size: 12px;">
            <p><strong>Qode7</strong> - Soluções em Desenvolvimento Web e Aplicativos</p>
          </footer>
        </div>
      `;

      // Gerar arquivo ICS
      const icsContent = generateICS({ name, email, dateTime, message });

      // Enviar e-mails
      const mailOptions = [
        {
          from: `"Qode7 Agendamentos" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "✅ Confirmação de Reunião - Qode7",
          html: clientEmailHTML,
          attachments: [{ filename: 'convite-qode7.ics', content: icsContent }]
        },
        {
          from: `"Qode7 Agendamentos" <${process.env.EMAIL_USER}>`,
          to: process.env.COMPANY_EMAIL || "comercial@qode7.com",
          subject: `🗓️ Nova Reunião: ${name}`,
          html: `<h2>Novo Agendamento</h2><p><strong>Cliente:</strong> ${name}</p><p><strong>Data:</strong> ${formattedDate} às ${formattedTime}</p><p><strong>Email:</strong> ${email}</p><p><strong>Telefone:</strong> ${phone}</p><p><strong>Mensagem:</strong> ${message}</p>`,
          attachments: [{ filename: 'convite-qode7.ics', content: icsContent }]
        }
      ];

      // Disparar e-mails em segundo plano (apenas se configurado)
      if (emailTransporter) {
        Promise.all(mailOptions.map(opt => emailTransporter.sendMail(opt))).catch(err => console.error("Erro e-mail:", err));
      } else {
        console.warn("Email não configurado (EMAIL_USER/EMAIL_PASSWORD). Reunião salva localmente.");
      }

      res.status(200).json({ success: true, message: "Agendamento concluído!" });
    } catch (error) {
      console.error("Erro no agendamento:", error);
      res.status(500).json({ error: "Erro interno no servidor" });
    }
  });

  // Outros endpoints (mantidos do original)
  app.get("/api/meetings", (_req, res) => {
    const meetings = JSON.parse(fs.readFileSync(meetingsFile, "utf-8"));
    res.status(200).json({ success: true, meetings });
  });

  const port = process.env.PORT || 5001;
  server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}

startServer();
