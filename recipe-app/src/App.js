import React, { useState } from "react";
import './App.css';
import ContentPanel from "./ContentPanel";
import SearchForm from "./SearchForm";

function App() {

    const [state, setState] = useState({ searchText: "" })
    function handleSearch(searchText) {
        setState({ searchText });
    }
    return (
        <div className="App">
            <h1>Recipe App</h1>
            <SearchForm onSearch={handleSearch}/>
            <ContentPanel searchText={state.searchText} />
        </div>
    );
}

export default App;
