import React, { Fragment } from "react";

import {useSelector} from "react-redux"

import "./data.css";

const Data = () => {
    const data = useSelector(state => state.data)

    console.log(data)

    return(
        <Fragment>
            <div className="data-page">
                    {/* <img className="user-pfp" src="https://i.redd.it/qtldg7ajo1841.png"/> */}
                    <h2 className="country-name">{data.country}</h2>
                    <h3>{data.day}</h3>
                    <div className="data-subsection">

                        <div className="data-information">
                           <h2 className="data-title">Cases :</h2>
                           <span className="data">active : {data.cases.active}</span>
                           {/* <span className="data">new today: {data.cases.new}</span> */}
                           <span className="data">critical : {data.cases.critical}</span>
                           <span className="data">recovered : {data.cases.recovered}</span>
                           <span className="data">total : {data.cases.total}</span>
                        </div>

                        <div className="data-information">
                            <h2 className="data-title">Deaths :</h2>
                            {/* <span className="data">new today: {data.deaths.new}</span> */}
                            <span className="data">total : {data.deaths.total}</span>
                        </div>

                        <div className="data-information">
                            <h2 className="data-title">Tests :</h2>
                            <span className="data">total : {data.tests.total}</span>
                        </div>
                        
                    </div>
            </div>
        </Fragment>
    )
}

export default Data;