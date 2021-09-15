import React from "react";
import Recipe from './Recipe';
import RecipeAdd from "./RecipeAdd";

function RecipeList(props) {

    return (
        <div className="RecipeList">
            <h2>Recipes:</h2>
            {
                props.recipes.map(function(recipe){
                    return <Recipe
                        recipe={recipe}
                        key={recipe.id}
                        onDelete={props.onDelete}
                        onUpdate={props.onUpdate}
                    />;
                })
            }
            <hr/>
            <RecipeAdd onSave={props.onCreate}/>
        </div>
    )
}

export default RecipeList;
