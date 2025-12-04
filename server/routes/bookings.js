import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Bookings List')
    res.send('Bookings List')
})
router.get('/new', (req, res) => {
    console.log('New Booking')
    res.send('New Booking')
})

export default router