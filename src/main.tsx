import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app' // Importando o arquivo app.tsx (minúsculo)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
