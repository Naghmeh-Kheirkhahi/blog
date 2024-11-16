

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PostItem from "./PostItem";
import './Posts.css';



function PostList() {

    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);

                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);





    return (
        <>
            <div className="post-list-container">
                <h1>Crystal Blog</h1>

                <div className="row">
                    {posts.map(item => (
                        <PostItem 
                    
                        title = {item.title}
                        body = {item.body}

                        showPost = {() => {
                            navigate(`/post/${item.id}`);
                        }}


                    />
                    ))}
                    
                </div>

            </div>
        </>
    )
}


export default PostList;