import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import RecipeForm from './RecipeForm';

it('should render the recipe form elements', () => {

    const recipe = {
        id: 'MOCK_RECIPE_ID',
        name: 'MOCK_RECIPE_NAME',
        description: 'MOCK_RECIPE_DESCRIPTION',
        ingredients: [
            { name: 'INGREDIENT1' },
            { name: 'INGREDIENT2' }
        ]
    };
    render(<RecipeForm recipe={recipe}/>);

    const nameElement = screen.getByLabelText('Name:');
    expect(nameElement).toBeInTheDocument();

    const descriptionInput = screen.getByText('MOCK_RECIPE_DESCRIPTION');
    expect(descriptionInput).toBeInTheDocument();

    const descriptionElement = screen.getByLabelText('Description:');
    expect(descriptionElement).toBeInTheDocument();

    const ingredient1Element = screen.getByText('INGREDIENT1');
    expect(ingredient1Element).toBeInTheDocument();

    const ingredient2Element = screen.getByText('INGREDIENT2');
    expect(ingredient2Element).toBeInTheDocument();

    const saveControl = screen.getByText('Save');
    expect(saveControl).toBeInTheDocument();

    const cancelControl = screen.getByText('Cancel');
    expect(cancelControl).toBeInTheDocument();
});

it('should submit successfully', () => {
    const recipe = {
        id: 'MOCK_RECIPE_ID',
        name: 'MOCK_RECIPE_NAME',
        description: 'MOCK_RECIPE_DESCRIPTION',
        ingredients: [
            { name: 'INGREDIENT1' },
            { name: 'INGREDIENT2' }
        ]
    };

    const onSave = jest.fn();
    const onCancel = jest.fn();

    render(<RecipeForm recipe={recipe} onSave={onSave} onCancel={onCancel} />);
    fireEvent.click(screen.getByText('Save'));
});
