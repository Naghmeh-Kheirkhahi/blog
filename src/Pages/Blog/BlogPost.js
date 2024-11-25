
import {React, useState} from "react";
import './Blog.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import SinglePost from "../../Assets/Images/blogPost.png";




function BlogPost() {


  const { postId } = useParams();
  const [post, setPost] = useState({});


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])







  return (
    <>
      <div className="singlePost-container">
        <h1>Blog Post {post.id}</h1>

        <div className="singlePost-info">
          <div className="singlePost-first-info">
            <p><span>By</span> Author</p>
            <p><i class="fa fa-calendar"></i> 20 April, 2024</p>
            <p><i class="fa fa-clock-o"></i> 10 Min Read</p>
          </div>

          <h3>{post.title}</h3>

          <p className="singlePost-category">Category</p>

          <img src={SinglePost} />
          
          <p className="singlePost-description">{post.body}</p>
        </div>
      </div>
    </>
  );
}

export default BlogPost;