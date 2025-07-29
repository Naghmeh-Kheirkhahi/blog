
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserPost.css";
import UserPanelNav from "../UserPanelNav";
import { PostContext } from "../../../Context/PostContext";



function PostInfo() {

    const { post, setPost } = useContext(PostContext);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(post);
        navigate("/UserPanel/PostPreview");
        // Here we can submit and send the post information by Post method to the API already made by the backend developer.
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image' && files.length > 0) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setPost(prevPost => ({
                ...prevPost,
                image: imageUrl
            }));
        } else {
            setPost(prevPost => ({
                ...prevPost,
                [name]: value
            }));
        }
    };


    return (
        <>
            <div className='main-page'>
                <div className="row">
                    <div className="col-5 col-md-4 col-lg-3">
                        <UserPanelNav />
                    </div>

                    <div className="col-7 col-md-8 col-lg-9">
                        <div className="main-container">
                            <h1>My Post Information</h1>

                            <p className="give-data">Please enter your post information!</p>

                            <form className="postInfo-form" onSubmit={handleSubmit}>

                                <label for="image">Image</label>
                                <input type="file" className="ps-0" name="image" onChange={handleChange} />

                                <label for="title">Title</label>
                                <input type="text" name="title" value={post.title} placeholder="About the Cities of Germany" onChange={handleChange} />

                                <label for="category">Category</label>
                                <input type="text" name="category" value={post.category} placeholder="Tourism" onChange={handleChange} />

                                <label for="author">Author</label>
                                <input type="text" name="author" value={post.author} placeholder="Naghmeh" onChange={handleChange} />

                                <label for="description">Description</label>
                                <textarea type="text" name="description" value={post.description} placeholder="Germany includes many cities..." onChange={handleChange} />

                                <label for="date">Date</label>
                                <input type="date" name="date" value={post.date} onChange={handleChange} />

                                <label for="readTime">Read Time in Min </label>
                                <input type="number" name="readTime" value={post.readTime} placeholder="1" onChange={handleChange} />

                                <button type="submit" className="postInfo-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostInfo;