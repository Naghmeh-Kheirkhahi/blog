
import React from "react";
import './Posts.css';



function PostItem() {
    return (
        <>
            <div className="col-4 post-container">
                <div className="post">

                    <div>
                        <img src='' alt="..." />
                    </div>
                    
                    <div className="post-info">
                        <div className="post-first-info">
                            <p className="post-category">Category</p>
                            <p className="post-author">By Author</p>
                        </div>

                        <h3>Title</h3>
                        <p className="post-description"> Description
                            {/* {props.description.length > 20 
                                ? `${props.description.substring(0, 20)}...` 
                                : props.description} */}
                        </p>

                        <div className="post-last-info">
                            <p><i class="fa fa-calendar"></i> Day Month, Year</p>
                            <p><i class="fa fa-clock-o"></i> ? Min Read</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PostItem;