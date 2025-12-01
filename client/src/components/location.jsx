import Card from './card.jsx'
import Footer from './footer.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Location(){
    return(
        <>
        <section className='flex flex-col items-center bg-neutral-300 '>
        <Card 
            title='Location' 
            titleAboveImage 
            showButton={false}
            iframe={
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794.4573740069393!2d-88.38545581017299!3d18.704454933566815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5bb1c1235ad469%3A0xc202677992c97a4b!2sSail%20bacalar!5e0!3m2!1sde!2smx!4v1763398779961!5m2!1sde!2smx" 
                width="800" 
                height="600" 
                className="w-full h-80 md:h-100 rounded"
                style={{border:0}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            }
        >
            <h4 className='mt-10 text-lg'>Contact:</h4>
            <p className='text-gr'>
                 <FontAwesomeIcon icon={faWhatsapp} /> +52 983 155 13 13
            </p>
        </Card>
        </section>
      
        </>
    )
}