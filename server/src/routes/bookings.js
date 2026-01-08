import express from 'express'
import bookingSchema from '../models/bookings.js'

const router = express.Router()
const Bookings = bookingSchema

router.get('/', async(req, res) => {
    try {
        const bookings = await Bookings.find()
        res.json(bookings)
        res.send('Alle Bookings')
    } catch (err) {
        res.status(500).json({messsage: err.message})
        console.error(err)
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
        prepayment: req.body.prepayment

    })
    try {
        const newBooking = await booking.save()
        res.status(201).json(newBooking)
    } catch (err) {
        res.status(400).json({messsage: err.message})
        console.error(err)
    }
})

export default router