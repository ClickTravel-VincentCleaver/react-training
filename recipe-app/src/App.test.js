import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render title, search and content', () => {
  render(<App />);
  const titleElement = screen.getByText('Recipe App');
  expect(titleElement).toBeInTheDocument();

  const searchElement = screen.getByText('Search');
  expect(searchElement).toBeInTheDocument();

  const contentElement = screen.getByText('Loading');
  expect(contentElement).toBeInTheDocument();
});
