import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import "./IngredientInputs.css";
import IngredientAdd from "./IngredientAdd";

function IngredientInputs(props) {

    const [state, setState] = useState({ ingredients: props.ingredients });

    function handleAdd(ingredient) {
        const ingredients = state.ingredients;
        ingredients.push(ingredient);
        setState({ ingredients });
    }

    function handleDelete(ingredient) {
        const ingredients = state.ingredients;
        const index = ingredients.indexOf(ingredient);
        if (index > -1) {
            ingredients.splice(index, 1);
            setState({ ingredients });
        }
    }

    return (
        <div className="IngredientInputs">
            {
                state.ingredients.map(function(ingredient){
                    return <IngredientInput
                        ingredient={ingredient}
                        onDelete={handleDelete}
                    />
                })
            }
            <IngredientAdd onAdd={handleAdd} />
        </div>
    )
}

export default IngredientInputs;
