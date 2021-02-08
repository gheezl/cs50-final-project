import React, { Fragment } from "react";

import "./posts.css";

import Post from "../post/post.jsx"

const Posts = () => {
    return(
        <Fragment>
            <div className="posts-page">
                <h2 className="posts-header">okthoidk posts</h2>
                <Post />
            </div>   
        </Fragment>
    )
}

export default Posts;