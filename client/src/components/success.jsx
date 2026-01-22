import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'

export default function ThankYou() {

  const{ t } = useTranslation()

  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [booking, setBooking] = useState(null);

  const apiURL = import.meta.env.VITE_API_URL || "https://sailbacalar-backend.onrender.com";
 
  

  useEffect(() => {
  if (!sessionId) return
  fetch(`${apiURL}/payment/confirm-booking`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId })
  })
    .then(res => res.json())
    .then((data) => {
        setBooking(data)
    })
}, [sessionId])

  if (!booking)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading booking...</p>
      </div>
    );

  const pending = booking.price - booking.prepayment;

  return (
    <section className="flex justify-center items-center py-16 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-green-600">{t('thankYouPage.title')} {booking.name}!</h1>
        <p className="text-gray-600">{t('thankYouPage.confirmed')}</p>

        <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-left">
          <h2 className="font-semibold text-lg text-gray-800">{booking.title}</h2>
          <p>
            <span className="font-medium">{t('thankYouPage.date')}:</span> {booking.date}
          </p>
          <p>
            <span className="font-medium">{t('thankYouPage.time')}:</span> {booking.time}
          </p>
          <p>
            <span className="font-medium">{t('thankYouPage.persons')}:</span> {booking.persons}
          </p>
          <hr className="my-2" />
          <p>
            <span className="font-medium">{t('thankYouPage.total')}:</span> ${booking.price} MXN
          </p>
          <p>
            <span className="font-medium">{t('thankYouPage.prepayment')}:</span> ${booking.prepayment} MXN
          </p>
          <p className="text-green-600 font-semibold">
            <span className="font-medium">{t('thankYouPage.pending')}:</span> ${pending} MXN
          </p>
        </div>

        <p className="text-gray-600 text-sm">
          {t('thankYouPage.contact')}{" "}
          <a
            href="https://wa.me/9831551313"
            className="text-blue-500 font-medium hover:underline"
            target="_blank"
          >
            WhatsApp
          </a>
          .
        </p>

        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
        >
          {t('thankYouPage.back')}
        </a>
      </div>
    </section>
  );
}
