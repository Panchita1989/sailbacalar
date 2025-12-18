import { useState, useEffect } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";



export default function BookingForm({selectedDate, selectedHour, title, basePrice, extraPerson}) {

    const basePerson = 2
    const basePriceNum = Number(basePrice.replace('$', '').replace("'", ""))

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const [phone, setPhone] = useState("")

    const[price, setPrice] = useState(basePriceNum)
    const[persons, setPersons] = useState(basePerson)
    const[time, setTime] = useState(null)
        
    const prepayment = price/2

    const navigate = useNavigate()
  
    console.log(basePrice)
    console.log(extraPerson)

    const formatDate = (dateObj) =>{
        return new Intl.DateTimeFormat('en-GB',{
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(dateObj)
    }

    useEffect(() => {
        if(selectedHour === '10am'){
            setTime('from 10am to 2pm')
        }
        if(selectedHour === '3pm'){
            setTime('from 3pm to 7pm')
        }
    }, [selectedHour])

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

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/payment',{
            state:{
                name,
                email,
                phone,
                selectedDate,
                selectedHour,
                price,
                title,
                persons,
                prepayment,

            }
        })
    }
    
    return(
        <section className='flex flex-col items-start' >            
            <p className='text-xl'>Your Booking:</p>
            <p className='text-lg'>{title}</p>
            <p className='text-lg'>Date: {formatDate(selectedDate)}</p> 
            <p className='text-lg'>Time: {`${time}`}</p>
            <select select name="extraPerson" id="extraPerson" onChange={handleSelect} className='border-1'>
                <option disabled selected value="">select amount of Persons</option>
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
            </select>
            <p className='text-lg mt-2'>Amount of Persons: {`${persons}`}</p>
            <p className='text-lg'>Total: {`${price}`} MXN</p>
            <p className='text-lg'>Requiered Prepayment: ${`${prepayment}`} MXN</p>


            <form onSubmit={handleSubmit} className='text-sm mt-5 flex flex-col items-start gap-3 w-full'>
                Contact Details 
            <label htmlFor="name" className='text-sm'>Full Name</label>
            <input required type="text" id='name' placeholder='Enter Full Name'className='border-1 rounded w-full' onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input required type="email" id='email' placeholder='Enter Email' className='border-1 rounded w-full' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="phone">Phone</label>
            <PhoneInput 
                required
                id='phone'
                className='border-1 rounded w-full'
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                defaultCountry="MX"
            />
              
            <button className='border-1 rounded p-2 mt-2 self-center'>Book Now</button>
        </form>
        </section>
    )
}