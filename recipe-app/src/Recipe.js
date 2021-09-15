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

    function handleSave(event) {
        // event.preventDefault();
        // do the save
        props.onUpdate(recipe).then(() => {
            setState({ mode: 'view' });
        });
    }

    function handleDelete(event) {
        if (window.confirm("Are you sure?")) {
            props.onDelete(recipe.id);
        }
    }

    function renderViewMode() {
        return (
            <div className="Recipe">
                <div className="Recipe-name">{recipe.name}</div>
                <div className="Recipe-description">{recipe.description}</div>
                <IngredientList ingredients={recipe.ingredients}/>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    }

    function renderEditMode() {
        return (
            <div className="Recipe">
                <RecipeForm recipe={recipe} onCancel={handleCancel} onSave={handleSave}/>
            </div>
        )
    }

    return state.mode === 'view' ? renderViewMode() : renderEditMode();
}

export default Recipe;
