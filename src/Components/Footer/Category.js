
import React, { useState, useEffect, useContext } from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostItem from "../Posts/PostItem";



function Category() {

    const navigate = useNavigate();
    const { category } = useParams();
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
                setFilteredPosts(response.data);
                console.log(response.data);
            })
            .catch(err => {
                console.error("Error fetching posts:", err);
            });
    }, []);



    useEffect(() => {
        const filterPosts = () => {
            switch (category) {
                case 'Category1':
                    return posts.filter(post => post.id <= 16);
                case 'Category2':
                    return posts.filter(post => post.id > 16 && post.id <= 32);
                case 'Category3':
                    return posts.filter(post => post.id > 32 && post.id <= 48);
                case 'Category4':
                    return posts.filter(post => post.id > 48 && post.id <= 64);
                case 'Category5':
                    return posts.filter(post => post.id > 64 && post.id <= 80);
                case 'Category6':
                    return posts.filter(post => post.id > 80 && post.id <= 100);
                default:
                    return posts;
            }
        };

        setFilteredPosts(filterPosts());
    } , [category, posts]);






    return (
        <>
            <div className="categoryPage">
                <h1>{category}</h1>

                <div className="row">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <PostItem
                                key={post.id}
                                title={post.title}
                                body={post.body}
                                showPost={() => {
                                    navigate(`/post/${post.id}`);
                                }}
                            />
                        ))
                    ) : (
                        <p>No posts found for this category.</p>
                    )}
                </div>

            </div>
        </>
    );
}

export default Category;