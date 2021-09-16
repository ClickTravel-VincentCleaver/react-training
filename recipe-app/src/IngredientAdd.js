import React, { useState } from "react";

function IngredientAdd(props) {

    const [state, setState] = useState({ name: "" });

    function handleAdd() {
        if(state.name !== "") {
            props.onAdd({name: state.name});
            setState({name: ""});
        }
    }

    function handleChange(event) {
        setState({ name: event.target.value });
    }

    return (
        <div className="IngredientInput">
            <input type="text" onChange={handleChange} value={state.name} />
            <button type="button" onClick={handleAdd}>+</button>
        </div>
    )
}

export default IngredientAdd;
