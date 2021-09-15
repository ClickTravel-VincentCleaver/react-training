import axios from "axios";

const BASE_URL = "/api/recipe/";

function recipe_url(recipe_id){
    return BASE_URL + recipe_id + '/';
}

export function getRecipes() {
    return axios.get(BASE_URL).then(response => {
        return { recipes: response.data };
    });
}

export function createRecipe({ recipe }) {
    return axios.post(BASE_URL, recipe).then(response => {
        return { recipe: response.data };
    });
}

export function updateRecipe({ recipe }) {
    return axios.patch(recipe_url(recipe.id), recipe);
}

export function deleteRecipe({ recipe_id }) {
    return axios.delete(recipe_url(recipe_id));
}


