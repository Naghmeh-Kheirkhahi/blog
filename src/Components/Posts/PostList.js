

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



    const handleCategory = (category) => () => {
        console.log(category);
    }





    return (
        <>
            <div className="post-list">

                <div className="categories">
                    <button onClick={handleCategory('category1')}>Category 1</button>
                    <button onClick={handleCategory('category2')}>Category 2</button>
                    <button onClick={handleCategory('category3')}>Category 3</button>
                    <button onClick={handleCategory('category4')}>Category 4</button>
                    <button onClick={handleCategory('category5')}>Category 5</button>
                    <button onClick={handleCategory('category6')}>Category 6</button>
                </div>


                <div className="row">
                    {
                        posts.map(item => (
                            <PostItem

                                title={item.title}
                                body={item.body}

                                showPost={() => {
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