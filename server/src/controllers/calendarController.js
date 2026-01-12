import Booking from '../models/bookings.js'
import openWednesday from '../data/openWednesday.js'

export const calendarController = async (req, res) => {

  try {
    const { date, tourId } = req.query
    const today = new Date()
    const start = new Date(today)
    start.setDate(start.getDate() + 1) // ab morgen
    const end = new Date(today)
    end.setMonth(end.getMonth() + 3) // 3 Monate in die Zukunft

    let TIME_SLOTS = ['06:00', '10:00', '15:00']

    // 🔹 Fall 1: Uhrzeiten für ein ausgewähltes Datum
    if (date) {
      const jsDate = new Date(date + 'T00:00:00')
      const weekday = jsDate.getDay()
      const isWednesday = weekday === 3
      const isOpenWednesday = openWednesday.includes(date)

      if (isWednesday && !isOpenWednesday) {
        return res.json({ disabled: true, availableTimes: [] })
      }
      let TIME_SLOTS = ['10:00', '15:00']
      if(tourId === 'sunrise'){
        TIME_SLOTS = ['06:00']
      }
      if(tourId === 'allDay'){
        TIME_SLOTS = ['10:00']
      }

      // Buchungen an diesem Tag
      const bookings = await Booking.find({
        date,
        status: { $ne: 'cancelled' }
      })

      if(tourId === 'allDay'){
        if(bookings.length > 0){
          return res.json({disabled: true, availableTimes: []})
        }
        return res.json({disabled: false, availableTimes: ['10:00']})
      }

      if(tourId === 'sunrise'){
        if(bookings.length > 0){
          return res.json({disabled: true, availableTimes: []})
        }
        return res.json({disabled: true, availableTimes:['06:00']})
      }
      
      

      const bookedTimes = bookings.map(b => b.time)
      const availableTimes = TIME_SLOTS.filter(slot => !bookedTimes.includes(slot))
      console.log(availableTimes)
      const isFullyBooked = availableTimes.length === 0


      return res.json({ disabled: isFullyBooked, availableTimes })
    }

    // 🔹 Fall 2: DisabledDays für den Kalender
    const bookings = await Booking.find({
      date: { $gte: start.toISOString().split('T')[0] },
      status: { $ne: 'cancelled' }
    })

    // Buchungen nach Datum zählen
    const bookingCount = {}
    bookings.forEach(b => {
      bookingCount[b.date] = (bookingCount[b.date] || 0) + 1
    })

    const disabledDays = []
    let current = new Date(start)
    while (current <= end) {
      const iso = current.toLocaleDateString('en-CA')
      const weekday = current.getDay()
      const isWednesday = weekday === 3
      const isOpen = openWednesday.includes(iso)
      const count = bookingCount[iso] || 0
      const fullyBooked = 
        tourId === 'allDay'
        ? count > 0
        : count >= TIME_SLOTS.length

    

      if (fullyBooked || (isWednesday && !isOpen)) {
        disabledDays.push(iso)
      }

      current.setDate(current.getDate() + 1)
    }

    return res.json({ disabledDays })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
