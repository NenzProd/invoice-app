import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/custom-bootstrap.scss'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
