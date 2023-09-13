import './index.css'

// 1. Import the extendTheme function
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import RootRouterPage from './pages/RootRouterPage'
import reportWebVitals from './reportWebVitals'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const theme = extendTheme({ colors })

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/** to use all components theme use ChakraProvider */}
    <ChakraBaseProvider theme={theme}>
      <RootRouterPage />
    </ChakraBaseProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
