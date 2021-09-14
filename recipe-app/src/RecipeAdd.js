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

    function handleSave() {

    }

    function handleCancel() {
        setState({ mode: 'ready' });
    }

    function renderReadyMode() {
        return (
            <button onClick={handleAdd}>Add</button>
        )
    }

    function renderFormMode() {
        return (
            <RecipeForm recipe={newRecipe} onCancel={handleCancel} />
        )
    }

    return (
        <div className="RecipeAdd">
            {state.mode == 'ready' ? renderReadyMode() : renderFormMode()}
        </div>
    )
}

export default RecipeAdd;
