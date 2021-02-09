import React, { Fragment, useState } from "react";
import { useDispatch } from 'react-redux'

import {getDataStart} from "../../redux/actions.js"

import "./search-bar.css";

const SearchBar = () => {
    const [input, setInput] = useState(null)
    const dispatch = useDispatch()

    const onChange = (event) => {
        setInput(event.target.value)
    }

    return(
        <Fragment>
            <div className="search-bar">
                <input onChange={onChange} className="input-bar" placeholder="Search for a nation" />
                <button onClick={() => dispatch(getDataStart(input))} className="input-button">🔎</button>
            </div>
        </Fragment>
    )
}

export default SearchBar;