import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import "./RecipeAdd.css";

function RecipeAdd() {

    const [state, setState] = useState( { mode: 'ready' });

    const newRecipe = {
        id: 0,
        name: "",
        description: "",
        ingredients: []
    }

    function handleAdd() {
        setState({ mode: 'form' });
    }

    function handleCancel() {
        setState({ mode: 'ready' });
    }

    function handleSave(event) {
        event.preventDefault();
    }

    function renderReadyMode() {
        return (
            <button onClick={handleAdd}>Add</button>
        )
    }

    function renderFormMode() {
        return (
            <RecipeForm recipe={newRecipe} onCancel={handleCancel} onSave={handleSave} />
        )
    }

    return (
        <div className="RecipeAdd">
            {state.mode === 'ready' ? renderReadyMode() : renderFormMode()}
        </div>
    )
}

export default RecipeAdd;
