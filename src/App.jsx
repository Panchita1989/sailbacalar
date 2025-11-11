import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/banner.jsx'
import Header from './components/header.jsx'


function App() {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Banner/>} />
      </Routes>
    </>
    
  )
}

export default App
