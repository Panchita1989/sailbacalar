import express from 'express'
import { calendarController } from '../controllers/calendarController.js';

const router = express.Router()

router.get('/availability', calendarController)

export default router