import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../../pages/HomePage';

test('should render correctly', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
