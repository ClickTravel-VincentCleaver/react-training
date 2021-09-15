import './ContentPanel.css';
import RecipeList from "./RecipeList";
import Loading from "./Loading";
import React, { useState, useEffect } from "react";
import {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
} from './service/RecipeService';

function ContentPanel() {

    function fetchRecipes() {
        getRecipes().then(result => {
            setState({
                recipes: result.recipes,
                isLoading: false
            })
        });
    }

    function handleDeleteRecipe(recipe_id) {
        return deleteRecipe({ recipe_id }).then(() =>
            fetchRecipes()
        );
    }

    function handleCreateRecipe(recipe) {
        return createRecipe({ recipe }).then(() =>
            fetchRecipes()
        );
    }

    function handleUpdateRecipe(recipe) {
        return updateRecipe({ recipe }).then(() =>
            fetchRecipes()
        );
    }

    const [state, setState] = useState({
        recipes: [] ,
        isLoading: true,
    });

    // equivalent to componentDidMount
    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className="ContentPanel">
        {
            state.isLoading ? (
                <Loading />
            ) : (
                <RecipeList
                    recipes={state.recipes}
                    onDelete={handleDeleteRecipe}
                    onCreate={handleCreateRecipe}
                    onUpdate={handleUpdateRecipe}
                />
            )
        }
        </div>
    )
}

export default ContentPanel;
