import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('renders splash', () => {
  render(<App />);
  const mainHeading = screen.getByText(/mandi eats/i);
  expect(mainHeading).toBeInTheDocument();
});
