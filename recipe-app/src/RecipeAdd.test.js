import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import RecipeAdd from "./RecipeAdd";

it('should render the add button', () => {
    render(<RecipeAdd />);

    const addButtonElement = screen.getByText('Add');
    expect(addButtonElement).toBeVisible();
});

it('should render the recipe form when add is selected', () => {
   render(<RecipeAdd/>);
   fireEvent.click(screen.getByText('Add'));

    const saveButtonElement = screen.getByText('Save');
    expect(saveButtonElement).toBeVisible();

    const cancelButtonElement = screen.getByText('Cancel');
    expect(cancelButtonElement).toBeVisible();
});
