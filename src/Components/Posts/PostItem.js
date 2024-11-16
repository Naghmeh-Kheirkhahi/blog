
import React from "react";
import './Posts.css';



function PostItem(props) {
    return (
        <>
            <div className="col-4 post-container" onClick={props.showPost}>
                <div className="post">

                    <div>
                        <img src='https://via.placeholder.com/150' alt="..." />
                    </div>
                    
                    <div className="post-info">
                        <div className="post-first-info">
                            <p className="post-category">Category</p>
                            <p className="post-author">By Author</p>
                        </div>

                        <h3>{props.title}</h3>

                        <p className="post-description"> {props.body}
                            {/* {props.body.length > 20 
                                ? `${props.body.substring(0, 20)}...` 
                                : props.body} */}
                        </p>

                        <div className="post-last-info">
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