import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CartContexProvider } from './contexts/CartContext'


ReactDOM.render(
  <React.StrictMode>
    <CartContexProvider>
    <App />

    </CartContexProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
