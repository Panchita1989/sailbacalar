import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    persons: {
      type: Number,
      required: true,
      min: 1
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true
    },
    totalPrice: {
      type: Number,
      required: true
    },
    prepayment: {
      type: Number,
      default: 0
    }    
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Booking', bookingSchema)
