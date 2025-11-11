
//import { useNavigate } from "react-router-dom";
//import Button from './button.jsx'
import ScrollToButton from './scrollToButton.jsx'


export default function Banner(){   
    
    const handleShowMore = () =>{
    navigate('/rooms')        
 
}

    return(
        <>
        <main className='banner h-screen text-neutral-500 flex flex-col justify-center items-center gap-3'>
            <title>Sail Bacalar – Discover Bacalar Lagoon on a Catamaran</title>
            <h1 className='h1 text-5xl p-2 h1-animate'>SAIL BACALAR</h1>
            <h2 className=' text-2xl p-2 content-animate text-center ' > Tour in a Catamaran</h2>
            <meta name="description" content="Relax at Pucté Hotel, directly on Bacalar Lagoon. Comfortable rooms, stunning views, and unforgettable boat tours." />
            <meta name="keywords" content="Hotel Bacalar, Bacalar Lagoon, Pucté Hotel, Lagoonfront Hotel, Bacalar Accommodation" />
            <p className='banner-content text-2xl content-animate text-center'>DISCOVER BACALAR LAGOON IN OUR 30FT CATAMARAN</p>     
            <ScrollToButton handleShowMore={handleShowMore} />
        </main>
        </>
    )
}
