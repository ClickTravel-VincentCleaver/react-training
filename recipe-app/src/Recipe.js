import './Recipe.css';
import React, { useState } from "react";
import IngredientList from "./IngredientList";
import RecipeForm from "./RecipeForm";

function Recipe(props) {

    const [state, setState] = useState({ mode: 'view' });

    const recipe = props.recipe;

    function handleCancel() {
        setState({ mode: 'view' });
    }

    function handleEdit() {
        setState({ mode: 'edit' });
    }

    function renderViewMode() {
        return (
            <div className="Recipe">
                <div className="Recipe-name">{recipe.name}</div>
                <div className="Recipe-description">{recipe.description}</div>
                <IngredientList ingredients={recipe.ingredients}/>
                <button onClick={handleEdit}>Edit</button>
                <button>Delete</button>
            </div>
        )
    };

    function renderEditMode() {
        return (
            <div className="Recipe">
                <RecipeForm recipe={recipe} onCancel={handleCancel}/>
            </div>
        )
    }

    return state.mode == 'view' ?renderViewMode() : renderEditMode();
}

export default Recipe;
