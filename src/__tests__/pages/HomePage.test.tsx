import { render, screen } from '@testing-library/react'
import React from 'react'

import { HomePage } from '../../pages/HomePage'

test('should render correctly', () => {
  render(<HomePage />)
  const linkElement = screen.getByText(/home/i)
  expect(linkElement).toBeInTheDocument()
})
