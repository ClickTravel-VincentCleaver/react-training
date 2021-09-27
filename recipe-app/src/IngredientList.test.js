import React from 'react';
import { render, screen } from '@testing-library/react';
import IngredientList from "./IngredientList";

it('should render the list of ingredients', () => {

    const ingredients = [
        { name: 'onions' },
        { name: 'garlic' },
        { name: 'olive oil' }
    ]
    render(<IngredientList ingredients={ingredients}/>);

    const ingredient1Element = screen.getByText('onions');
    expect(ingredient1Element).toBeVisible();

    const ingredient2Element = screen.getByText('garlic');
    expect(ingredient2Element).toBeVisible();

    const ingredient3Element = screen.getByText('olive oil');
    expect(ingredient3Element).toBeVisible();
});
