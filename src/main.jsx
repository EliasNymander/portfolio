import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <Analytics />
      <SpeedInsights/>
    </LanguageProvider>
  </StrictMode>,
)
