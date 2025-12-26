import Button from './button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; 
import { useTranslation } from 'react-i18next'




export default function ScrollToButton({handleShowMore}){    

    const{ t } = useTranslation()

    return(
        <section className='info content-animate  md:text-2xl text-gr text-center '>
            <p>{t('banner.subtitle')}</p>
            <Button 
                children={<FontAwesomeIcon icon={faArrowDown} /> }
                className='p-2 rounded-full bg-neutral-300 text-neutral-800 active:bg-neutral-800 active:text-neutral-300 xl:hover:bg-neutral-800 xl:hover:text-neutral-300'
                onClick={handleShowMore}/>
        </section>
    )
}