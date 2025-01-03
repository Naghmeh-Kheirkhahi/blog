
import React from "react";
import "./UserPost.css";
import UserPanelNav from "../UserPanelNav";



function PostInfo() {

    return (
        <>
            <div className='main-page'>
                <div className="row">
                    <div className="col-3">
                        <UserPanelNav />
                    </div>

                    <div className="col-9">
                        <div className="main-container">
                            <h1>My Post Information</h1>

                            <p className="give-data">Please enter your post information!</p>

                            <form className="postInfo-form">

                                <label for="Image">Image</label>
                                <input type="file" className="ps-0" />

                                <label for="Author">Title</label>
                                <input type="text" />

                                <label for="Category">Category</label>
                                <input type="text" />

                                <label for="Title">Author</label>
                                <input type="text" />

                                <label for="Description">Description</label>
                                <input type="text" />

                                <label for="Date">Date</label>
                                <input type="date" />

                                <label for="ReadTime">Read Time</label>
                                <input type="number" />

                                <button type="submit" className="light-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostInfo;