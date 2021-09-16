import React from "react";
function IngredientInput(props) {

    function handleDelete() {
        props.onDelete(props.ingredient)
    }

    return (
        <div className="IngredientInput">
            <div className="IngredientInput-name">{props.ingredient.name}</div>
            <button type="button" onClick={handleDelete}>x</button>
        </div>
    )
}

export default IngredientInput;