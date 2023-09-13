import { VStack } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavMenu } from '../components/NavMenu'
import { AboutPage } from './AboutPage'
import { ContactPage } from './ContactPage'
import { HomePage } from './HomePage'

function RootRouterPage() {
  return (
    <BrowserRouter>
      <VStack
        alignItems="flex-start"
        gap="32px"
        maxWidth="1000px"
        margin="24px"
      >
        <NavMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </VStack>
    </BrowserRouter>
  )
}

export default RootRouterPage
