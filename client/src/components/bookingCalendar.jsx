import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";

export default function BookingCalendar({
    setSelectedHour, 
    selectedDate, 
    setSelectedDate, 
    setAvailableHours,
    tourId
}){
    
    const[disabledDays, setDisabledDays] = useState([])
    const [loading, setloading] = useState(true)
    
    const today= new Date()
    const maxDate= new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)

    const handleChangeDate = (e) => {
        setSelectedHour(null)
        setSelectedDate(e)
    }

    const apiURL = import.meta.env.VITE_API_URL || 'https://sailbacalar-backend.onrender.com'
    
    useEffect(() => {   
    fetch(`${apiURL}/calendar/availability?tourId=${tourId}`) 
      .then(res => res.json())
      .then(data => {
        setDisabledDays(data.disabledDays)
        setloading(false)
      })      
      .catch(console.error)
  }, [])


    useEffect(() => {
        if(!selectedDate) return

        const iso = selectedDate.toLocaleDateString('en-CA')
        console.log(iso)        
    fetch( `${apiURL}/calendar/availability?date=${iso}&tourId=${tourId}`)
        .then(res => res.json())
        .then(data => {
            setAvailableHours(data.availableTimes)
        })
        .catch(error => console.log(error))
    }, [selectedDate])
    

    
    return(
        <>
        { loading ? <p>Loading... </p> :
        <Calendar
            className='max-w-fit mt-5 '
            minDate={today}
            maxDate={maxDate}
            onChange={handleChangeDate}
            value={selectedDate}
            tileDisabled={({ date }) => (disabledDays || []).includes(date.toISOString().split('T')[0])}

            
        />}
        </>
    )
}