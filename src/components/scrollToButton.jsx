import Button from './button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";



export default function ScrollToButton({handleShowMore}){    


    return(
        <section className='info content-animate text-neutral-500 text-2xl text-center '>
            <p>Sail with us</p>
            <Button 
                content={<FontAwesomeIcon icon={faArrowDown} /> }
                className='p-2 rounded-full bg-neutral-300 text-teal-900 active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300'
                onClick={handleShowMore}/>
        </section>
    )
}