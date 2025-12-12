import { useLocation } from 'react-router-dom'


export default function ThankYou() {

   const {state} = useLocation()
    const name = state ? state.name : 'Guest'

    console.log(name)

    return(
    <section className='text-center'>
        <h1 className='text-2xl'>Thank You {name}!</h1>
        <p>A confirmation Email has been sent to you. For any further question please do not hesistate to contact us on <a className='' href="https://wa.me/9831551313">Whatsapp</a> </p>    
    </section>
    )
}