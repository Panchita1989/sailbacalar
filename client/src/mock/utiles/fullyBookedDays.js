import bookings from '../data/bookings.js'

export default function getFullyBookedDays(bookings, slotsPerDay = 2){
    const fullyBookedDays = []

    bookings.forEach(e => {
        const count = bookings.filter(x => x.date === e.date).length

        if(count >= slotsPerDay && !fullyBookedDays.includes(e.date)){
            const[day, month, year] = e.date.split('.')
            const iso = `${year}-${month}-${day}`
            fullyBookedDays.push(iso)
        }
    })
    return fullyBookedDays
} 