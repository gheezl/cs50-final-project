import React, { Fragment } from "react";

import {useSelector} from "react-redux"

import "./data.css";

const Data = () => {
    const data = useSelector(state => state.data)

    return(
        <Fragment>
            <div className="data-page">
                    {/* <img className="user-pfp" src="https://i.redd.it/qtldg7ajo1841.png"/> */}
                    <h2 className="country-name">{data.country}</h2>
                    <h3>{data.day}</h3>
                    <div className="data-subsection">

                        <div className="data-information">
                           <h2 className="data-title">Cases</h2>
                           <span className="data">active : {data.cases.active.toLocaleString()}</span>
                           <span className="data">critical : {data.cases.critical.toLocaleString()}</span>
                           <span className="data">recovered : {data.cases.recovered.toLocaleString()}</span>
                           <span className="data">total : {data.cases.total.toLocaleString()}</span>
                        </div>

                        <div className="data-information">
                            <h2 className="data-title">Deaths</h2>
                            <span className="data">total : {data.deaths.total.toLocaleString()}</span>
                        </div>

                        <div className="data-information">
                            <h2 className="data-title">Tests</h2>
                            <span className="data">total : {data.tests.total.toLocaleString()}</span>
                        </div>
                        
                    </div>
            </div>
        </Fragment>
    )
}

export default Data;