import { useNavigate } from 'react-router-dom';
import tours from '../data/tours.js'
import Button from './button.jsx'
import Gallery from './gallery.jsx'


export default function CardNew({ img, alt, title, children, iframe, images, showButton = true, titleAboveImage = false, bookingPath}) {
    
    const navigate = useNavigate()

    const tour = tours.find(t => t.title === title);

    if (!tour) {
        console.warn(`Tour not found: ${title}`);
        return null; // oder ein Fallback UI
    }

    const goToBooking = () => {
        navigate(bookingPath,{
            state: { tour }
        })
    }

    return (
        <section className={titleAboveImage ? 'mt-5 mb-5 p-3 flex flex-col items-center rounded bg-neutral-300/20 ' : 'mt-5 mb-5 p-3 md:w-1/4 flex flex-col items-center rounded bg-neutral-300/20'}>
            
            {titleAboveImage && <h2 className='mb-2 text-2xl font-semibold text-center'>{title.toUpperCase()}</h2>}

            {iframe ? (
                iframe
            ) : img ? (
                <img src={img} alt={alt || title} className='lg:max-h-80 md:max-h-150' />
            ) : <Gallery images={images} />}

            {!titleAboveImage && <h2 className='mt-4 mb-2 text-2xl font-semibold text-center'>{title.toUpperCase()}</h2>}

            <div className="lg:text-left">
                {children}
            </div>

            {showButton && (
                <Button onClick={goToBooking} className='mt-2 p-2 border-1 rounded active:bg-neutral-300 xl:hover:bg-neutral-300 active:text-teal-950 xl:hover:text-teal-950' content='Book now'/>
            )}
        </section>
    )
}
