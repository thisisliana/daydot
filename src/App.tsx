import React from 'react'
import { Route, Routes } from 'react-router'
import WhatIOffer from '@DRXPath/pages/WhatIOffer'
import AboutMe from '@DRXPath/pages/AboutMe'
import Contact from '@DRXPath/pages/Contact'
import HealthProfessionals from './pages/HealthProfessionals'

export const ROUTE_ABOUT_ME = '/aboutme'

export const ROUTE_WHAT_I_OFFER = '/whatioffer'

export const ROUTE_BOOKINGS = '/bookings'

export const ROUTE_CONTACT = '/contact'

export const ROUTE_HEALTH_PROFS = '/healthprofessionals'

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AboutMe />} />
      <Route path={ROUTE_ABOUT_ME} element={<AboutMe />} />
      <Route path={ROUTE_WHAT_I_OFFER} element={<WhatIOffer />} />
      <Route path={ROUTE_CONTACT} element={<Contact />} />
      <Route path={ROUTE_HEALTH_PROFS} element={<HealthProfessionals />} />
    </Routes>
  )
}

export default App
