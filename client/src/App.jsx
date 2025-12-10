import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/banner.jsx'
import Header from './components/header.jsx'
import Tours from './components/tours.jsx'
import Location from './components/location.jsx'
import BookPrivat from './components/bookPrivat.jsx'
import BookingForm from './components/bookingForm.jsx'


function App() {

  const {pathname} = useLocation()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(()=>{
    if(location.pathname === '/'){
      document.body.style.backgroundColor = "#c9efefff"
    }else{
      document.body.style.backgroundColor = "#dffbffff"
    }
  }, [location.pathname])

  return(
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Banner/>} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/location' element={<Location />} />
        <Route path='/bookPrivat' element={<BookPrivat />} />
        <Route path='/bookingForm' element={<BookingForm />} />
      </Routes>
    </>
    
  )
}

export default App
