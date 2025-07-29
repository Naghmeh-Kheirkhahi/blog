
import React, { useContext } from "react";
import "./UserPost.css";
import UserPanelNav from "../UserPanelNav";
import BlogPost from "../../../Assets/Images/blogPost.png";
import { PostContext } from "../../../Context/PostContext";


function PostPreview() {

    const { post } = useContext(PostContext);


    return (
        <>
            <div className='main-page'>
                <div className="row">
                    <div className="col-5 col-md-4 col-lg-3">
                        <UserPanelNav />
                    </div>

                    <div className="col-7 col-md-8 col-lg-9">
                        <div className="main-container">
                            <h1>My Preview Post</h1>

                            <div className="post-preview">
                                <div>
                                    <img src={post.image || BlogPost} alt="blog post" />
                                </div>

                                <div className="pt-3 pt-lg-4">
                                    <div className="post-pre-info">
                                        <p className="post-pre-category">{post.category || 'Category'}</p>
                                        <p className="post-pre-author"><span>By</span> {post.author || 'Author'}</p>
                                    </div>

                                    <h3>{post.title || 'Title'}</h3>

                                    <p className="post-pre-description">{post.description || 'Description...'}</p>

                                    <div className="post-pre-date">
                                        <p><i class="fa fa-calendar"></i> {post.date || 'Date'}</p>
                                        <p><i class="fa fa-clock-o"></i> {post.readTime || '?'} Min Read Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostPreview;