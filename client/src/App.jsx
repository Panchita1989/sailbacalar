
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
import GoogleAdsPageView from './components/googleAdsPageView.jsx'
import Admin from './components/admin.jsx'
import ProtectedRoute from "./components/protectedRoute"
import AdminLogin from "./components/adminLogin"
import ManualBookingForm from './components/manualBookingForm.jsx'
import WhatsAppWidget from './components/whatsappwidget.jsx'



function App() {

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
        <Route path='/success' element={<ThankYou />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path='/adminLogin' element={<AdminLogin/>} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-tour"
          element={
            <ProtectedRoute>
              <ManualBookingForm />
            </ProtectedRoute>
          }
        />
      </Routes>
      <WhatsAppWidget />
    </>
    
  )
}

export default App
