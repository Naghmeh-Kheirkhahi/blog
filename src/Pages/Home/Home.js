

import React from "react";
import './Home.css';



function Home() {
  return (
    <>
      <div className="home">

        <div>
          <h1>Crystal Blog</h1>

          <h5>All Solution In One</h5>

          <h3>Unlimited</h3>
          <h4>Advice, Information, Resource</h4>
        </div>

        <div className="postCategories">
          <button>Category 1</button>
          <button>Category 2</button>
          <button>Category 3</button>
          <br />
          <button>Category 4</button>
          <button>Category 5</button>
          <button>Category 6</button>
        </div>

      </div>


      <div className="popular-posts">
        <div className="d-flex justify-content-between">
          <h2>Most Popular Posts</h2>

          <div>
            <i class='fas fa-arrow-left'></i>
            <i class='fas fa-arrow-right'></i>
          </div>
        </div>

        <div className="posts">Posts*****?????</div>
      </div>


      <div className="recent-posts">
        <div className="d-flex justify-content-between">
          <h2>Recent Posts</h2>

          <div>
            <a href="">
              <p>See more</p>
              <i class='fas fa-arrow-right'></i>
            </a>
          </div>
        </div>

        <div className="posts">Posts*****?????</div>
      </div>


      <div className="newsletter">
        <h2>Subscribe to Newsletter</h2>

        <p>Subscribe to our newsletter and get our newest updates right on your mailbox.</p>

        <form>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe Now</button>
        </form>
      </div>
    </>
  );
}

export default Home;
