import CardNew from './cardNew.jsx'
import Footer from './footer.jsx'
import Button from './button.jsx'
import Reviews from './reviews.jsx'
import { useTranslation } from 'react-i18next'
import {useCollapse} from 'react-collapsed';
import {fotoList} from '../data/gallery.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { faCashApp } from "@fortawesome/free-brands-svg-icons"




export default function ToursTest() {
    const { t, i18n } = useTranslation()

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
                tourId='classic'
                img='../images/gallery/us.webp' 
                alt='privat boat tour' 
                title={t('tours.classic.title')}
                bookingPath= {`/bookPrivat/classic`}  
            >
            {isPrivatExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className="text-lg mt-2 mb-4 leading-none "
                        {...getTogglePrivat()}
                    >
                       {t('buttons.more')}
                    </button>
                </div>

            )}
             <section {...getCollapsePrivat()}>
                    <ul className='mb-5'>
                        <li className=''>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                                <div>
                                    <h4>{t('labels.durationLabel')}</h4>
                                    <p>4 {t('labels.duration')}</p>
                                </div>
                            </div>
                        </li>
                        <li className='mt-3'>
                            <div className='flex gap-3'> 
                                <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                                <div className='text-left'>
                                    <h4>{t('labels.groupLabel')}</h4>
                                    <p>{t('labels.group')}</p>
                                </div>
                            </div>
                        </li>
                        <li className='mt-3'>
                            <div className='flex gap-3 items-center'>
                               <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                               <div className='text-left'>
                                    <h4>{t('labels.idealForLabel')}</h4>
                                    <p>{t('tours.classic.idealFor')}</p>
                                </div> 
                            </div>
                        </li>
                        <li className='mt-3'>
                            <div className='flex gap-3 items-center'>
                                <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                                <div className='text-left'>
                                    <h4>{t('labels.pricesLabel')}</h4>
                                    <p>$5'000 {t('labels.basePrice')}, $800 MXN {t('labels.extraPerson')}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                <p className='text-left'>
                    {t('tours.classic.description')}
                </p>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.stopsLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.classic.stops', { returnObjects: true }).map(stop => (
                        <li key={stop}>{stop}</li>
                    ))}
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.includeLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.classic.included', { returnObjects: true }).map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                
            </section>
            {!isPrivatExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className="text-lg mt-2 mb-4 leading-none "
                        {...getTogglePrivat()}
                    >
                        {t('buttons.less')}
                    </button>
                </div>
            )}
            
            </CardNew> 
             <CardNew 
                tourId='allInclusive'
                img='./images/allInclusive.webp' 
                alt='boat tour' 
                title={t('tours.allInclusive.title')} 
                bookingPath={`/bookPrivat/allInclusive`}  >
             {isInclusiveExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className="text-lg mt-2 mb-4 leading-none "
                        {...getToggleInclusive()}
                    >
                       {t('buttons.more')}
                    </button>
                </div>
             )}
             <section {...getCollapseInclusive()}>
                <ul className='mb-5'>
                    <li className=''>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                            <div>
                                <h4>{t('labels.durationLabel')}</h4>
                                <p>4 {t('labels.duration')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3'> 
                            <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                            <div className='text-left'>
                                <h4>{t('labels.groupLabel')}</h4>
                                <p>{t('labels.group')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                            <div className='text-left'>
                                <h4>{t('labels.idealForLabel')}</h4>
                                <p>{t('tours.allInclusive.idealFor')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                            <div className='text-left'>
                                <h4>{t('labels.pricesLabel')}</h4>
                                <p>$6'300 MXN {t('labels.basePrice')}, $1'000 MXN {t('labels.extraPerson')}</p>
                            </div>
                        </div>
                    </li>
                    </ul>
                <p className='text-left'> 
                    {t('tours.allInclusive.description')}
                </p>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.stopsLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.allInclusive.stops', { returnObjects: true }).map(stop => (
                        <li key={stop}>{stop}</li>
                    ))}
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.includeLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.allInclusive.included', {returnObjects: true}).map(item =>(
                        <li key={item}>{item}</li>
                    ))}
                </ul>                
            </section>
             {!isInclusiveExpanded ? '' : (
                <div className="flex justify-center">
                    <button 
                        className="text-lg mt-2 mb-4 leading-none "
                        {...getToggleInclusive()}
                    >
                        {t('buttons.less')}
                    </button>
                </div>
            )}
             </CardNew>
             <CardNew 
                tourId="allDay"
                img='./images/allDay.webp' 
                alt='boat tour' 
                title={t('tours.allDay.title')} 
                bookingPath={`/bookPrivat/allDay`} >
             {isAllDayExpanded ? '' : (
                <div className='flex justify-center'>
                    <Button
                        className="text-lg mt-2 mb-4 leading-none "
                        {...getToggleAllDay()}
                    >
                        {t('buttons.more')}
                    </Button>
                </div>
             )}
             <section {...getCollapseAllDay()}>
                <ul className='mb-5'>
                    <li className=''>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                            <div>
                                <h4>{t('labels.durationLabel')}</h4>
                                <p>6 {t('labels.duration')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3'> 
                            <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                            <div className='text-left'>
                                <h4>{t('labels.groupLabel')}</h4>
                                <p>{t('labels.group')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                            <div className='text-left'>
                                <h4>{t('labels.idealForLabel')}</h4>
                                <p>{t('tours.allDay.idealFor')}</p>
                            </div> 
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                            <div className='text-left'>
                                <h4>{t('labels.pricesLabel')}</h4>
                                <p>$7'800 MXN {t('labels.basePrice')}, $1200 MXN {t('labels.extraPerson')}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p>
                    {t('tours.allDay.description')}
                </p>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.stopsLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.allDay.stops', {returnObjects: true}).map(stop => (
                        <li key={stop}>{stop}</li>
                    ))}
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.includeLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.allDay.included', { returnObjects: true }).map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>                
             </section>
             {!isAllDayExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='text-lg mt-2 mb-4 leading-none'
                        {...getToggleAllDay()}
                    >
                        {t('buttons.less')}
                    </button>
                </div>
             )}
             </CardNew>
             <CardNew 
                tourId="romantic"
                img='./images/romantic.webp' 
                alt='boat tour' 
                title={t('tours.romantic.title')}
                bookingPath={`/bookPrivat/romantic`} >
             {isRomanticExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='text-lg mt-2 mb-4 leading-none'
                        {...getToggleRomantic()}
                    >
                        {t('buttons.more')}
                    </button>
                </div>
             )}
             <section {...getCollapseRomantic()}>
                <ul className='mb-5'>
                    <li className=''>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                            <div>
                                <h4>{t('labels.durationLabel')}</h4>
                                <p>4 {t('labels.duration')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3'> 
                            <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                            <div className='text-left'>
                                <h4>{t('labels.groupLabel')}</h4>
                                <p>{t('tours.romantic.group')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                            <div className='text-left'>
                                <h4>{t('labels.idealForLabel')}</h4>
                                <p>{t('tours.romantic.idealFor')}</p>
                            </div> 
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                            <div className='text-left'>
                                <h4>{t('labels.pricesLabel')}</h4>
                                <p>$6'500 MXN {t('labels.basePrice')}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p>
                    {t('tours.romantic.description')}
                </p>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.stopsLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.romantic.stops', {returnObjects: true}).map(stop => (
                        <li key={stop}>{stop}</li>
                    ))}
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.includeLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.romantic.included', {returnObjects: true}).map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>                
             </section>
             {!isRomanticExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='text-lg mt-2 mb-4 leading-none'
                        {...getToggleRomantic()}
                    >
                        {t('buttons.less')}
                    </button>
                </div>
             )}
             </CardNew>
             <CardNew 
                tourId='sunrise'
                img='./images/sunrise.webp' 
                alt='boat tour' 
                title={t('tours.sunrise.title')}
                bookingPath={`/bookPrivat/sunrise`} >
             {isSunriseExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='text-lg mt-2 mb-4 leading-none'
                        {...getToggleSunrise()}
                    >
                        {t('buttons.more')}
                    </button>
                </div>
             )}
             <section {...getCollapseSunrise()}>
                <ul className='mb-5'>
                    <li className=''>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon className='text-xl md:text-2xl' icon={faClock} />
                            <div>
                                <h4>{t('labels.durationLabel')}</h4>
                                <p>3 {t('labels.duration')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3'> 
                            <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} /> 
                            <div className='text-left'>
                                <h4>{t('labels.groupLabel')}</h4>
                                <p>{t('labels.group')}</p>
                            </div>
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faUniversalAccess} />
                            <div className='text-left'>
                                <h4>{t('labels.idealForLabel')}</h4>
                                <p>{t('tours.sunrise.idealFor')}</p>
                            </div> 
                        </div>
                    </li>
                    <li className='mt-3'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon className='text-2xl' icon={faCashApp} />
                            <div className='text-left'>
                                <h4>{t('labels.pricesLabel')}</h4>
                                <p>$5'000 MXN {t('labels.basePrice')}, $800 MXN {t('labels.extraPerson')}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p>
                    {t('tours.sunrise.description')}
                </p>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.stopsLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.sunrise.stops', { returnObjects: true }).map(stop =>(
                        <li key={stop}>{stop}</li>
                    ))}
                </ul>
                <h3 className='text-[14px] mt-5 text-left'>{t('labels.includeLabel')}</h3>
                <ul className='list-disc list-inside text-left'>
                    {t('tours.sunrise.included', { returnObjects: true }).map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>                
             </section>
             {!isSunriseExpanded ? '' : (
                <div className='flex justify-center'>
                    <button
                        className='text-lg mt-2 mb-4 leading-none'
                        {...getToggleSunrise()}
                    >
                        {t('buttons.less')}
                    </button>
                </div>
             )}
             </CardNew>
             
            </section>
            <section className='sail text-neutral-100 flex flex-col md:font-normal gap-2 items-center justify-center rounded xl:flex-row px-15'>
                <h2 className='xl:text-8xl xl:w-1/2'>Sail With Us</h2>
                <div className="xl:w-1/2 xl:px-5 flex flex-col gap-2 xl:text-xl xl:px-5">
                <p className=''>
                    {t('sail.description')}
                </p> <p className='hidden md:block'>
                    {t('sail.descriptionHidden')}
                    </p>
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