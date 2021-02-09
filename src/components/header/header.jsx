import React, { Fragment } from "react";

import {useDispatch} from "react-redux"
import { resetState } from "../../redux/actions";

import "./header.css";

const Header = () => {
    const dispatch = useDispatch()

    return(
        <Fragment>
            <div className="header-border">
                <h1 className="header-name">COVID-19 Tracker</h1>
                <h3 onClick={() => dispatch(resetState())} className="search-button">Search</h3>
            </div>
        </Fragment>
    )
}

export default Header;