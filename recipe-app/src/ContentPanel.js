import './ContentPanel.css';
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import React, { useState } from "react";

// temporary test data
const recipes = [
    {
        id: "1",
        name: "Pastry",
        description: "Best pastry ever",
        ingredients: [
            {name: "butter"},
            {name: "flour"},
            {name: "salt"},
            {name: "eggs"}
        ]
    },
    {
        id: "2",
        name: "Scrambled eggs",
        description: "...",
        ingredients: [
            {name: "eggs"},
            {name: "butter"},
            {name: "milk"}
        ]
    },
    {
        id: "3",
        name: "Fish and chips",
        description: "...",
        ingredients: [
            {name: "fish"},
            {name: "chips"},
            {name: "tomato ketchup"}
        ]
    }
];

function ContentPanel() {

    const [state, setState] = useState({ recipes: [] });

    function getRecipes(e) {
        setState({ recipes: recipes });
    };

    return (
        <div className="ContentPanel">
            <button onClick={getRecipes}>Get Recipes</button>
            <RecipeList recipes={state.recipes} />
        </div>
    )
}

export default ContentPanel;
