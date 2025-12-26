import Button from './button.jsx'
import Gallery from './gallery.jsx'
import { useTranslation } from 'react-i18next'


export default function CardNew({ img, alt, title, children, iframe, images, showButton = true, titleAboveImage = false, bookingPath}) {
    
    const{ t } = useTranslation()
    const message = ` Hi 👋\nI would like to make a reservation for a ${title}. ⛵`
    const url =  `https://api.whatsapp.com/send?phone=529831551313&text=${encodeURIComponent(message)}`

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
                <a href={url} target='blank'><Button className='mt-2 p-2 border-1 rounded active:bg-neutral-300 xl:hover:bg-neutral-300 active:text-teal-950 xl:hover:text-teal-950' children={t('buttons.book')}/></a>
            )}
        </section>
    )
}
