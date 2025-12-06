import { http, HttpResponse  } from "msw";
import getFullyBookedDays from './utiles/fullyBookedDays.js'
import bookings from './data/bookings.js'

function isoToDate(date){
    const [year, month, day] = date.split('-')
    return `${day}.${month}.${year}`
}

export const bookingHandlers = [
    http.get('/api/fullyBookedDays', (resolver) => {
        const fullyBooked = getFullyBookedDays(bookings)
        return HttpResponse.json({
           fullyBooked
        })
    }),
    http.get('/api/available-times', ({request}) => {
          const url = new URL(request.url)
          const isoDate = url.searchParams.get('date')
          const date = isoToDate(isoDate)

          const timeSlots = ['10am', '3pm']
          const booking = bookings.filter(b => b.date === date)
          const bookedHours = booking.map(b => b.time)

          let available = timeSlots.filter(slot => !bookedHours.includes(slot))

          return HttpResponse.json({
            date,
            time: available
          })
    })
]