import { useState, useEffect } from "react";
import Button from './button.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';




export default function Gallery({images}){

    const[index, setIndex] = useState(0)
    const currentImage = images[index]

    const [isFullscreen, setIsFullscreen] = useState(false)

    
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
    
    useEffect(() => {
        document.body.style.overflow = isFullscreen ? 'hidden' : ''
        return () => (document.body.style.overflow = '')
    }, [isFullscreen])

    return(
        <section className="w-full h-full flex flex-col justify-center items-center gap-4">
            <img src={currentImage.url} alt={currentImage.alt} onClick={() => setIsFullscreen(true)} className='max-h-[400px] md:max-h-100 object-contain' />
            
            {isFullscreen && (
            <div
                className="fixed inset-0 z-40 md:bg-black/90  bg-black"
                onClick={() => setIsFullscreen(false)}
            >
            {/* Bild */}
                <div className="w-full h-full flex items-center justify-center">
                    <img
                    src={currentImage.url}
                    alt={currentImage.alt}
                    className="max-h-full max-w-full object-contain cursor-zoom-in"
                    draggable={false}
                    onClick={(e) => e.stopPropagation()}
                    />
                </div>

            {/* Buttons unten */}
                <div
                className="absolute bottom-8 left-0 right-0 flex justify-center gap-10 "
                onClick={(e) => e.stopPropagation()}
                >
                    <Button
                    onClick={prev}
                    children={<FontAwesomeIcon icon={faChevronLeft} size="lg" />}
                    />
                    <Button
                    onClick={next}
                    children={<FontAwesomeIcon icon={faChevronRight} size="lg" />}
                    />
                </div>
            </div>
            )}

            <section className='flex gap-8'>
                <Button onClick={next} children={<FontAwesomeIcon icon={faChevronLeft} size="lg" />} />
                <Button onClick={prev} children={<FontAwesomeIcon icon={faChevronRight} size="lg" />} />
            </section>
        </section>
    )
}


