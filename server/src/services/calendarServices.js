import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";

// Scope für Google Calendar
const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export const addBookingToCalendar = async (booking) => {
  try {
    // Authentifizierung über Workload Identity Federation
    const auth = new GoogleAuth({
      scopes: SCOPES,
      // Wichtig: project number / pool / provider
      workloadIdentityPoolProvider: "projects/668664246985/locations/global/workloadIdentityPools/sailbacalar/providers/render-backend",
      serviceAccountEmail: "sail-bacalar-calendar@project-d5549504-9cad-411d-9bd.iam.gserviceaccount.com"
    });

    const client = await auth.getClient();
    const calendar = google.calendar({ version: "v3", auth: client });

    const event = {
      summary: `Tour: ${booking.title}`,
      description: `Booking for ${booking.name}, ${booking.persons} persons, Phone: ${booking.phone}, Email: ${booking.email}`,
      start: {
        dateTime: new Date(`${booking.date}T${booking.time}:00`).toISOString(),
        timeZone: "America/Cancun",
      },
      end: {
        dateTime: new Date(
          new Date(`${booking.date}T${booking.time}:00`).getTime() + 2 * 60 * 60 * 1000
        ).toISOString(),
        timeZone: "America/Cancun",
      },
      attendees: [{ email: process.env.ADMIN_EMAIL }],
      reminders: { useDefault: true },
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: event,
    });

    console.log("Booking added to Google Calendar:", response.data.htmlLink);
  } catch (err) {
    console.error("Error adding booking to calendar:", err);
  }
};
