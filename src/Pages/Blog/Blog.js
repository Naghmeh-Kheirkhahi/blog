
import React from "react";
import './Blog.css';
import PostList from "./../../Components/Posts/PostList";


function Blog() {
  return (
    <>
      <div className="main-blog-page">
        <div className="blog-container">
          <h1>Crystal Blog Posts</h1>

          <PostList />
        </div>
      </div>
    </>
  );
}

export default Blog;