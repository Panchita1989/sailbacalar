import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Payment() {

    const navigate = useNavigate()
    const {state} = useLocation()
    const { name, email, phone, selectedDate, selectedHour, title, persons, price, prepayment } = state

    const handlePayment = (e) => {
        e.preventDefault()

        fetch('api/payment', {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if (!data.success) {
                alert('Payment failed')
                return
            }

       return fetch('api/bookings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                phone,
                selectedDate,
                selectedHour,
                persons,
                price,
                prepayment
            })
        })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Reservation succsessfull')
            navigate('/thankYou',{state: {
                name,
                title,
                selectedDate,
                selectedHour,
                persons,
                price,
                prepayment}
            })            
        })
        .catch(error => console.log(error))

    }

    return(
        <section className='text-center mt-10'>
            <h1 className='text-center text-3xl'>You gota pay NOW!</h1>
             <div className="max-w-md mx-auto p-5 flex flex-col gap-3">
                <h2>Booking Summary</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Tour:</strong> {title}</p>
                <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {selectedHour}</p>
                <p><strong>Persons:</strong> {persons}</p>
                <p><strong>Total:</strong> {price} MXN</p>
                <p><strong>Prepayment:</strong> {prepayment} MXN</p></ div>

            <form 
                onSubmit={handlePayment}
                className='max-w-sm mx-auto flex flex-col  mt-10
                        [&>input]:mb-5 mt-10 [&>input]:border [&>input]:rounded  
                        [&>button]:border [&>button]:rounded'>
                <label htmlFor="creditcardnumber" className='border-none'>Creditcard Number</label>
                <input type="number"  placeholder='Creditcard Number'/>
                <label htmlFor="Name" className='border-none'>Name</label>
                <input type="text" placeholder='Name'/>
                <label htmlFor="date" className='border-none'>Date</label>
                <input type="text" placeholder='date'/>
                <label htmlFor="CVV" className='border-none'>CVV</label>
                <input type="number" placeholder='cvv'/>
                <label htmlFor="amount" className='border-none'>Amount</label>
                <input disabled type='number' placeholder='amount' value={prepayment} />
                <button className='p-2 max-w-fit self-center'>Pay and Book</button>
            </form>
        </section>
        
    )
}