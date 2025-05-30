import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bookstore from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bookstore />
  </StrictMode>,
)
