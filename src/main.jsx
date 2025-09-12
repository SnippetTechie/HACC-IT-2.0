import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import Test1 from './Test1.jsx'
import './index2.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test1 />
  </StrictMode>,
)
