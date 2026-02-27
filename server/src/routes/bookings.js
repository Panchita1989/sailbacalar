import express from 'express'
import bookingSchema from '../models/bookings.js'
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const router = express.Router()
const Bookings = bookingSchema

router.get("/", async (req, res) => {
  try {
    const bookings = await Bookings.find().sort({ date: 1, time: 1 })
    res.json(bookings)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
})

router.post("/manual", verifyAdmin, async (req, res) => {
  try {
    const booking = new Bookings({
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      persons: req.body.persons,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      price: req.body.price,
      prepayment: req.body.prepayment || 0,
      status: req.body.status || "pending",
    })

    const savedBooking = await booking.save()
    res.status(201).json(savedBooking)
  } catch (err) {
    console.error("Manual booking error:", err)
    res.status(400).json({ message: err.message })
  }
})

router.post('/', async(req, res) => {
    const booking = new Bookings({
        date: req.body.date,
        time: req.body.time,
        persons: req.body.persons,
        name: req.body.name, 
        phone: req.body.phone,
        email: req.body.email,
        totalPrice: req.body.totalPrice,
        prepayment: req.body.prepayment,
        language: { type: String, default: 'en' }

    },{ timestamps: true })
    try {
        const newBooking = await booking.save()
        res.status(201).json(newBooking)
    } catch (err) {
        res.status(400).json({messsage: err.message})
        console.error(err)
    }
})

router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    await Bookings.findByIdAndDelete(req.params.id)
    res.json({ message: "Booking deleted" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
})
router.put("/:id",verifyAdmin, async (req, res) => {
  try {
    const updatedBooking = await Bookings.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        persons: req.body.persons,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        price: req.body.price,
        prepayment: req.body.prepayment,
        status: req.body.status
      },
      { new: true }
    );

    res.json(updatedBooking);
  } catch (err) {
    console.error("Update error:", err);
    res.status(400).json({ message: err.message });
  }
});


export default router