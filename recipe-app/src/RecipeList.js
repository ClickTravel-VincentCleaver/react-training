import React, {useState} from "react";
import Recipe from './Recipe';
import RecipeAdd from "./RecipeAdd";

function RecipeList(props) {

    return (
        <div className="RecipeList">
            <h2>Recipes:</h2>
            {
                props.recipes.map(function(recipe){
                    return <Recipe recipe={recipe} />;
                })
            }
            <hr/>
            <RecipeAdd />
        </div>
    )
}

export default RecipeList;
