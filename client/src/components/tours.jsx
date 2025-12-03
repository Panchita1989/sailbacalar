import Card from './card.jsx'
import Footer from './footer.jsx'
import Button from './button.jsx'
import Reviews from './reviews.jsx'
import {useCollapse} from 'react-collapsed';
import {fotoList} from '../data/gallery.js'



export default function Tours() {

    const{
        getCollapseProps: getCollapsePrivat, 
        getToggleProps: getTogglePrivat, 
        isExpanded: isPrivatExpanded
    } = useCollapse()

    const{
        getCollapseProps: getCollapseCollect, 
        getToggleProps: getToggleCollect, 
        isExpanded: isCollectExpanded
    } = useCollapse()

    return(
        <>
        <main className='m-10  text-center  '>
            <h1 className='title'>TOURS</h1>
            <section className='lg:flex lg:gap-4'>
            <Card img='./images/privat.jpg' alt='privat boat tour' title='Private Tour'>
            {isPrivatExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className=" mt-2 mb-4 leading-none "
                        {...getTogglePrivat()}
                    >
                       Show More ▼
                    </button>
                </div>

            )}
             <section {...getCollapsePrivat()}>
                <p className='xl:px-30 '>
                    Set sail on a private adventure in the breathtaking Bacalar Lagoon with our 30-foot catamaran.
                    Whether you're celebrating a special occasion, enjoying time with family, or creating unforgettable moments with friends, 
                    this personalized tour is designed just for you. Swim in pristine waters, soak up the beauty of the lagoon, and indulge 
                    in snacks and drinks onboard. For an extra touch, upgrade to our premium food and beverage package. Discover Bacalar from 
                    a whole new perspective with a fully customizable experience.
                </p>
            </section>
            {!isPrivatExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className="mt-2 mb-4 leading-none "
                        {...getTogglePrivat()}
                    >
                        Show Less ▲
                    </button>
                </div>

            )}
            </Card>
            <Card img='./images/collective.jpg' alt='boat tour' title='Collective Tour'>
                {isCollectExpanded ? '' : (
                    <div className="flex justify-center">
                        <button 
                            className=" mt-2 mb-4 leading-none "
                            {...getToggleCollect()}
                        >
                            Show More ▼
                        </button>
                    </div>
                )}
            <section {...getCollapseCollect()}>
                <p className='xl:px-30 '>
                    Join us on an unforgettable group adventure aboard our 30-foot sailing catamaran 
                    and discover the stunning Bacalar Lagoon. Sail through the magical turquoise 
                    waters, stopping at breathtaking swimming spots and enjoying the tropical scenery
                    around you. While onboard, relax with refreshing drinks and delicious snacks, 
                    surrounded by good vibes and like-minded adventurers. This shared experience is 
                    perfect for solo travelers, couples, and small groups seeking an affordable yet 
                    unique way to explore the wonders of Bacalar. 
                </p>
            </section>
            {!isCollectExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className="mt-2 mb-4 leading-none "
                        {...getToggleCollect()}
                    >
                        Show Less ▲
                    </button>
                </div>
            )}
            </Card>
            </section>
            <section className='sail text-neutral-100 flex flex-col md:font-normal gap-2 items-center justify-center rounded xl:flex-row px-15'>
                <h2 className='xl:text-8xl xl:w-1/2'>Sail With Us</h2>
                <div className="xl:w-1/2 xl:px-5 flex flex-col gap-2 xl:text-xl xl:px-5">
                <p className=''>Escape to paradise with our private 30-ft catamaran tour on Bacalar Lagoon.
                    Whether you're marking a special occasion or just spending quality time with loved ones.</p> <p className='hidden md:block'>This exclusive sailing experience offers tranquility, adventure, 
                    and customization. Explore Bacalar’s vibrant waters, relax with onboard refreshments, and savor tasty snacks.</p>
                </div>
            </section>
            <section className='flex justify-center'>                
                <Card title='The Vibe' images={fotoList} titleAboveImage  showButton={false}/>               
            </section>           
        </main>  
        <Reviews /> 
        <Footer/>      
        </>  
    )
    
}