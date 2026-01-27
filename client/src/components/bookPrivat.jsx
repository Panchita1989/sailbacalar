import BookingCalendar from './bookingCalendar.jsx'
import BookingForm from './bookingForm.jsx'
import InformationCard from './informationCard'
import tours from '../data/tours.js';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";


export default function BookPrivat() {

    const{ t } = useTranslation()
    const { tourId } = useParams()
    const location = useLocation()

    const [tour, setTour] = useState(location.state?.tour)
    const [priceKey, setPriceKey] = useState("");
    const [selectedDate, setSelectedDate] = useState(null)
    const [availableHours, setAvailableHours] = useState([])
    const [selectedHour, setSelectedHour] = useState(null)
    

    useEffect(() => {
        const foundTour = tours.find(t => t.id === tourId)
        setTour(foundTour)
    }, [tour, tourId])

    useEffect(() => {
        const key = tour.id === "romantic" ? "prices.romantic" : "prices.standard";
        setPriceKey(key)
    }, [tour])


    const handleSelectHour = (time) => {
        setSelectedHour(time)
    }
   


    return(
        <section className='text-center p-10 xl:mx-60 rounded bg-neutral-300/20 '>
            <h1 className='mb-5 text-xl md:text-3xl text-center'>{t(`tours.${tour.id}.title`).toUpperCase()}</h1>
            <h2 className='text-[15px]'>{t(`tours.${tour.id}.title`).toUpperCase()}</h2>
            <h3 className='text-[14px]'>{t('bookUI.start')} {tour.basePrice} | {t('labels.durationLabel')} {tour.duration}h | max {tour.maxPersons} {t('bookUI.persons')} | 30ft. Catamaran</h3>           
            <section className="flex flex-col lg:flex-row items-start gap-10">
                <div className="w-full lg:w-2/3 lg:border-r border-neutral-300 pr-5 mx-2 order-2 lg:order-1">
                    <div className='text-center mt-10 '>
                        <img src="/images/pakal.png" alt="laguna bacalar" className='max-h-100 my-5'/>
                    </div>
                    <InformationCard title={t('bookUI.overviewLabel')}>
                        <ul>
                            <li className=''>
                                <div className='flex gap-3'>
                                    <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                                    <div className='text-left'>
                                        <h4>{t('labels.durationLabel')}:</h4>
                                        <p>{tour.duration} {t('labels.duration')}</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex gap-3'>
                                    <FontAwesomeIcon className='text-xl md:text-2xl' icon={faLocationDot} />
                                    <div className='text-left'>
                                        <h4>{t('bookUI.meet')}</h4>
                                        <p>Asana Glamping, km 22.5 Carretera Bacalar</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex gap-3'>
                                    <FontAwesomeIcon className='text-2xl' icon={faCircleXmark} /> 
                                    <div className='text-left'>
                                        <h4>{t('bookUI.cancelLabel')}</h4>
                                        <p>{t('bookUI.cancelDescription')}</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex gap-3'>
                                    <FontAwesomeIcon className='text-2xl' icon={faIdBadge} /> 
                                    <div className='text-left'>
                                        <h4>{t('bookUI.ageLabel')}</h4>
                                        <p>{t('bookUI.age')}</p>
                                    </div>
                                </div>
                            </li>
                            <li className='mt-3'>
                                <div className='flex gap-3'> 
                                    <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                                    <div className='text-left'>
                                        <h4>{t('labels.groupLabel')}</h4>
                                        <p>max {tour.maxPersons} {t('bookUI.persons')}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </InformationCard>
                    <InformationCard title={t('bookUI.activity')}>
                        <p className='text-left'> 
                            {t(`tours.${tour.id}.description`)}
                        </p>
                        <h3 className='mt-3 mb-2 text-left'>{t('labels.includeLabel')}</h3>
                        <ul className='list-disc list-inside space-y-1 text-left'>
                            {t(`tours.${tour.id}.included`, { returnObjects: true }).map((i, index) =>{
                                return <li key={index}>{i}</li>
                            })}
                        </ul>
                        <h3 className='text-left mt-3 mb-2'>{t('labels.notIncludedLabel')}</h3>
                        <ul className='list-disc list-inside space-y-1 text-left'>
                            {t('notIncluded', { returnObjects: true}).map((i, index) =>(
                                <li key={index}>{i}</li>
                            ))}
                        </ul>
                    </InformationCard>
                    <InformationCard title='Prices'>
                        <p className='text-left'>
                            {t(priceKey, {
                                basePrice: tour.basePrice,
                                baseGroupSize: 2,
                                extraPerson: tour.extraPerson,
                                maxPersons: tour.maxPersons
                            })}
                        </p>
                        <p className='text-left'>{t('prices.description')} </p>
                    </InformationCard>
                    <InformationCard title={t('additional.title')}>
                        <h3 className='mb-3 text-left'>{t('additional.bring')}</h3>
                        <p className='mt-3 text-left'>{t('additional.bringDescription')}</p>
                        <ul className='list-disc list-inside space-y-1 mb-3 text-left'>
                            {t('additional.bringItems', {returnObjects: true }).map((item, index) =>(
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className='mb-3 text-left'>{t('additional.description')}</p>
                        <h3 className='mb-3 text-left'>{t('additional.restrictions')}</h3>
                        <p className='text-left'>{t('additional.restrictionsDescription')}</p>
                        <ul className='list-disc list-inside space-y-1 mb-2 text-left'>
                            {t('additional.restrictionItems', {returnObjects:true}).map((item) =>(
                                <li key={item.label}><b>{item.label}:</b> {item.text}</li>
                            ))}
                        </ul>
                        <p className='text-left'>{t('additional.extrasDescription')}</p>
                        <h3 className='mt-3 text-left'>Extras:</h3>
                        <ul className='list-disc list-inside space-y-1 mb-5 text-left'>
                            {t('additional.extrasItems', { returnObjects: true }).map((item, index) =>(
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h3 className='mb-1 text-left'>{t('additional.disclaimers')}</h3>
                        <p className='text-left'>
                            {t('additional.disclaimersDescription')}
                        </p>
                        <ul className='list-disc list-inside space-y-1 my-5 text-left'>
                            {t('additional.disclaimerItems', { returnObjects: true }).map(item => (
                                <li key={item.label}><b>{item.label}: </b>{item.text}</li>
                            ))}
                        </ul>
                    </InformationCard>
                    <InformationCard title='FAQ'>
                        <ul className='text-left'>
                            {t('faqItems', { returnObjects: true}).map(item =>(
                                <li key={item.question}>
                                    <p className='font-bold'>{item.question}</p>
                                    <p>{item.answer}</p>
                                </li>
                            ))}                        
                        </ul>
                    </InformationCard>
                    <InformationCard title={t('cancellations.title')} >
                        <p className='mb-3 text-left'>
                            {t('cancellations.description')}
                        </p>
                        <p className='mb-3 text-left'>
                            {t('cancellations.timeSchedule')}
                        </p>
                        <p className='mb-3 text-left'>{t('cancellations.reschedule')}</p>
                        <p>{t('cancellations.thanks')}</p>
                    </InformationCard>
                </div>
                <div className="w-full lg:w-1/3 text-[18px] order-1 lg:order-2">
                    <h2 className=''>{t('calendar.choose')}</h2>                     
                    <BookingCalendar 
                        setSelectedHour={setSelectedHour} 
                        setAvailableHours={setAvailableHours}  
                        selectedDate={selectedDate} 
                        setSelectedDate={setSelectedDate} 
                        tourId={tour.id}
                    />
                    {selectedDate && (
                        availableHours.map(e =>{
                            return <button 
                                key={e} 
                                value={e} 
                                onClick={() => handleSelectHour(e)} 
                                className='m-5 py-1 px-3 border-1 rounded'>{e}</button>
                        })
                    )}
                    {(selectedDate && selectedHour) && (
                        <BookingForm 
                            title={t(`tours.${tour.id}.title`)}
                            extraPerson={tour.extraPerson}
                            basePrice={tour.basePrice} 
                            selectedDate={selectedDate} 
                            selectedHour={selectedHour} 
                            tourId={tour.id}
                        />
                    )}
                </div>
                
            </section>
            
        </section>
    )
}