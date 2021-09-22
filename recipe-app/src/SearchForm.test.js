import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from "./SearchForm";

it('should render search text input and button', () => {
    render(<SearchForm/>);
    const buttonElement = screen.getByText('Search');
    expect(buttonElement).toBeInTheDocument();
});
