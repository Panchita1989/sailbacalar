import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      enum: ['10:00', '15:00'],
      required: true
    },
    persons: {
      type: Number,
      required: true
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
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'cancelled'],
      default: 'pending'
    }
    
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Booking', bookingSchema)
