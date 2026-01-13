import { useLocation } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function ThankYou() {

    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id')
    
    const[booking, setBooking] = useState(null)

    const apiURL = import.meta.env.VITE_API_URL || 'https://sailbacalar-backend.onrender.com'

    useEffect(()=>{
        if(!sessionId) return
        fetch(`${apiURL}/payment/session/${sessionId}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                console.log(data)
            })
    }, [sessionId])

    if(!booking) return <p>Loading booking....</p>
    
    const pending = booking.price - booking.prepayment

    return(
    <section className='text-center'>
        <h1 className='text-2xl'>Thank You {booking.name}!</h1>
        <h3>Your Tour : {booking.title}</h3>
        <p>Date : {new Date(booking.date).toLocaleDateString()}</p>
        <p>Time : {booking.time}</p>
        <p>Persons: {booking.persons}</p>
        <p>Total Price: ${booking.price}</p>
        <p>Prepayment : ${booking.prepayment}</p>
        <p>Pending: ${pending}</p>
        <p>A confirmation Email has been sent to you. For any further question please do not hesistate to contact us on <a className='' href="https://wa.me/9831551313">Whatsapp</a> </p>    
    </section>
    )
}