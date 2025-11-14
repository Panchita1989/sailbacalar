import Button from './button.jsx'

export default function Card({img, alt, title, children}){

    return(
        <section className='mt-5 p-3 lg:w-1/2 flex flex-col items-center bg-white/20'>
            <img src={img} alt={alt} className='lg:max-w-100' />
            <h2 className='mt-4 mb-2 text-2xl font-semibold text-center'>{title}</h2>
            <div className="w-full max-w-3xl lg:text-left">
                {children}
            </div>
            <Button className='mt-2 p-2 border-1 rounded active:bg-neutral-300 xl:hover:bg-neutral-300 active:text-teal-950 xl:hover:text-teal-950' content='Book now'/>
        </section>
    )
}