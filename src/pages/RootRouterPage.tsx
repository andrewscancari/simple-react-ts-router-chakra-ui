import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavMenu } from '../components/NavMenu'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'

function RootRouterPage() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouterPage
