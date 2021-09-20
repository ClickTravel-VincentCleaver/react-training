import React from 'react';
import { render, screen } from '@testing-library/react';
import Ingredient from './Ingredient';

it('should render ingredient name', () => {
  const name="MOCK_NAME"
  render(<Ingredient name={name} />);
  const divElement = screen.getByText(name);
  expect(divElement).toBeInTheDocument();
});
