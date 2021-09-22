import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipe from './Recipe';
import userEvent from "@testing-library/user-event";

const sampleRecipe = {
    id: 'MOCK_RECIPE_ID',
    name: 'MOCK_RECIPE_NAME',
    description: 'MOCK_RECIPE_DESCRIPTION',
    ingredients: []
};

it('should render recipe in view mode with edit and delete controls', () => {
    render(<Recipe recipe={sampleRecipe}/>);

    expect(screen.getByText('MOCK_RECIPE_NAME')).toBeInTheDocument();
    expect(screen.getByText('MOCK_RECIPE_DESCRIPTION')).toBeInTheDocument();

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
});

it('should render recipe form when edit mode is selected', () => {
    render(<Recipe recipe={sampleRecipe}/>);
    userEvent.click(screen.getByText('Edit'));

    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
});

it('should render recipe in view mode when cancel is selected', () => {
    render(<Recipe recipe={sampleRecipe}/>);
    userEvent.click(screen.getByText('Edit'));
    userEvent.click(screen.getByText('Cancel'));

    expect(screen.getByText('MOCK_RECIPE_NAME')).toBeInTheDocument();
    expect(screen.getByText('MOCK_RECIPE_DESCRIPTION')).toBeInTheDocument();

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
});

