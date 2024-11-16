

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PostItem from "./Components/Posts/PostItem";
import './Posts.css';



function PostList() {

    return (
        <>
            <div className="post-list-container">
                <h1>Crystal Blog</h1>

                <div className="row">
                    <PostItem />
                </div>

            </div>
        </>
    )
}


export default PostList;