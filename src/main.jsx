import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import { RouterProvider } from 'react-router'
// import routes from './routes.jsx'
import { Navbar } from './components/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
  </StrictMode>,
)