import Button from './button.jsx'
import Gallery from './gallery.jsx'


export default function Card({ img, alt, title, children, iframe, images, showButton = true, titleAboveImage = false }) {

    const message = ` Hi 👋\nI would like to make a reservation for a ${title}. ⛵`
    const url =  `https://api.whatsapp.com/send?phone=529831551313&text=${encodeURIComponent(message)}`
    return (
        <section className='mt-5 mb-5 p-3 lg:w-1/2 flex flex-col items-center rounded bg-neutral-300/20'>
            
            {titleAboveImage && <h2 className='mb-2 text-2xl font-semibold text-center'>{title.toUpperCase()}</h2>}

            {iframe ? (
                iframe
            ) : img ? (
                <img src={img} alt={alt || title} className='lg:max-w-100 ' />
            ) : <Gallery images={images} />}

            {!titleAboveImage && <h2 className='mt-4 mb-2 text-2xl font-semibold text-center'>{title.toUpperCase()}</h2>}

            <div className="w-full max-w-3xl lg:text-left">
                {children}
            </div>

            {showButton && (
                <a href={url} target='blank'><Button className='mt-2 p-2 border-1 rounded active:bg-neutral-300 xl:hover:bg-neutral-300 active:text-teal-950 xl:hover:text-teal-950' content='Book now'/></a>
            )}
        </section>
    )
}
