
import React from "react";
import './Posts.css';
import BlogPost from "../../Assets/Images/blogPost.png";



function PostItem(props) {
    return (
        <>
            <div className="col-4" onClick={props.showPost}>
                <div className="post-container">
                    <div>
                        <img src={BlogPost} alt="..." />
                    </div>

                    <div className="pt-4">
                        <div className="post-info">
                            <p className="post-category">Category</p>
                            <p className="post-author"><span>By</span> Author</p>
                        </div>

                        <h3>{props.title}</h3>

                        <p className="post-description"> {props.body.slice(0, 40)}{props.body.length > 20 ? '...' : ''}
                        </p>

                        <div className="post-date">
                            <p><i class="fa fa-calendar"></i> 20 April, 2024</p>
                            <p><i class="fa fa-clock-o"></i> 10 Min Read</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PostItem;