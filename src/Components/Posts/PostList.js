import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostItem from "./PostItem";
import './Posts.css';



function PostList() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
                setFilteredPosts(response.data); // Initialize filteredPosts with all posts
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // Only run once when the component mounts



    useEffect(() => {
        const filterPosts = () => {
            switch (selectedCategory) {
                case 'category1':
                    return posts.filter(item => item.id <= 16);
                case 'category2':
                    return posts.filter(item => item.id > 16 && item.id <= 32);
                case 'category3':
                    return posts.filter(item => item.id > 32 && item.id <= 48);
                case 'category4':
                    return posts.filter(item => item.id > 48 && item.id <= 64);
                case 'category5':
                    return posts.filter(item => item.id > 64 && item.id <= 80);
                case 'category6':
                    return posts.filter(item => item.id > 80 && item.id <= 100);
                default:
                    return posts;
            }
        };

        setFilteredPosts(filterPosts());
    }, [selectedCategory, posts]);




    const handleCategory = (category) => {
        console.log(category);
        setSelectedCategory(category);
    };



    return (
        <>
            <div className="post-list">
                <div className="categories">
                    <button onClick={() => handleCategory('category1')}>Category 1</button>
                    <button onClick={() => handleCategory('category2')}>Category 2</button>
                    <button onClick={() => handleCategory('category3')}>Category 3</button>
                    <button onClick={() => handleCategory('category4')}>Category 4</button>
                    <button onClick={() => handleCategory('category5')}>Category 5</button>
                    <button onClick={() => handleCategory('category6')}>Category 6</button>
                </div>

                <div className="row">
                    {filteredPosts.map(item => (
                        <PostItem
                            key={item.id}
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
    );
}

export default PostList;