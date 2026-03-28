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
    `ORGANIZER;CN=Qode7:mailto:comercial@qode7.com`,
    `ATTENDEE;CN=${meetingData.name}:mailto:${meetingData.email}`,
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

// Template de email profissional no tema Qode7
function buildClientEmailHTML(name: string, formattedDate: string, formattedTime: string, googleCalendarUrl: string) {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0b0f1a;font-family:'DM Sans',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <span style="font-family:'Courier New',monospace;font-size:28px;font-weight:700;color:#1dc9a4;letter-spacing:-1px;">[Q7]</span>
      <p style="font-size:12px;color:rgba(160,174,192,0.5);margin:4px 0 0;letter-spacing:1.5px;text-transform:uppercase;">QodeSeven Technology</p>
    </div>

    <!-- Card principal -->
    <div style="background:#111827;border:1px solid rgba(29,201,164,0.15);border-radius:16px;padding:32px;margin-bottom:24px;">
      <div style="text-align:center;margin-bottom:24px;">
        <div style="display:inline-block;background:rgba(29,201,164,0.1);border:1px solid rgba(29,201,164,0.2);border-radius:50px;padding:6px 16px;margin-bottom:16px;">
          <span style="color:#1dc9a4;font-size:13px;font-weight:600;">Reunião Confirmada</span>
        </div>
        <h1 style="color:#f0f4f8;font-size:24px;font-weight:700;margin:0 0 8px;letter-spacing:-0.5px;">Olá, ${name}!</h1>
        <p style="color:rgba(160,174,192,0.7);font-size:15px;margin:0;">Sua reunião foi agendada com sucesso.</p>
      </div>

      <!-- Detalhes -->
      <div style="background:rgba(29,201,164,0.05);border:1px solid rgba(29,201,164,0.1);border-radius:12px;padding:20px;margin-bottom:24px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:rgba(160,174,192,0.6);font-size:13px;width:80px;">Data</td>
            <td style="padding:8px 0;color:#f0f4f8;font-size:15px;font-weight:600;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:rgba(160,174,192,0.6);font-size:13px;">Horário</td>
            <td style="padding:8px 0;color:#f0f4f8;font-size:15px;font-weight:600;">${formattedTime}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:rgba(160,174,192,0.6);font-size:13px;">Duração</td>
            <td style="padding:8px 0;color:#f0f4f8;font-size:15px;font-weight:600;">1 hora</td>
          </tr>
        </table>
      </div>

      <!-- Botão -->
      <div style="text-align:center;">
        <a href="${googleCalendarUrl}" style="display:inline-block;background:#1dc9a4;color:#0b0f1a;padding:14px 32px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:-0.3px;">
          Adicionar ao Google Calendar
        </a>
      </div>

      <p style="text-align:center;color:rgba(160,174,192,0.5);font-size:12px;margin:16px 0 0;">
        Também anexamos um arquivo .ics para Outlook, iPhone e outros apps de agenda.
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding-top:16px;border-top:1px solid rgba(255,255,255,0.05);">
      <p style="color:rgba(160,174,192,0.4);font-size:12px;margin:0;">
        QodeSeven Technology · CNPJ 21.462.653/0001-98
      </p>
      <p style="color:rgba(160,174,192,0.3);font-size:11px;margin:4px 0 0;">
        Lambari/MG, Brasil · Modena, Itália
      </p>
    </div>
  </div>
</body>
</html>`;
}

function buildInternalEmailHTML(name: string, email: string, phone: string, message: string, formattedDate: string, formattedTime: string) {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0b0f1a;font-family:'DM Sans',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:24px;">
      <span style="font-family:'Courier New',monospace;font-size:28px;font-weight:700;color:#1dc9a4;">[Q7]</span>
    </div>

    <div style="background:#111827;border:1px solid rgba(29,201,164,0.15);border-radius:16px;padding:32px;">
      <div style="display:inline-block;background:rgba(255,180,0,0.1);border:1px solid rgba(255,180,0,0.2);border-radius:50px;padding:6px 16px;margin-bottom:16px;">
        <span style="color:#ffb400;font-size:13px;font-weight:600;">Novo Agendamento</span>
      </div>

      <h2 style="color:#f0f4f8;font-size:22px;font-weight:700;margin:0 0 24px;letter-spacing:-0.5px;">
        ${name} agendou uma reunião
      </h2>

      <div style="background:rgba(29,201,164,0.05);border:1px solid rgba(29,201,164,0.1);border-radius:12px;padding:20px;margin-bottom:20px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:rgba(160,174,192,0.6);font-size:13px;width:100px;">Nome</td>
            <td style="padding:8px 0;color:#f0f4f8;font-size:15px;font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:rgba(160,174,192,0.6);font-size:13px;">Email</td>
            <td style="padding:8px 0;color:#1dc9a4;font-size:15px;"><a href="mailto:${email}" style="color:#1dc9a4;text-decoration:none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:rgba(160,174,192,0.6);font-size:13px;">Telefone</td>
            <td style="padding:8px 0;color:#f0f4f8;font-size:15px;font-weight:600;"><a href="tel:${phone}" style="color:#1dc9a4;text-decoration:none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:rgba(160,174,192,0.6);font-size:13px;">Data</td>
            <td style="padding:8px 0;color:#f0f4f8;font-size:15px;font-weight:600;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:rgba(160,174,192,0.6);font-size:13px;">Horário</td>
            <td style="padding:8px 0;color:#f0f4f8;font-size:15px;font-weight:600;">${formattedTime}</td>
          </tr>
        </table>
      </div>

      ${message ? `
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;">
        <p style="color:rgba(160,174,192,0.6);font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Mensagem do cliente</p>
        <p style="color:#f0f4f8;font-size:14px;line-height:1.6;margin:0;">${message}</p>
      </div>
      ` : ''}

      <div style="text-align:center;margin-top:24px;">
        <a href="https://wa.me/55${phone.replace(/\D/g, '')}" style="display:inline-block;background:#25d366;color:#fff;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;text-decoration:none;margin-right:8px;">
          WhatsApp
        </a>
        <a href="mailto:${email}" style="display:inline-block;background:#1dc9a4;color:#0b0f1a;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;text-decoration:none;">
          Responder Email
        </a>
      </div>
    </div>

    <div style="text-align:center;padding-top:16px;margin-top:16px;">
      <p style="color:rgba(160,174,192,0.3);font-size:11px;margin:0;">
        Email interno - QodeSeven Technology
      </p>
    </div>
  </div>
</body>
</html>`;
}

// Configurar transportador de email
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

if (hasEmailConfig) {
  console.log(`[Email] Configurado com ${process.env.EMAIL_HOST || "smtp.gmail.com"} - Destino: ${process.env.COMPANY_EMAIL || "comercial@qode7.com"}`);
} else {
  console.warn("[Email] Credenciais SMTP não configuradas. Reuniões serão salvas localmente apenas.");
  console.warn("[Email] Configure EMAIL_USER e EMAIL_PASSWORD no .env para habilitar envio de emails.");
}

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
        return res.status(400).json({ error: "Dados incompletos. Preencha nome, email, telefone, data e horário." });
      }

      // Salvar localmente
      saveMeetingToLocal({ name, email, phone, message, date, time, status: "confirmado" });

      const scheduledDate = new Date(dateTime);
      const formattedDate = scheduledDate.toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
      const formattedTime = String(time).padStart(5, "0");

      // Gerar link direto para Google Calendar
      const startDateStr = scheduledDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const endDateStr = new Date(scheduledDate.getTime() + 3600000).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(`Reunião Qode7 - ${name}`)}&dates=${startDateStr}/${endDateStr}&details=${encodeURIComponent(`Cliente: ${name}\nEmail: ${email}\nTelefone: ${phone}\n${message ? `Mensagem: ${message}` : ""}`)}`;

      // Gerar arquivo ICS
      const icsContent = generateICS({ name, email, dateTime, message: message || "" });

      // Preparar emails
      const companyEmail = process.env.COMPANY_EMAIL || "comercial@qode7.com";

      const mailOptions = [
        // Email para o cliente
        {
          from: `"QodeSeven" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Reunião Confirmada - QodeSeven",
          html: buildClientEmailHTML(name, formattedDate, formattedTime, googleCalendarUrl),
          attachments: [{ filename: "convite-qode7.ics", content: icsContent, contentType: "text/calendar" }]
        },
        // Email para a equipe comercial
        {
          from: `"QodeSeven Agendamentos" <${process.env.EMAIL_USER}>`,
          to: companyEmail,
          subject: `Nova Reunião: ${name} - ${formattedDate} ${formattedTime}`,
          html: buildInternalEmailHTML(name, email, phone, message || "", formattedDate, formattedTime),
          attachments: [{ filename: "convite-qode7.ics", content: icsContent, contentType: "text/calendar" }]
        }
      ];

      // Enviar emails em background
      if (emailTransporter) {
        Promise.all(mailOptions.map(opt => emailTransporter.sendMail(opt)))
          .then(() => console.log(`[Email] Emails enviados com sucesso para ${email} e ${companyEmail}`))
          .catch(err => console.error("[Email] Erro ao enviar:", err.message));
      } else {
        console.warn(`[Reunião] Salva localmente (sem SMTP). Cliente: ${name}, Data: ${formattedDate} ${formattedTime}`);
      }

      res.status(200).json({ 
        success: true, 
        message: "Reunião agendada com sucesso! Você receberá um email de confirmação." 
      });
    } catch (error) {
      console.error("Erro no agendamento:", error);
      res.status(500).json({ error: "Erro interno no servidor. Tente novamente." });
    }
  });

  // Listar reuniões agendadas
  app.get("/api/meetings", (_req, res) => {
    try {
      const meetings = JSON.parse(fs.readFileSync(meetingsFile, "utf-8"));
      res.status(200).json({ success: true, meetings });
    } catch (error) {
      res.status(200).json({ success: true, meetings: [] });
    }
  });

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ 
      status: "ok", 
      emailConfigured: !!emailTransporter,
      companyEmail: process.env.COMPANY_EMAIL || "comercial@qode7.com"
    });
  });

  const port = process.env.PORT || 5001;
  server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}

startServer();
