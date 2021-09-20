import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import IngredientInput from './IngredientInput';

it('should render ingredient name and  delete button', () => {
    const ingredientName = 'MOCK_INGREDIENT_NAME';
    const ingredient = { name: ingredientName };

    render(<IngredientInput ingredient={ingredient} />);

    const inputElement = screen.getByRole('button');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByText(ingredientName);
    expect(buttonElement).toBeInTheDocument();
});

it('should call onDelete(ingredient) when delete button is clicked', () => {
    const mockOnDelete = jest.fn();

    const ingredientName = 'MOCK_INGREDIENT_NAME';
    const ingredient = { name: ingredientName };

    render(<IngredientInput ingredient={ingredient} onDelete={mockOnDelete}/>);
    userEvent.click(screen.getByRole('button'));

    expect(mockOnDelete.mock.calls.length).toBe(1);
    expect(mockOnDelete.mock.calls[0][0]).toBe(ingredient);
})