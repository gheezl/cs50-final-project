import React, { Fragment } from "react";

import "./error-boundary.css"

const ErrorDisplay = () => {
    return(
        <Fragment>
            <div className="error-display">
                <h2>There has been a fatal error with the application, please try again later.</h2>
            </div>
        </Fragment>
    )
}

export default ErrorDisplay;