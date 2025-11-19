import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom'

export default function Footer() {
    return(
        <footer className='mt-5 text-neutral-800 flex md:flex-row gap-5 items-center justify-center md:justify-around '>
            <section className='hidden md:block text-center'>
                <h2>LOCATION</h2>
                <p>Carretera Federal 307 KM 22.5 <br /> Bacalar, Quintana Roo, México</p>
            </section>
            <section className='hidden md:block text-center'>
                <h2>CONTACT</h2>
                <p>sail.bacalar@gmail.com<br /><a href="https://wa.me/9831551313"> (+52) 983 155 13 13</a></p>
            </section>
            <section className='text-center' >
                <h2 className='hidden md:block'>FOLLOW</h2>
                <a href='https://www.instagram.com/sail.bacalar/' target='blank'><FontAwesomeIcon className='mt-1 text-lg' icon={faInstagram} /></a>
            </section>
            <section className='text-center md:hidden'>
                <a href='https://wa.me/9831551313' target='blank'><FontAwesomeIcon className='mt-1 text-lg' icon={faWhatsapp} /></a>
            </section>
        </footer>
    )
}

