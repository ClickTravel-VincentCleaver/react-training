import './SearchForm.css';
import React, {useState} from "react";

function SearchForm(props) {

    const [state, setState] = useState({ searchText: '' });

    function handleChange(event) {
        setState({ searchText: event.target.value});
    }

    function handleSearch(event) {
        event.preventDefault();
        props.onSearch(state.searchText);
    }

    return (
        <div className="SearchForm">
            <form>
                <input
                    id="search-text"
                    type="text"
                    name="searchText"
                    value={state.searchText}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;
