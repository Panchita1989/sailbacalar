
import { useNavigate } from "react-router-dom";
//import Button from './button.jsx'
import ScrollToButton from './scrollToButton.jsx'
import { useTranslation } from 'react-i18next'


export default function Banner(){   
    
    const navigate = useNavigate()
    const handleShowMore = () =>{
    navigate('/tours') 
    }
    const { t } = useTranslation()

    return(
        <>
        <main className='banner text-teal-950 h-screen flex flex-col md:justify-start pt-10 items-center '>
            <title>Sail Bacalar – Discover Bacalar Lagoon on a Catamaran</title>
            <img className='md:max-h-80  max-h-60 z-10 h1-animate' src="/images/logoNew.png" alt="sail bacalar logo" />
            <h1 className='h1 md:text-5xl text-lg banner-content z-10 '>{t('banner.title').toUpperCase()}</h1>
            <meta name="description" content="Relax at Pucté Hotel, directly on Bacalar Lagoon. Comfortable rooms, stunning views, and unforgettable boat tours." />
            <meta name="keywords" content="Hotel Bacalar, Bacalar Lagoon, Pucté Hotel, Lagoonfront Hotel, Bacalar Accommodation" />
            <p className='banner-content md:text-2xl text-gr content-animate text-center'>{t('banner.description').toUpperCase()}</p>     
            <ScrollToButton handleShowMore={handleShowMore} />
        </main>
        </>
    )
}
