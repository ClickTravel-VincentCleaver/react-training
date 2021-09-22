import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeList from './RecipeList';

it('should render the list of recipes', () => {

    const recipes = [
        { name: 'Recipe 1', description: 'abc', ingredients: [] },
        { name: 'Recipe 2', description: 'def', ingredients: [] },
        { name: 'Recipe 3', description: 'ghi', ingredients: [] }
    ];
    render(<RecipeList recipes={recipes} />);

    const recipe1Element = screen.getByText('Recipe 1');
    expect(recipe1Element).toBeVisible();

    const recipe2Element = screen.getByText('Recipe 2');
    expect(recipe2Element).toBeVisible();

    const recipe3Element = screen.getByText('Recipe 3');
    expect(recipe3Element).toBeVisible();

    const addElement = screen.getByText('Add');
    expect(addElement).toBeVisible();
});
