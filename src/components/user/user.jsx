import React, { Fragment } from "react";

import "./user.css";

const User = () => {
    return(
        <Fragment>
            <div className="user-page">
                    <img className="user-pfp" src="https://i.redd.it/qtldg7ajo1841.png" width="250px"/>
                    <h2 className="user-name">okthoidk</h2>
                    <div className="user-subsection">
                        <span className="user-data">followers: 1654</span>
                        <span className="user-data">following: 78</span>
                        
                    </div>
                    <div className="user-subsection">
                        <span className="user-data">average views: 987</span>
                        <span className="user-data">average likes: 90</span>
                        <span className="user-data">average comments: 10</span>
                    </div>
                    <div className="user-subsection">
                        <span className="user-data">total views: 9873</span>
                        <span className="user-data">total likes: 900</span>
                        <span className="user-data">total comments: 45</span>
                    </div>
            </div>
        </Fragment>
    )
}

export default User;