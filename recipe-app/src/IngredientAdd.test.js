import React from 'react';
import { render, screen } from '@testing-library/react';
import IngredientAdd from './IngredientAdd';

it('should render form controls to add ingredient', () => {
  function mockOnAdd() {};

  render(<IngredientAdd onAdd={mockOnAdd} />);

  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
