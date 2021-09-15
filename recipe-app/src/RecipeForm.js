import React, { useState } from "react";
import "./RecipeForm.css";

function RecipeForm(props) {

    const [state, setState] = useState({ recipe: props.recipe });

    function handleChange(event) {
        let updated_recipe = state.recipe;
        updated_recipe[event.target.name] = event.target.value;
        setState({ recipe: updated_recipe });
    }

    function handleSave() {
        return props.onSave(state.recipe);
    }

    return (
        <div className="RecipeForm">
            <form>
                <input
                    type="hidden"
                    id="recipe-form-id"
                    name="id"
                    value={state.recipe.id}
                />
                <label htmlFor="recipe-form-name">Name:</label>
                <input
                    id="recipe-form-name"
                    name="name"
                    value={state.recipe.name}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="recipe-form-description">Description:</label>
                <input
                    id="recipe-form-description"
                    name="description"
                    value={state.recipe.description}
                    onChange={handleChange}
                />
                <br/>
                <label>Ingredients:</label>
                <br/>
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default RecipeForm;
