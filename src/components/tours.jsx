import Card from './card.jsx'
import Footer from './footer.jsx'

export default function Tours(params) {
    return(
        <>
        <main className='mx-10 py-5 text-center text-neutral-300 '>
            <h1 className='h1'>TOURS</h1>
            <section className='lg:flex lg:gap-4'>
            <Card img='./images/privat.jpg' alt='privat boat tour' title='Private Tour'>
                <p className='xl:px-30 '>
                    Set sail on a private adventure in the breathtaking Bacalar Lagoon with our 34-foot catamaran.
                    Whether you're celebrating a special occasion, enjoying time with family, or creating unforgettable moments with friends, 
                    this personalized tour is designed just for you. Swim in pristine waters, soak up the beauty of the lagoon, and indulge 
                    in snacks and drinks onboard. For an extra touch, upgrade to our premium food and beverage package. Discover Bacalar from 
                    a whole new perspective with a fully customizable experience.
                </p>
            </Card>
            <Card img='./images/collective.jpg' alt='boat tour' title='Collective Tour'>
                <p className='xl:px-30 '>
                    Join us on an unforgettable group adventure aboard our 30-foot sailing catamaran 
                    and discover the stunning Bacalar Lagoon. Sail through the magical turquoise 
                    waters, stopping at breathtaking swimming spots and enjoying the tropical scenery
                    around you. While onboard, relax with refreshing drinks and delicious snacks, 
                    surrounded by good vibes and like-minded adventurers. This shared experience is 
                    perfect for solo travelers, couples, and small groups seeking an affordable yet 
                    unique way to explore the wonders of Bacalar. 
                </p>
            </Card>
            </section>
            <section className='sail flex flex-col gap-2 items-center justify-center rounded xl:flex-row'>
                <h2 className='xl:text-8xl xl:w-1/2'>Sail With Us</h2>
                <p className='xl:text-xl xl:w-1/2 xl:px-5'>Escape to paradise with our private 34-foot catamaran tour on Bacalar Lagoon.
                    Whether you're marking a special occasion or 
                    just spending quality time with loved ones, this exclusive sailing experience offers tranquility, adventure, 
                    and customization. Explore Bacalar’s vibrant waters, relax with onboard refreshments, and savor tasty snacks.</p>
            </section>            
        </main>
        <Footer/>
        </>        
    )
}