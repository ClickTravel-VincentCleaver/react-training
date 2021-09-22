import './ContentPanel.css';
import RecipeList from "./RecipeList";
import Loading from "./Loading";
import React, { useState, useEffect, useCallback } from "react";
import {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipes
} from './service/RecipeService';

function ContentPanel(props) {

    const [state, setState] = useState({
        recipes: [] ,
        isLoading: true
    });

    const fetchRecipes = useCallback(() => {
        if (props.searchText === '') {
            getRecipes().then(result => {
                setState({
                    recipes: result.recipes,
                    isLoading: false
                })
            });
        } else {
            searchRecipes({ searchText: props.searchText }).then(result => {
                setState({
                    recipes: result.recipes,
                    isLoading: false
                })
            });
        }
    }, [props.searchText]);

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

    useEffect(() => {
        fetchRecipes();
    }, [props.searchText, fetchRecipes]);

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
