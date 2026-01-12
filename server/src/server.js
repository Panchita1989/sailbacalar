import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bookingRoutes from './routes/bookings.js'
import calendarRoutes from './routes/calendar.js'
import paymentRoutes from './routes/payment.js'
import cors from 'cors'

dotenv.config()

const app = express()

const allowedOrigins = [
   "https://sailbacalar.com",
   "http://localhost:5173"   
]

const PORT = process.env.PORT || 5000


//Middleware
app.use(express.json())
app.use(cors({ 
  origin: function(origin, callback) {
    if(!origin) return callback(null, true)
    if(allowedOrigins.indexOf(origin) === -1){
      const msg =  `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  } }))

//MongoDB connection
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error(err))


//Routes
app.use('/bookings', bookingRoutes )
app.use('/calendar', calendarRoutes)
app.use('/payment', paymentRoutes)


app.get('/', (req, res) => {
  res.send('Hello Node.js')
})

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`)
})
