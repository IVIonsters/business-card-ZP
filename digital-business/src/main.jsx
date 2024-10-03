import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Info from './components/Info/Info.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Info />
  </StrictMode>,
)


