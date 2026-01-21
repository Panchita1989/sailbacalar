
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import Banner from './components/banner.jsx'
import Header from './components/header.jsx'
import Tours from './components/tours.jsx'
import Location from './components/location.jsx'
import BookPrivat from './components/bookPrivat.jsx'
import BookingForm from './components/bookingForm.jsx'
import Payment from './components/payment.jsx'
import ThankYou from './components/success.jsx'
import CancelPage from './components/cancel.jsx'
import ToursTest from './components/toursTest.jsx'
import GoogleAdsPageView from './components/googleAdsPageView.jsx'



function App() {

  const {pathname} = useLocation()
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return(
    <>
      <Header />
      <GoogleAdsPageView />
      <Routes >
        <Route path='/' element={<Tours/>} />
        <Route path='/location' element={<Location />} />
        <Route path='/bookPrivat/:tourId' element={<BookPrivat />} />
        <Route path='/bookingForm' element={<BookingForm />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/toursTest' element={<ToursTest />} />
        <Route path='/success' element={<ThankYou />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
    </>
    
  )
}

export default App
