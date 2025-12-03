import BookingCalendar from './bookingCalendar.jsx'
import InformationCard from './informationCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";


export default function BookPrivat() {

    return(
        <section className='p-10 mx-35 rounded bg-neutral-300/20'>
            <h1 className='mb-5 text-3xl text-center'>Privat Catamaran Tour</h1>
            <section className='flex justify-center gap-10'>
                <div className='flex-[2] border-r border-neutral-300 pr-5 mx-2'>
                    <h2>4 Hour Privat Tour</h2>
                    <h3>Starting at $5000mxn | 4h | max 10 persons | 30ft. Catamaran</h3>
                    <InformationCard title='Overview'>
                        <ul>
                            <li className=''>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon className='text-2xl' icon={faClock} />
                                    <div>
                                        <h4>Duration</h4>
                                        <p>4 hours</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon className='text-2xl' icon={faLocationDot} />
                                    <div>
                                        <h4>Meeting Point</h4>
                                        <p>Asana Glamping, km 22.5 Carretera Bacalar</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon className='text-2xl' icon={faCircleXmark} /> 
                                    <div>
                                        <h4>Cancellations</h4>
                                        <p>48 hours in advance</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon className='text-2xl' icon={faIdBadge} /> 
                                    <div>
                                        <h4>Age</h4>
                                        <p>90 years and younger</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex items-center gap-3'> 
                                    <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                                    <div>
                                        <h4>Group Size</h4>
                                        <p>max 10 people</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </InformationCard>
                    <InformationCard title='Activity Details'>
                        <p>
                            Enjoy a private tour on the beautiful Bacalar Lagoon, perfect for groups of up to 10 people. 
                            This 4-hour experience includes stops at the lagoon’s main attractions, such as the Black Cenote, 
                            Bird Island, the Pirate Channel, and Cocos Island.
                        </p>
                        <p>
                            Sail with us and live an unforgettable adventure surrounded by nature, tranquility, and exclusivity!
                        </p>
                        <h3 className='mt-3 mb-2'>What’s Included:</h3>
                        <ul className='list-disc list-inside space-y-1'>
                            <li>Guacamole with tortilla chips</li>
                            <li>Mix of local fruits</li>
                            <li>Beers</li>
                            <li>Non-bottled drinking water</li>
                            <li>Local bilingual captain</li>
                            <li>Parking</li>
                        </ul>
                        <h3 className='mt-3 mb-2'>What’s not Included:</h3>
                        <ul className='list-disc list-inside space-y-1'>
                            <li>Pick-up service</li>
                            <li>Tips</li>
                            <li>French-speaking guide</li>
                        </ul>
                    </InformationCard>
                </div>
                <div className='text-center'>
                    <h2 className=''>choose your date</h2>
                    <BookingCalendar />
                </div>
                
            </section>
            
        </section>
    )
}