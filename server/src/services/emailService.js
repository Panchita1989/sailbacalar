import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendBookingEmails = async (booking) => {
    const { name, email, date, time, persons, price, prepayment,language } = booking;
    const pending = price - prepayment;

      const messages = {
        en: {
        customer: `
            Hi ${name}, 🎉
                
            Thank you for booking your tour with us!
                
            Here are your booking details:
            Tour: ${booking.title}
            Date: ${date}
            Time: ${time}
            Persons: ${persons}
            Total Price: $${price} MXN
            Prepayment: $${prepayment} MXN
            Pending Payment: $${pending} MXN
                
            If you need to make any changes or cancellations, please contact us via WhatsApp at 983 155 1313.
                
            We look forward to seeing you soon!
            - Bacalar Tours
                  `,
        subject: `Your booking confirmation for ${booking.title} on ${date}`
        },
        es: {
        customer: `
            Hola ${name}, 🎉
                
            ¡Gracias por reservar tu tour con nosotros!
                
            Aquí están los detalles de tu reserva:
            Tour: ${booking.title}
            Fecha: ${date}
            Hora: ${time}
            Personas: ${persons}
            Precio total: $${price} MXN
            Anticipo: $${prepayment} MXN
            Pago pendiente: $${pending} MXN
                
            Si necesitas hacer algún cambio o cancelación, por favor contáctanos vía WhatsApp al 983 155 1313.
                
            ¡Esperamos verte pronto!
            - Bacalar Tours
                  `,
        subject: `Confirmación de tu reserva para ${booking.title} el ${date}`
        }
      };


  await resend.emails.send({
    from: `"Bacalar Tours" <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: messages[language]?.subject || messages.en.subject,
    text: messages[language]?.customer || messages.en.customer,
  });

  await resend.emails.send({
    from: `"Bacalar Tours" <${process.env.FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New booking on ${date}`,
    text: `New Booking Received:
            Name: ${name}
            Tour: ${booking.title}
            Date: ${date}
            Time: ${time}
            Persons: ${persons}
            Prepayment: $${prepayment} MXN
            Pending Payment: $${pending} MXN
            Total Price: $${price} MXN
            Customer Email: ${email}
            Phone: ${booking.phone}`,
  });
};
