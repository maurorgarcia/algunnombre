import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { config } from './config.js'
import './index.css'

// Título de la pestaña (también se define en index.html al compilar)
document.title = `${config.nombre} · ${config.eslogan}`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
