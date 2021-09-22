import React from 'react';
import { render, screen } from '@testing-library/react';
import IngredientAdd from './IngredientAdd';
import userEvent from "@testing-library/user-event";

it('should render form controls to add ingredient', () => {
  function mockOnAdd() {};

  render(<IngredientAdd onAdd={mockOnAdd} />);

  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

it('should call onAdd when ingredient is added', () => {
    const mockOnAdd = jest.fn();
    render(<IngredientAdd onAdd={mockOnAdd}/>);

    userEvent.click(screen.getByText('+'));
});