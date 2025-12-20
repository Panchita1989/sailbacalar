import CardNew from './cardNew.jsx'
import Footer from './footer.jsx'
import Button from './button.jsx'
import Reviews from './reviews.jsx'
import InformationCard from './informationCard'
import {useCollapse} from 'react-collapsed';
import {fotoList} from '../data/gallery.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { faCashApp } from "@fortawesome/free-brands-svg-icons"




export default function ToursNew() {

    const{
        getCollapseProps: getCollapsePrivat, 
        getToggleProps: getTogglePrivat, 
        isExpanded: isPrivatExpanded
    } = useCollapse()

    const{
        getCollapseProps: getCollapseInclusive, 
        getToggleProps: getToggleInclusive, 
        isExpanded: isInclusiveExpanded
    } = useCollapse()

    const{
        getCollapseProps: getCollapseAllDay, 
        getToggleProps: getToggleAllDay, 
        isExpanded: isAllDayExpanded
    } = useCollapse()

    const{
        getCollapseProps: getCollapseRomantic, 
        getToggleProps: getToggleRomantic, 
        isExpanded: isRomanticExpanded
    } = useCollapse()

    const{
        getCollapseProps: getCollapseSunrise, 
        getToggleProps: getToggleSunrise,
        isExpanded: isSunriseExpanded
    } = useCollapse()

    return(
        <>
        <main className='m-10  text-center  '>
            <h1 className='text-3xl font-semibold '>TOURS</h1>
            <section className='flex flex-col items-center md:flex-row justify-center md:items-start  md:flex-wrap md:gap-10'>
            <CardNew 
                img='./images/privat.jpg' 
                alt='privat boat tour' 
                title='Classic Private Tour' 
                bookingPath='/bookPrivat' 
            >
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
                    <ul className='mb-5'>
                        <li className=''>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                                <div>
                                    <h4>Duration</h4>
                                    <p>4 hours</p>
                                </div>
                            </div>
                        </li>
                        <li className='mt-3'>
                            <div className='flex gap-3'> 
                                <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                                <div className='text-left'>
                                    <h4>Group Size</h4>
                                    <p>max 14 people</p>
                                </div>
                            </div>
                        </li>
                        <li className='mt-3'>
                            <div className='flex gap-3 items-center'>
                               <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                               <div className='text-left'>
                                    <h4>Ideal for:</h4>
                                    <p>Families, couples, or groups of friends looking for a relaxed and private tour.</p>
                                </div> 
                            </div>
                        </li>
                        <li className='mt-3'>
                            <div className='flex gap-3 items-center'>
                                <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                                <div className='text-left'>
                                    <h4>Prices:</h4>
                                    <p>$5'000 (for 2 Persons), $800 MXN for adicional Person</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                <p className='text-left'>
                    Set sail on a private adventure in the breathtaking Bacalar Lagoon with our 30-foot catamaran.
                    Whether you're celebrating a special occasion, enjoying time with family, or creating unforgettable moments with friends, 
                    this personalized tour is designed just for you. Swim in pristine waters, soak up the beauty of the lagoon, and indulde 
                    in snacks and drinks onboard. Discover Bacalar from 
                    a whole new perspective with a fully customizable experience.
                </p>
                <h3 className='text-[14px] mt-5 text-left'>Where we’ll take you:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Pirats Chanel</li>
                    <li>Bird Island</li>
                    <li>Cenote Esmeralda</li>
                    <li>Cenote Negro</li>
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>What's included:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Water</li>
                    <li>Sparkling Water</li>
                    <li>Juices</li>
                    <li>Mixed seasonal Fruits</li>
                    <li>Guacamole</li>
                    <li>Day Pass Asana Glamping (Bathroom and showers available)</li>
                    <li>Parking</li>
                </ul>
                
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
            
            </CardNew> 
             <CardNew 
                img='./images/allInclusive.jpg' 
                alt='boat tour' 
                title='All Inclusive Private Tour' 
                bookingPath='/bookPrivat' >
             {isInclusiveExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className=" mt-2 mb-4 leading-none "
                        {...getToggleInclusive()}
                    >
                        Show More ▼
                    </button>
                </div>
             )}
             <section {...getCollapseInclusive()}>
                <ul className='mb-5'>
                    <li className=''>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                            <div>
                                <h4>Duration</h4>
                                <p>4 hours</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3'> 
                            <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                            <div className='text-left'>
                                <h4>Group Size</h4>
                                <p>max 14 people</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                            <div className='text-left'>
                                <h4>Ideal for:</h4>
                                <p>Families, couples, and groups of friends seeking a relaxed experience with drinks and fresh snacks.</p>
                            </div> 
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                            <div className='text-left'>
                                <h4>Prices:</h4>
                                <p>$6'300 MXN (for 2 Persons), $1'000 MXN for adicional Person</p>
                            </div>
                        </div>
                    </li>
                    </ul>
                <p className='text-left'>
                    Set sail on a private all-inclusive catamaran tour across the breathtaking Bacalar Lagoon. 
                    Designed exclusively for your group, this experience includes swimming in crystal-clear waters, 
                    relaxing as you take in the lagoon’s beauty, and enjoying a selection of drinks and fresh snacks onboard. 
                    Discover Bacalar from a new perspective with a fully personalized and carefree experience.
                </p>
                <h3 className='text-[14px] mt-5 text-left'>Where we’ll take you:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Pirats Chanel</li>
                    <li>Bird Island</li>
                    <li>Cenote Esmeralda</li>
                    <li>Cenote Negro</li>
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>What's included:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Water</li>
                    <li>Sparkling Water</li>
                    <li>Beers</li>
                    <li>Soda</li>
                    <li>Tequila</li>
                    <li>Ron Bacardi</li>
                    <li>Juices</li>
                    <li>Mixed seasonal Fruits</li>
                    <li>Guacamole</li>
                    <li>Ceviche</li>
                    <li>Day Pass Asana Glamping (Bathroom and showers available)</li>
                    <li>Parking</li>
                </ul>                
            </section>
             {!isInclusiveExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className="mt-2 mb-4 leading-none "
                        {...getToggleInclusive()}
                    >
                        Show Less ▲
                    </button>
                </div>
            )}
             </CardNew>
             <CardNew 
                img='./images/allDay.jpg' 
                alt='boat tour' 
                title='All Day Private Tour' 
                bookingPath='/bookPrivat'>
             {isAllDayExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className="mt-2 mb-4 leading-none "
                        {...getToggleAllDay()}
                    >
                        Show More ▼
                    </button>
                </div>
             )}
             <section {...getCollapseAllDay()}>
                <ul className='mb-5'>
                    <li className=''>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                            <div>
                                <h4>Duration</h4>
                                <p>6 hours</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3'> 
                            <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                            <div className='text-left'>
                                <h4>Group Size</h4>
                                <p>max 14 people</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                            <div className='text-left'>
                                <h4>Ideal for:</h4>
                                <p>Families, couples, or groups of friends looking for a full-day, relaxed lagoon experience.</p>
                            </div> 
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                            <div className='text-left'>
                                <h4>Prices:</h4>
                                <p>$7'800 MXN (for 2 Persons), $1200 MXN for adicional Person</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p>
                    Set sail on a private all-day catamaran tour across the breathtaking Bacalar Lagoon. Designed exclusively for 
                    your group, this extended experience gives you plenty of time to swim in crystal-clear waters, relax, and 
                    explore hidden spots far away from crowded, touristic areas. Savor refreshing drinks and fresh snacks onboard
                    while discovering Bacalar from a new perspective in a truly personalized and carefree way.
                </p>
                <h3 className='text-[14px] mt-5 text-left'>Where we’ll take you:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Canal Xtomoc</li>
                    <li>Isla de los Cocos</li>
                    <li>Pirats Chanel</li>
                    <li>Bird Island</li>
                    <li>Cenote Esmeralda</li>
                    <li>Cenote Negro</li>
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>What's included:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Water</li>
                    <li>Sparkling Water</li>
                    <li>Beers</li>
                    <li>Tequila</li>
                    <li>Ron Bacardi</li>
                    <li>Soda</li>
                    <li>Juices</li>
                    <li>Mixed seasonal Fruits</li>
                    <li>Guacamole</li>
                    <li>Ceviche</li>
                    <li>Day Pass Asana Glamping (Bathroom and showers available)</li>
                    <li>Parking</li>
                </ul>                
             </section>
             {!isAllDayExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='mt-2 mb-4 leading-none'
                        {...getToggleAllDay()}
                    >
                        Show Less ▲
                    </button>
                </div>
             )}
             </CardNew>
             <CardNew 
                img='./images/romantic.jpg' 
                alt='boat tour' 
                title='Romantic Private Tour' 
                bookingPath='/bookPrivat'>
             {isRomanticExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='mt-2 mb-4 leading-none'
                        {...getToggleRomantic()}
                    >
                        Show More ▼
                    </button>
                </div>
             )}
             <section {...getCollapseRomantic()}>
                <ul className='mb-5'>
                    <li className=''>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                            <div>
                                <h4>Duration</h4>
                                <p>4 hours</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3'> 
                            <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                            <div className='text-left'>
                                <h4>Group Size</h4>
                                <p>max 2 people</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                            <div className='text-left'>
                                <h4>Ideal for:</h4>
                                <p>Couples looking to celebrate love in a peaceful and intimate setting.</p>
                            </div> 
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                            <div className='text-left'>
                                <h4>Prices:</h4>
                                <p>$6'500 MXN (for 2 Persons)</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p>Experience Bacalar Lagoon on a private romantic catamaran tour created for two. Discover hidden, peaceful 
                    spots, enjoy time swimming and relaxing in pristine waters, and savor drinks and fresh snacks as you take 
                    in the lagoon’s breathtaking beauty. An unforgettable escape made for love and connection.
                </p>
                <h3 className='text-[14px] mt-5 text-left'>Where we’ll take you:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Canal Xtomoc</li>
                    <li>Isla de los Cocos</li>
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>What's included:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Water</li>
                    <li>Wine</li>
                    <li>Soda</li>
                    <li>Juices</li>
                    <li>A selection of mixed seasonal fruits and berries</li>
                    <li>Guacamole</li>
                    <li>Ceviche</li>
                    <li>little romantic surprise</li>
                    <li>Day Pass Asana Glamping (Bathroom and showers available)</li>
                    <li>Parking</li>
                </ul>                
             </section>
             {!isRomanticExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='mt-2 mb-4 leading-none'
                        {...getToggleRomantic()}
                    >
                        Show Less ▲
                    </button>
                </div>
             )}
             </CardNew>
             <CardNew 
                img='./images/sunrise.jpg' 
                alt='boat tour' 
                title='Sunrise Private Sail Tour' 
                bookingPath='/bookPrivat'>
             {isSunriseExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='mt-2 mb-4 leading-none'
                        {...getToggleSunrise()}
                    >
                        Show More ▼
                    </button>
                </div>
             )}
             <section {...getCollapseSunrise()}>
                <ul className='mb-5'>
                    <li className=''>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                            <div>
                                <h4>Duration</h4>
                                <p>3 hours</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3'> 
                            <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                            <div className='text-left'>
                                <h4>Group Size</h4>
                                <p>max 14 people</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                            <div className='text-left'>
                                <h4>Ideal for:</h4>
                                <p>Early risers, couples, and nature lovers seeking a peaceful sunrise experience on the lagoon.</p>
                            </div> 
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                            <div className='text-left'>
                                <h4>Prices:</h4>
                                <p>$4'500 MXN (for 2 Persons), $800 MXN for adicional Person</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p>
                    Start your day with a private sunrise sail across the serene Bacalar Lagoon. As the first light reflects on 
                    the crystal-clear waters, enjoy the calm atmosphere, gentle sailing, and the lagoon’s natural beauty. 
                    Swim in peaceful waters, savor light refreshments onboard, and experience Bacalar at its most tranquil.
                </p>
                <h3 className='text-[14px] mt-5 text-left'>Where we’ll take you:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Pirats Chanel</li>
                    <li>Isla de los Cocos</li>
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>What's included:</h3>
                <ul className='list-disc list-inside text-left'>
                    <li>Water</li>
                    <li>Coffee</li>
                    <li>Mixed seasonal Fruits</li>
                    <li>Day Pass Asana Glamping (Bathroom and showers available)</li>
                    <li>Parking</li>
                </ul>                
             </section>
             {!isSunriseExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='mt-2 mb-4 leading-none'
                        {...getToggleSunrise()}
                    >
                        Show Less ▲
                    </button>
                </div>
             )}
             </CardNew>
             
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
                <CardNew title='The Vibe' images={fotoList} titleAboveImage  showButton={false} />               
            </section>           
        </main>  
        <Reviews /> 
        <Footer/>      
        </>  
    )
    
}