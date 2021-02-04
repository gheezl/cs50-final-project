import React, { Fragment } from "react";

import "./search-bar.css";

const SearchBar = () => {
    return(
        <Fragment>
            <div className="search-bar">
                <input className="input-bar" placeholder="Search for a user" />
                <button className="input-button">🔎</button>
            </div>
        </Fragment>
    )
}

export default SearchBar;