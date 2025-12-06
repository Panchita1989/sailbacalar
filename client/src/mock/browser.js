import { setupWorker } from "msw/browser";
import { bookingHandlers } from './handlers'

export const worker = setupWorker(...bookingHandlers)