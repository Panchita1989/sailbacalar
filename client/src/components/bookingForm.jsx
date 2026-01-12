import { useState, useEffect } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useTranslation } from 'react-i18next'


export default function BookingForm({selectedDate, selectedHour, title, basePrice, extraPerson, tourId}) {

    const{ t, i18n } = useTranslation()

    const basePerson = 2
    const basePriceNum = Number(basePrice.replace('$', '').replace("'", ""))

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const [phone, setPhone] = useState("")

    const[price, setPrice] = useState(basePriceNum)
    const[persons, setPersons] = useState(basePerson)
    const[time, setTime] = useState(null)
        
    const prepayment = price/2

   
  
    console.log(basePrice)
    console.log(extraPerson)

    const formatDate = (dateObj) =>{
        return new Intl.DateTimeFormat(i18n.language === 'es' ? 'es-MX' : 'en-GB',{
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(dateObj)
    }

    useEffect(() => {
        if(selectedHour === '10:00'){
            if(i18n.language === 'en'){
                setTime('from 10am to 2pm')
            }else if( i18n.language === 'es'){
                setTime('de 10am a 2pm')
            }
            
        }
        if(selectedHour === '15:00'){
            if(i18n.language === 'en'){
                setTime('from 3pm to 7pm')
            }else if( i18n.language === 'es'){
                setTime('de 3pm a 7pm')
            }
        }
    }, [selectedHour, i18n])

    const handleSelect = (e) => {
        const count = parseInt(e.target.value)
        const extraPrice = count * extraPerson

        console.log(count)
        console.log(extraPrice)
        

        setPrice(basePriceNum + extraPrice)
        setPersons(basePerson + count)
    }
    console.log(price)
    console.log(persons)
      

    const makePayment = async (e) => {
    e.preventDefault();
    
    const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/payment';

    const body = {
        tourId,
        name,
        email,
        phone,
        title,
        date: selectedDate,
        time: selectedHour,
        persons,
        price: price,
        prepayment,
        currency: 'mxn',
    };

    try {
        const response = await fetch(`${apiURL}/create-checkout-session`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const session = await response.json();

        if (!session.url) {
            console.error("No session URL returned from server", session);
            return;
        }

        // leitet auf Stripe Checkout weiter
        window.location.href = session.url;
    } catch (error) {
        console.error("Error creating checkout session", error);
    }
};





    return(
        <section className='flex flex-col items-start' >            
            <p className='text-xl'>{t('bookingForm.title')}:</p>
            <p className='text-lg'>{title}</p>
            <p className='text-lg'>{t('bookingForm.date')}: {formatDate(selectedDate)}</p> 
            <p className='text-lg'>{t('bookingForm.time')}: {`${time}`}</p>
            { tourId !== 'romantic' &&
            <select select name="extraPerson" id="extraPerson" onChange={handleSelect} className='border-1'>
                <option disabled selected value="">{t('bookingForm.selectExtraPerson')}</option>
                <option value="1" >1 Person (+ {extraPerson}p.p)</option>
                <option value="2">2 Person (+ {extraPerson}p.p)</option>
                <option value="3">3 Person (+ {extraPerson}p.p)</option>
                <option value="4">4 Person (+ {extraPerson}p.p)</option>
                <option value="5">5 Person (+ {extraPerson}p.p)</option>
                <option value="6">6 Person (+ {extraPerson}p.p)</option>
                <option value="7">7 Person (+ {extraPerson}p.p)</option>
                <option value="8">8 Person (+ {extraPerson}p.p)</option>
                <option value="9">9 Person (+ {extraPerson}p.p)</option>
                <option value="10">10 Person (+ {extraPerson}p.p)</option>
                <option value="11">11 Person (+ {extraPerson}p.p)</option>
                <option value="12">12 Person (+ {extraPerson}p.p)</option>
            </select>}
            <p className='text-lg mt-2'>{t('bookingForm.amountPersons')} {`${persons}`}</p>
            <p className='text-lg'>Total: {`${price}`} MXN</p>
            <p className='text-lg'>{t('bookingForm.requiredPrepayment')} ${`${prepayment}`} MXN</p>


            <form onSubmit={makePayment} className='text-sm mt-5 flex flex-col items-start gap-3 w-full'>
               {t('bookingForm.contact')}
            <label htmlFor="name" className='text-sm'>{t('bookingForm.name')}</label>
            <input required type="text" id='name' placeholder={t('bookingForm.namePlaceholder')}className='border-1 rounded w-full' onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="email">{t('bookingForm.email')}</label>
            <input required type="email" id='email' placeholder={t('bookingForm.emailPlaceholder')} className='border-1 rounded w-full' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="phone">{t('bookingForm.phone')}</label>
            <PhoneInput 
                required
                id='phone'
                className='border-1 rounded w-full'
                placeholder={t('bookingForm.phonePlaceholder')}
                value={phone}
                onChange={setPhone}
                defaultCountry="MX"
            />
              
            <button className='border-1 rounded p-2 mt-2 self-center'>Book Now</button>
        </form>
        </section>
    )
}