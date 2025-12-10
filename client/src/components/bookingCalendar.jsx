import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import openWednesday from '../mock/data/openWednesday.js'
import { useEffect, useState } from "react";

export default function BookingCalendar({selectedDate, setSelectedDate, availableHours, setAvailableHours}){
    const[fullyBookedDays, setfullybookedDays] = useState([])
    
    const today= new Date()
    const maxDate= new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)

    console.log(selectedDate)

    const handleChangeDate = (e) => {
        setSelectedDate(e)
        console.log(selectedDate)
    }
    const disabled = (date)=>{
        const iso =  date.toISOString().split('T')[0]
        const weekday = date.getDay()

        const isFullyBooked = fullyBookedDays.includes(iso)
        const isWednesday = weekday === 3
        const isOpen = openWednesday.includes(iso)

        if(isFullyBooked) return true 
        if(isWednesday && !isOpen) return true

        return false
    }

    useEffect(() =>{
        fetch('/api/fullyBookedDays')
        .then(res => res.json())
        .then(data =>{
            console.log(data.fullyBooked)
            setfullybookedDays(data.fullyBooked)
        })
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if(!selectedDate) return

        const iso = selectedDate.toISOString().split('T')[0]
        console.log(iso)

        fetch(`/api/available-times?date=${iso}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAvailableHours(data.time)
        })
        .catch(error => console.log(error))
    }, [selectedDate])

    return(
        <Calendar
            className='mt-5'
            minDate={today}
            maxDate={maxDate}
            onChange={handleChangeDate}
            value={selectedDate}
            tileDisabled={({date}) => disabled(date)}
            
        />
    )
}