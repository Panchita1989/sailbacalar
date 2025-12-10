import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

async function defereRender() {
  if(process.env.NODE_ENV !== 'development'){
    return
  }
  const { worker } = await import('./mock/browser.js')
  return worker.start()
}

defereRender().then(() => {
  createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
})
