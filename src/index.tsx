import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from '@DRXPath/App'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@DRXPath/theme'
import PageHeader from '@DRXPath/components/PageHeader'
import Footer from './components/Footer'

const root = createRoot(document.getElementById('root')!)
root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <PageHeader />
      <App />
      <Footer />
    </ThemeProvider>
  </HashRouter>
)
