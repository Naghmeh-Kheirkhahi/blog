

import React, { useState, useEffect } from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostItem from "../../Components/Posts/PostItem";
import Newsletter from "../../Components/Newsletter/Newsletter";



function Home() {


  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  const scrollLeftPopular = () => {
    document.querySelector('.popularPosts .row').scrollBy({
      left: -700,
      behavior: 'smooth'
    });
  };

  const scrollRightPopular = () => {
    document.querySelector('.popularPosts .row').scrollBy({
      left: 700,
      behavior: 'smooth'
    });
  };


  const scrollLeftRecent = () => {
    document.querySelector('.recentPosts .row').scrollBy({
      left: -700,
      behavior: 'smooth'
    });
  };

  const scrollRightRecent = () => {
    document.querySelector('.recentPosts .row').scrollBy({
      left: 700,
      behavior: 'smooth'
    });
  };





  return (
    <>
      <div className="home">
        <div>
          <h1>Crystal Blog</h1>

          <h5>All Solution In One</h5>

          <h3>Unlimited</h3>
          <h4>Advice, Information, Resource</h4>
        </div>

        <Link to="/Login">Login</Link>
      </div>


      <div className="popular-posts">
        <div className="d-flex justify-content-between">
          <h2>Most Popular Posts</h2>

          <div className="post-arrows">
            <i className='fas fa-arrow-left' onClick={scrollLeftPopular}></i>
            <i className='fas fa-arrow-right' onClick={scrollRightPopular}></i>
          </div>
        </div>

        <div className="popularPosts">
          <div className="row">
            {
              posts.filter(post => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].includes(post.id))
                .map(post => (
                  <PostItem
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    showPost={() => {
                      navigate(`/post/${post.id}`);
                    }}
                  />
                ))}
          </div>
        </div>
      </div>


      <div className="recent-posts">
        <div className="d-flex justify-content-between">
          <h2>Recent Posts</h2>

          <div className="post-arrows">
            <i className='fas fa-arrow-left' onClick={scrollLeftRecent}></i>
            <i className='fas fa-arrow-right' onClick={scrollRightRecent}></i>
          </div>
        </div>

        <div className="recentPosts">
          <div className="row">
            {
              posts.filter(post => [91, 92, 93, 94, 95, 96, 97, 98, 99, 100].includes(post.id))
                .map(post => (
                  <PostItem
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    showPost={() => {
                      navigate(`/post/${post.id}`);
                    }}
                  />
                ))}
          </div>
        </div>
      </div>

      <div className="newsletter-part">
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
