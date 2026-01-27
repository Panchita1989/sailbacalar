import { useState, useEffect } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useTranslation } from 'react-i18next';

export default function BookingForm({ selectedDate, selectedHour, title, basePrice, extraPerson, tourId }) {

  const { t, i18n } = useTranslation();

  const basePerson = 2;
  const basePriceNum = Number(basePrice.replace('$', '').replace("'", ""));
  const maxPersons = 14;

  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);

  const persons = basePerson + adultCount + kidsCount;

  const safeExtraPerson = Number(extraPerson) || 0;
  const kidsPrice = safeExtraPerson / 2;

  const price =
    basePriceNum +
    adultCount * safeExtraPerson +
    kidsCount * kidsPrice;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState("");
  const [timeLabel, setTimeLabel] = useState(null);
  const [error, setError] = useState(false);

  const prepayment = price / 2;

  const formatDate = (dateObj) => {
    return new Intl.DateTimeFormat(i18n.language === 'es' ? 'es-MX' : 'en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(dateObj);
  };

  useEffect(() => {
    if ((selectedHour === '13:00' && tourId === 'allDay')) {
      setTimeLabel(i18n.language === 'en' ? 'from 1pm to 7pm' : 'de 1pm a 7pm');
    }
    if (selectedHour === '10:00') {
      setTimeLabel(i18n.language === 'en' ? 'from 10am to 2pm' : 'de 10am a 2pm');
    }
    if (selectedHour === '15:00') {
      setTimeLabel(i18n.language === 'en' ? 'from 3pm to 7pm' : 'de 3pm a 7pm');
    }
    if (selectedHour === '06:00') {
      setTimeLabel(i18n.language === 'en' ? 'from 6am to 9am' : 'de 6am a 9am');
    }
  }, [selectedHour, i18n, tourId]);

  useEffect(() => {
    if (basePerson + adultCount + kidsCount > maxPersons) {
      setError(true);
    } else {
      setError(false);
    }
  }, [adultCount, kidsCount]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    const count = Number(value);

    if (name === "adults") setAdultCount(count);
    if (name === "kids") setKidsCount(count);
  };

  const makePayment = async (e) => {
    e.preventDefault();

    const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/payment';

    const body = {
      tourId,
      name,
      email,
      phone,
      title,
      date: selectedDate.toLocaleDateString('en-CA'),
      time: selectedHour,
      persons,
      price,
      prepayment,
      currency: 'mxn',
      language: i18n.language
    };

    const response = await fetch(`${apiURL}/payment/create-checkout-session`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const session = await response.json();
    if (session.url) window.location.href = session.url;
  };

  return (
    <section className="w-full bg-neutral-50 rounded-2xl shadow-md p-4 flex flex-col gap-3 text-sm sm:text-base">

      <p className="text-lg font-semibold">{t('bookingForm.title')}</p>
      <p className="font-medium">{title}</p>

      <div className="bg-gray-50 rounded-xl p-3">
        <p>📅 {formatDate(selectedDate)}</p>
        <p>⏰ {timeLabel}</p>
      </div>

      {tourId !== 'romantic' && (
        <>
          <label className="font-medium">{t('bookingForm.defaultPersons')}</label>
          <select name="adults" onChange={handleSelect}
            className="w-full border rounded-xl px-3 py-3 text-base">
            <option disabled selected value="">{t('bookingForm.selectExtraPerson')}</option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>+{i + 1} Adult (+{extraPerson})</option>
            ))}
          </select>

          <label className="font-medium">{t('bookingForm.kids')}</label>
          <select name="kids" onChange={handleSelect}
            className="w-full border rounded-xl px-3 py-3 text-base">
            <option disabled selected value="">{t('bookingForm.selectExtraKid')}</option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>+{i + 1} Kid (+{kidsPrice})</option>
            ))}
          </select>
        </>
      )}

      {error && (
        <p className="text-sm bg-amber-50 text-amber-800 border border-amber-200 rounded-lg px-3 py-2">
          {t('bookingForm.error')}
        </p>
      )}

      <div className="bg-gray-100 rounded-xl p-3">
        <p className="font-semibold">{persons} persons</p>
        <p className="font-semibold">Total: {price} MXN</p>
        <p className="text-gray-600">Prepayment: {prepayment} MXN</p>
      </div>

      <form onSubmit={makePayment} className="flex flex-col gap-3">

        <input required placeholder={t('bookingForm.namePlaceholder')}
          className="border rounded-xl px-3 py-3" onChange={(e) => setName(e.target.value)} />

        <input required type="email" placeholder={t('bookingForm.emailPlaceholder')}
          className="border rounded-xl px-3 py-3" onChange={(e) => setEmail(e.target.value)} />

        <PhoneInput
          required
          defaultCountry="MX"
          className="border rounded-xl px-3 py-3"
          placeholder={t('bookingForm.phonePlaceholder')}
          value={phone}
          onChange={setPhone}
        />

        <button
          disabled={error}
          className={`rounded-xl py-4 text-lg font-semibold transition
            ${error
              ? "bg-gray-300 text-gray-500"
              : "bg-gray-700 text-white active:scale-95"}
          `}
        >
          Book Now
        </button>
      </form>
    </section>
  );
}
