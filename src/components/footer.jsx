import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom'

export default function Footer() {
    return(
        <footer className='my-5 text-neutral-800 flex md:flex-row gap-5 items-center justify-center md:justify-around '>
            <section className='hidden md:block text-center'>
                <h2>LOCATION</h2>
                <p>Carretera Federal 307 KM 22.5 <br /> Bacalar, Quintana Roo, México</p>
            </section>
            <section className='block text-center'>
                <h2>CONTACT</h2>
                <p className='hidden md:block'>sail.bacalar@gmail.com</p>
                <a className='block md:hidden' href="https://wa.me/9831551313"> <FontAwesomeIcon className='block md:hidden mt-1 text-lg' icon={faWhatsapp} /></a>
                <a className='hidden md:block' href="https://wa.me/9831551313"> (+52) 983 155 13 13</a>
            </section>
            <a href='https://www.instagram.com/sail.bacalar/' target='blank'>
            <section className='text-center' >
                <h2 className=''>FOLLOW</h2>
                <FontAwesomeIcon className='mt-1 text-lg' icon={faInstagram} />
            </section>
            </a>
        </footer>
    )
}

