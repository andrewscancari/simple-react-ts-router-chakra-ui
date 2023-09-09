import { render, screen } from '@testing-library/react'
import React from 'react'

import { AboutPage } from '../../pages/AboutPage'

test('should render correctly', () => {
  render(<AboutPage />)
  const linkElement = screen.getByText(/about/i)
  expect(linkElement).toBeInTheDocument()
})
