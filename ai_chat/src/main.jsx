import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chat from './chat.jsx'
import Trail from './trail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Chat/>
    {/* <Trail/> */}
  </StrictMode>,
)
