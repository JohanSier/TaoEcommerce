import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router"
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        {/* Scroll to top ensures that everytime we change the page it appears in the top of every page
        otherwise it would keep the screen in the same position as the previous when you hit click to the link */}
        <ScrollToTop /> 
        <App />
    </BrowserRouter>
  </StrictMode>,
)
