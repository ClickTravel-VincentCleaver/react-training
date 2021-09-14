import './ContentPanel.css';
import RecipeList from "./RecipeList";
import Loading from "./Loading";
import React, { useState, useEffect } from "react";
import axios from "axios";

// temporary test data
function ContentPanel() {

    const [state, setState] = useState({
        recipes: [] ,
        isLoading: true,
    });

    // equivalent to componentDidMount
    useEffect(() => {
        const url = "/api/recipe/";
        axios.get(url).then(response => {
            console.log(response);
            setState({ recipes: response.data })
        });
    }, []);

    return (
        <div className="ContentPanel">
            {
                state.isLoading ? (
                    <Loading />
                ) : (
                    <RecipeList recipes={state.recipes} />
                )
            }
        </div>
    )
}

export default ContentPanel;
