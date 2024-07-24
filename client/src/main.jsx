import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {EmployeeProvider} from './EmployeeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EmployeeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </EmployeeProvider>
)
