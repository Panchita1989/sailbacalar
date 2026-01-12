import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bookingRoutes from './routes/bookings.js'
import calendarRoutes from './routes/calendar.js'
import paymentRoutes from './routes/payment.js'
import cors from 'cors'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000


//Middleware
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))

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
