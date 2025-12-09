
import { useNavigate } from "react-router-dom";
//import Button from './button.jsx'
import ScrollToButton from './scrollToButton.jsx'


export default function Banner(){   
    
    const navigate = useNavigate()
    const handleShowMore = () =>{
    navigate('/tours')        
 
}

    return(
        <>
        <main className='banner text-teal-950 h-screen flex flex-col md:justify-start justify-center items-center '>
            <title>Sail Bacalar – Discover Bacalar Lagoon on a Catamaran</title>
            <img className='md:max-h-100  max-h-80 z-10 h1-animate' src="/images/logo.png" alt="sail bacalar logo" />
            <h1 className='h1 md:text-5xl text-lg banner-content z-10 '>SAIL - ENJOY - GET INSPIRED</h1>
            <meta name="description" content="Relax at Pucté Hotel, directly on Bacalar Lagoon. Comfortable rooms, stunning views, and unforgettable boat tours." />
            <meta name="keywords" content="Hotel Bacalar, Bacalar Lagoon, Pucté Hotel, Lagoonfront Hotel, Bacalar Accommodation" />
            <p className='banner-content md:text-2xl text-gr content-animate text-center'>DISCOVER BACALAR LAGOON IN OUR 30FT CATAMARAN</p>     
            <ScrollToButton handleShowMore={handleShowMore} />
        </main>
        </>
    )
}
