import Stripe from 'stripe'
import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET)
console.log('STRIPE SECRET USED:', process.env.STRIPE_SECRET)

const router = express.Router(); 

const FRONTEND_URL = process.env.NODE_ENV === 'production' 
  ? process.env.FRONTEND_URL_PROD 
  : process.env.FRONTEND_URL_DEV

router.post("/create-checkout-session", async (req, res) => {
  try {
    // destructure die wichtigen Daten aus dem Body
    const { name, title, date, time, persons, price, prepayment, email, currency } = req.body;

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
        title,
        date,
        time,
        persons,
        price: price,
        prepayment,
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
router.get('/session/:id', async (req, res)=> {
    try{
        const session = await stripe.checkout.sessions.retrieve(req.params.id)
        res.json({
            name: session.metadata.name,
            title: session.metadata.title,
            date: session.metadata.date,
            time: session.metadata.time, 
            persons: session.metadata.persons,
            price: session.metadata.price,
            prepayment: session.metadata.prepayment
        })
    }catch(err){
        res.status(500).json({error: 'Session not found'})
    }
})


export default router