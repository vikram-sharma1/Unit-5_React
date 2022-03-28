import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals'
import {Provider as ReduxProvider} from 'react-redux'
import {store} from './Redux/store'
// import reportWebVitals from 'web-vitals'


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <ReduxProvider store={store}>
      <App />

      </ReduxProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
)
