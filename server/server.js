import express from "express"
import userRouter from './routes/users.js'
import bookingsRouter from './routes/bookings.js'

const app = express()
const router = express.Router()

app.get('/', (req, res) => {
    console.log('hello')
    res.status(500).send('hi')
})

app.use('/users', userRouter)
app.use('/bookings', bookingsRouter)
app.listen(3000)