import Stripe from 'stripe'
import express from 'express'
import dotenv from 'dotenv';
import bookingSchema from '../models/bookings.js'
import { sendBookingEmails } from '../services/emailService.js';
import { addBookingToCalendar } from '../services/calendarServices.js';
dotenv.config();

const Bookings = bookingSchema


const stripe = new Stripe(process.env.STRIPE_SECRET)
console.log('STRIPE SECRET USED:', process.env.STRIPE_SECRET)

const router = express.Router(); 

const FRONTEND_URL = process.env.NODE_ENV === 'production' 
  ? process.env.FRONTEND_URL_PROD 
  : process.env.FRONTEND_URL_DEV

router.post("/create-checkout-session", async (req, res) => {
  try {
    // destructure die wichtigen Daten aus dem Body
    const { name, title, date, time, persons, price, prepayment, email, phone, currency, language } = req.body;

    // Stripe Checkout Session erstellen
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      
      line_items: [
        {
          price_data: {
            currency: currency || "mxn",
            product_data: {
              name: title,  // Name der Tour
            },
            unit_amount: Math.round(prepayment * 100), // Betrag in Cent
          },
          quantity: 1, // nur 1 Tour pro Checkout
        },
      ],
      metadata: {
        name,
        email, 
        phone,
        title,
        date,
        time,
        persons,
        price: price,
        prepayment,
        language
      },
      success_url: `${FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`, // anpassen
      cancel_url:  `${FRONTEND_URL}/cancel`,   // anpassen
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Stripe checkout session failed" });
  }
});


router.post('/confirm-booking', async (req, res) => {
  const { sessionId } = req.body

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return res.status(400).json({ message: 'Payment not completed' })
    }

    const existing = await Bookings.findOne({ stripeSessionId: sessionId })
    if (existing) {
      return res.json(existing)
    }

    const booking = await Bookings.create({
      name: session.metadata.name,
      email:session.metadata.email,
      phone: session.metadata.phone,
      title: session.metadata.title,
      date: session.metadata.date,
      time: session.metadata.time, 
      persons: session.metadata.persons,
      price: session.metadata.price,
      prepayment: session.metadata.prepayment,
      language: session.metadata.language,

    })
    try {
      await addBookingToCalendar(booking)
    } catch (error) {
      console.error('Google Calendar error: ', error)
    }
    
    sendBookingEmails(booking).catch(err => console.error("Email error:", err));


    res.json(booking)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})


export default router