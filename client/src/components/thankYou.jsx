import { useLocation } from 'react-router-dom'


export default function ThankYou() {

    const {state} = useLocation()
    const {name, title, selectedDate, selectedHour, persons, price, prepayment} = state || {}

    console.log(name)
    const pending = price - prepayment
    return(
    <section className='text-center'>
        <h1 className='text-2xl'>Thank You {name}!</h1>
        <h3>Your Tour : {title}</h3>
        <p>Date : {new Date(selectedDate).toLocaleDateString()}</p>
        <p>Time : {selectedHour}</p>
        <p>Persons: {persons}</p>
        <p>Total Price: ${price}</p>
        <p>Prepayment : ${prepayment}</p>
        <p>Pending: ${pending}</p>
        <p>A confirmation Email has been sent to you. For any further question please do not hesistate to contact us on <a className='' href="https://wa.me/9831551313">Whatsapp</a> </p>    
    </section>
    )
}