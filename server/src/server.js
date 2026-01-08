import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bookingRoutes from './routes/bookings.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000


//Middleware
app.use(express.json())

//MongoDB connection
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error(err))


//Routes
app.use('/bookings', bookingRoutes )

app.get('/', (req, res) => {
  res.send('Hello Node.js')
})

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`)
})
