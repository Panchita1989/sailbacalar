import Button from './button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";



export default function ScrollToButton({handleShowMore}){    


    return(
        <section className='info content-animate  md:text-2xl text-gr text-center '>
            <p>Sail with us</p>
            <Button 
                children={<FontAwesomeIcon icon={faArrowDown} /> }
                className='p-2 rounded-full bg-neutral-300 text-neutral-800 active:bg-neutral-800 active:text-neutral-300 xl:hover:bg-neutral-800 xl:hover:text-neutral-300'
                onClick={handleShowMore}/>
        </section>
    )
}