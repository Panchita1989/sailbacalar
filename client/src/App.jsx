import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/banner.jsx'
import Header from './components/header.jsx'
import Tours from './components/tours.jsx'
import Location from './components/location.jsx'
import BookPrivat from './components/bookPrivat.jsx'
import BookCollective from './components/bookCollective.jsx'
import BookingForm from './components/bookingForm.jsx'
import Payment from './components/payment.jsx'
import ThankYou from './components/thankYou.jsx'
import ToursNew from './components/toursNew.jsx'


function App() {

  const {pathname} = useLocation()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return(
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Banner/>} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/location' element={<Location />} />
        <Route path='/bookPrivat' element={<BookPrivat />} />
        <Route path='/bookCollective' element={<BookCollective />} />
        <Route path='/bookingForm' element={<BookingForm />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/thankYou' element={<ThankYou />} />
        <Route path='/toursNew' element={<ToursNew />} />
      </Routes>
    </>
    
  )
}

export default App
