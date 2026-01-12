import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import openWednesday from '../mock/data/openWednesday.js'
import { useEffect, useState } from "react";

export default function BookingCalendar({
    setSelectedHour, 
    selectedDate, 
    setSelectedDate, 
    availableHours, 
    setAvailableHours,
    tourId
}){
    
    const[disabledDays, setDisabledDays] = useState([])
    
    const today= new Date()
    const maxDate= new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)

    const handleChangeDate = (e) => {
        setSelectedHour(null)
        setSelectedDate(e)
    }
    
    useEffect(() => {    
    fetch(`http://localhost:5000/calendar/availability?tourId=${tourId}`) // kein date Query → liefert disabledDays
      .then(res => res.json())
      .then(data => {
        setDisabledDays(data.disabledDays)
        console.log(data.disabledDays)
      })      
      .catch(console.error)
  }, [])


    useEffect(() => {
        if(!selectedDate) return

        const iso = selectedDate.toLocaleDateString('en-CA')
        console.log(iso)
        fetch( `http://localhost:5000/calendar/availability?date=${iso}&tourId=${tourId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.availableTimes)
            setAvailableHours(data.availableTimes)
        })
        .catch(error => console.log(error))
    }, [selectedDate])
    

    
    return(
        <Calendar
            className='max-w-fit mt-5 '
            minDate={today}
            maxDate={maxDate}
            onChange={handleChangeDate}
            value={selectedDate}
            tileDisabled={({ date }) => disabledDays.includes(date.toISOString().split('T')[0])}

            
        />
    )
}