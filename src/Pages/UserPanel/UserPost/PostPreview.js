
import React from "react";
import "./UserPost.css";
import UserPanelNav from "../UserPanelNav";
import BlogPost from "../../../Assets/Images/blogPost.png";


function PostPreview() {

    return (
        <>
            <div className='main-page'>
                <div className="row">
                    <div className="col-3">
                        <UserPanelNav />
                    </div>


                    <div className="col-9">
                        <div className="main-container">
                            <h1>My Preview Post</h1>

                            <div className="post-preview">
                                <div>
                                    <img src={BlogPost} alt="blog post"/>
                                </div>

                                <div className="pt-4">
                                    <div className="post-pre-info">
                                        <p className="post-pre-category">Category</p>
                                        <p className="post-pre-author"><span>By</span> Author</p>
                                    </div>

                                    <h3>Title</h3>

                                    <p className="post-pre-description">Description</p>

                                    <div className="post-pre-date">
                                        <p><i class="fa fa-calendar"></i> Date</p>
                                        <p><i class="fa fa-clock-o"></i> ? Min Read Time</p>
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