import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Estas credenciais devem ser configuradas no Google Cloud Console
// Para o Manus, usaremos variáveis de ambiente
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback';
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

if (REFRESH_TOKEN) {
  oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
}

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export async function createGoogleCalendarEvent(meetingData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  dateTime: string;
}) {
  try {
    if (!REFRESH_TOKEN || !CLIENT_ID) {
      console.warn('Google Calendar não configurado. Pulando criação de evento.');
      return null;
    }

    const startDateTime = new Date(meetingData.dateTime);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hora de duração

    const event = {
      summary: `Reunião Qode7 - ${meetingData.name}`,
      description: `Cliente: ${meetingData.name}\nEmail: ${meetingData.email}\nTelefone: ${meetingData.phone}\n\nMensagem: ${meetingData.message}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      attendees: [
        { email: meetingData.email },
        { email: process.env.COMPANY_EMAIL || 'comercial@qode7.com' }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all', // Isso envia a notificação por e-mail para os participantes
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao criar evento no Google Calendar:', error);
    throw error;
  }
}
