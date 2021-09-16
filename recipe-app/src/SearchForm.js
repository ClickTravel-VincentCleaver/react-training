import './SearchForm.css';
import React, {useState} from "react";

function SearchForm(props) {

    const [state, setState] = useState({ searchText: '' });

    function handleChange(event) {
        setState({ searchText: event.target.value});
    }

    function handleSearch() {
        return props.onSearch(state.searchText);
    }

    return (
        <div className="SearchForm">
            <form>
                <input
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
