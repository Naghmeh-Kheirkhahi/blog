
import React from "react";
import './Blog.css';
import PostList from "./../../Components/Posts/PostList";


function Blog() {
  return (
    <>
      <div>
        <h1>Blog</h1>

        <div>
          <PostList />
        </div>
      </div>
    </>
  );
}

export default Blog;