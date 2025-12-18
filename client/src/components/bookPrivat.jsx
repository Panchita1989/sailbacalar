import BookingCalendar from './bookingCalendar.jsx'
import BookingForm from './bookingForm.jsx'
import InformationCard from './informationCard'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function BookPrivat() {

    const[selectedDate, setSelectedDate] = useState(null)
    const[availableHours, setAvailableHours] = useState([])
    const[selectedHour, setSelectedHour] = useState(null)

    const { title, price, duration, maxPerson } = useLocation().state || {};

    const handleSelectHour = (time) => {
        setSelectedHour(time)
    }
    console.log(selectedHour)

    return(
        <section className='text-center p-10 xl:mx-60 rounded bg-neutral-300/20 '>
            <h1 className='mb-5 text-xl md:text-3xl text-center'>{title}</h1>
            <h2>{title}</h2>
            <h3>Starting at {price} | {duration} | max {maxPerson} persons | 30ft. Catamaran</h3>           
            <section className='flex flex-col lg:flex-row lg:justify-center lg:items-start items-center md:gap-10'>
                <div className='lg:flex-[2] lg:border-r border-neutral-300 pr-5 mx-2 order-2 lg:order-1'>
                    <div className='text-center mt-10 '>
                        <img src="./images/caption.jpg" alt="laguna bacalar" className='max-h-100 my-5'/>
                    </div>
                    <InformationCard title='Overview'>
                        <ul>
                            <li className=''>
                                <div className='flex gap-3'>
                                    <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                                    <div className='text-left'>
                                        <h4>Duration:</h4>
                                        <p>4 hours</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex gap-3'>
                                    <FontAwesomeIcon className='text-xl md:text-2xl' icon={faLocationDot} />
                                    <div className='text-left'>
                                        <h4>Meeting Point:</h4>
                                        <p>Asana Glamping, km 22.5 Carretera Bacalar</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex gap-3'>
                                    <FontAwesomeIcon className='text-2xl' icon={faCircleXmark} /> 
                                    <div className='text-left'>
                                        <h4>Cancellations:</h4>
                                        <p>48 hours in advance</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex gap-3'>
                                    <FontAwesomeIcon className='text-2xl' icon={faIdBadge} /> 
                                    <div className='text-left'>
                                        <h4>Age:</h4>
                                        <p>90 years and younger</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex gap-3'> 
                                    <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                                    <div className='text-left'>
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
                    <InformationCard title='Prices'>
                        <p>
                            The cost of our tour is $5000 MXN for groups of up to 3 people. If you’d like to add more guests, 
                            there is an additional fee of $700 MXN per extra person, with a maximum capacity of 10 people in total.
                        </p>
                        <p>Enjoy an exclusive and personalized experience on the beautiful Bacalar Lagoon! </p>
                    </InformationCard>
                    <InformationCard title='Additional Information'>
                        <h3 className='mb-3'>What to Bring</h3>
                        <p>To enjoy our tour to the fullest, we recommend bringing the following items:</p>
                        <ul className='list-disc list-inside space-y-1 my-5'>
                            <li>Cap or hat</li>
                            <li>Towel</li>
                            <li>Sunglasses</li>
                            <li>UV-protection clothing</li>
                            <li>Swimsuit</li>
                            <li>Camera</li>
                        </ul>
                        <p className='mb-3'>Your comfort and safety are our priority, so don’t forget these essential items for an amazing day 
                            in Bacalar.</p>
                        <h3 className='mb-3'>Restrictions</h3>
                        <p>To ensure the safety and comfort of all our passengers, please take the following restrictions 
                            into consideration before booking:</p>
                        <ul className='list-disc list-inside space-y-1 my-5'>
                            <li><b>Pregnant women:</b> We recommend that women over 7 months pregnant consult their doctor before participating in the tour, 
                                as it may not be suitable for safety reasons.</li>
                            <li>
                                <b>People with reduced mobility or wheelchair users: </b>Due to the nature of boarding and the facilities on 
                                board, unfortunately, we do not have adequate access for individuals with limited mobility or those in wheelchairs.
                            </li>
                            <li>
                                <b>Alcohol consumption:</b> While we offer moderate alcoholic beverages on board, we kindly ask our guests
                                to drink responsibly. Excessive alcohol consumption may compromise the safety and enjoyment of the experience for everyone.
                            </li>
                        </ul>
                        <p>Our team is here to ensure you have a safe and pleasant experience, and we appreciate your understanding and cooperation.</p>
                        <h3 className='mb-3'>Extras</h3>
                        <ul className='list-disc list-inside space-y-1 my-5'>
                            <li>French-speaking guide: $650 MXN</li>
                            <li>Private ground pick-up service (taxi): $100 MXN</li>
                        </ul>
                        <h3 className='mb-3'>Disclaimers</h3>
                        <p>
                            Before boarding our tours with Sail Bacalar, it is important that clients understand and accept the 
                            inherent risks associated with water activities and sailing.
                        </p>
                        <ul className='list-disc list-inside space-y-1 my-5'>
                            <li>
                                <b>Risks and safety:</b> Sailing involves certain natural risks. Although we take measures to ensure 
                                safety, guests should be aware of possible risks such as falls or physical discomfort.
                            </li>
                            <li>
                                <b>Health and conditions:</b> Participants must be in good health and inform us of any medical conditions 
                                before the tour.
                            </li>
                            <li>
                               <b>Personal responsibility:</b> It is mandatory to follow the captain’s instructions and use the safety equipment provided.
                            </li>
                            <li><b>Personal belongings:</b> We are not responsible for the loss or damage of personal items.</li>
                            <li><b>Weather conditions:</b>The itinerary may change for safety reasons if weather conditions require it.</li>
                            <li>
                               <b>Liability release:</b> By signing, participants release Sailing Colibrí from any responsibility for accidents or injuries not caused by gross negligence.
                            </li>
                        </ul>
                    </InformationCard>
                    <InformationCard title='FAQ'>
                        <ul>
                            <li>
                                <p className='font-bold'>Is this activity suitable for children? From what age?</p>
                                <p>Yes, absolutely! Children can join the tour starting from 6 months old. It’s a safe and family-friendly experience.</p>
                            </li>
                            <li>
                                <p className='font-bold'>Can I bring extra food or drinks?</p>
                                <p>Yes, you can. We have enough space on board and a cooler with ice to keep your drinks and food fresh during the tour.</p>
                            </li>
                            <li>
                                <p className='font-bold'>Can you pick me up at the hotel dock where I’m staying?</p>
                                <p>Sorry, we do not offer that service due to the time required for that maneuver. We will meet at our designated departure point to ensure everything runs on time and stays organized.</p>                     
                            </li>
                            <li>
                                <p className='font-bold'>Do you provide life jackets and safety equipment?</p>
                                <p>Yes, all safety equipment is in perfect condition and fully compliant with regulations. We have life jackets available for both adults and children.</p>
                            </li>
                            <li>
                                <p className='font-bold'>Do I need prior experience to navigate?</p>
                                <p>No, you don’t need any previous experience. Our expert bilingual captains will take care of the navigation — you just need to relax and enjoy the scenery.</p>
                            </li>
                            <li>
                                <p className='font-bold'>Is the tour private or shared?</p>
                                <p>We offer both private and shared tours. However, if you prefer an exclusive experience just for you and your group, this is the perfect option to choose.</p>
                            </li>
                        </ul>
                    </InformationCard>
                    <InformationCard title='Cancellations' >
                        <p className='mb-3'>
                            Customers will receive a full refund or the option to reschedule if the cancellation is made at 
                            least 48 hours in advance. Customers will also receive a full refund or the option to reschedule in case 
                            the operator cancels due to weather or other unforeseen circumstances. No-shows will be charged the full 
                            price.
                        </p>
                        <p className='mb-3'>
                            For the <b>Shared Tour</b>, the boat will depart exactly at the scheduled time. If the customer does not 
                            arrive on time, it will be considered a no-show and they will not be entitled to a refund. The shared
                            tour is subject to cancellation if the minimum required number of participants is not met (4 people). 
                            If this occurs, we commit to notifying you at least 7 hours in advance.
                        </p>
                        <p className='mb-3'>
                            For <b>Private Tours</b>, if the customer does not arrive at the agreed time, the time will simply be 
                            deducted from the total duration of the tour. The boat will not depart until the customer arrives, but 
                            it will return at the originally scheduled end time.
                        </p>
                        <p className='mb-3'>Please contact us by email to cancel or inquire about rescheduling.</p>
                        <p>Thank You!</p>
                    </InformationCard>
                </div>
                <div className='text-center order-1 lg:order-2'>
                    <h2 className='lg:flex-[1] mt-10'>Choose your date</h2>
                    <BookingCalendar 
                        setSelectedHour={setSelectedHour} 
                        setAvailableHours={setAvailableHours}  
                        selectedDate={selectedDate} 
                        setSelectedDate={setSelectedDate} 
                    />
                    {selectedDate && (
                        availableHours.map(e =>{
                            return <button key={e} value={e} onClick={() => handleSelectHour(e)} className='m-5 py-1 px-3 border-1 rounded'>{e}</button>
                        })
                    )}
                    {(selectedDate && selectedHour) && (
                        <BookingForm title={title} selectedDate={selectedDate} selectedHour={selectedHour} />
                    )}
                </div>
                
            </section>
            
        </section>
    )
}