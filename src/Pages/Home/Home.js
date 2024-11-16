

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
    </>
  );
}

export default Home;
