import { useState, useEffect } from "react";
import Button from './button.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';




export default function Gallery({images}){

    const[index, setIndex] = useState(0)
    const currentImage = images[index]
    
    useEffect(()=>{
        const preloadNext = new Image()
        preloadNext.src = images[(index+ 1 )% images.length].url
        const preloadPrev = new Image()
        preloadPrev.src = images[(index - 1 + images.length) % images.length].url
    }, [index, images])


    function next() {
        setIndex(prev => (prev + 1) % images.length);
    }
    function prev() {
         setIndex(prev => (prev - 1 + images.length) % images.length);
    }
    
    

    return(
        <section className="w-full h-full flex flex-col justify-center items-center gap-4">
            <img src={currentImage.url} alt={currentImage.alt} className='max-h-[170px] md:max-h-100 object-contain' draggable={false}/>
            <section className='flex gap-8'>
                <Button onClick={next} content={<FontAwesomeIcon icon={faChevronLeft} size="lg" />} />
                <Button onClick={prev} content={<FontAwesomeIcon icon={faChevronRight} size="lg" />} />
            </section>
        </section>
    )
}


