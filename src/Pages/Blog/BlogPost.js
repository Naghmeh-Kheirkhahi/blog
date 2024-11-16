
import {React, useState} from "react";
import './Blog.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";



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
      <div>
        <h1>Blog Post</h1>

        <div className="singlePost">

          <img src='https://via.placeholder.com/150'/>
          <h3>{post.title}</h3>
          <p>Author</p>
          <p>Category</p>
          <p>{post.body}</p>
        </div>
      </div>
    </>
  );
}

export default BlogPost;