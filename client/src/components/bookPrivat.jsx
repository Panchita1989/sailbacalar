import BookingCalendar from './bookingCalendar.jsx'
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
            <section className='flex justify-center'>
                <div className='flex-[2]'>
                    <h2>4 Hour Privat Tour</h2>
                    <h3>Starting at $5000mxn | 4h | max 10 persons | 30ft. Catamaran</h3>
                    <h3 className='mt-5 '>Overview</h3>
                    <ul>
                        <li className='mt-3'>
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
                </div>
                <div className='text-center'>
                    <h2 className=''>choose your date</h2>
                    <BookingCalendar />
                </div>
                
            </section>
            
        </section>
    )
}