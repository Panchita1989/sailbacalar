import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingCalendar(){
    const today= new Date()
    const maxDate= new Date()
    maxDate.setMonth(maxDate.getMonth() + 2)

    return(
        <Calendar
            className='mt-5'
            minDate={today}
            maxDate={maxDate}
        />
    )
}