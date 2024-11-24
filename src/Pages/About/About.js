
import React from "react";
import './About.css';
import person1 from './../../Assets/Images/team-1.jpg';
import person2 from './../../Assets/Images/team-2.jpg';
import person3 from './../../Assets/Images/team-3.jpg';
import person4 from './../../Assets/Images/team-4.jpg';
import person5 from './../../Assets/Images/team-5.jpg';
import person6 from './../../Assets/Images/team-6.jpg';
import person7 from './../../Assets/Images/team-7.jpg';
import person8 from './../../Assets/Images/team-8.jpg';
import crystal from './../../Assets/Images/crystal.JPG';



function About() {
  return (
    <>
      <div className="about-us">
        <br /><br /><br /><br /><br /><br /><br />

        <h1>About US</h1>

        <p>Welcome to <b>Crystal Blog</b>, a dedicated platform for those who are passionate about learning, growth, and the pursuit of knowledge. In an ever-evolving world, we understand the importance of staying informed and equipped with the right skills. Our blog is designed to be a comprehensive resource for training, educational, and scientific materials, catering to a diverse audience that includes students, educators, professionals, and lifelong learners.</p>

        <br /><br />

        <h2>Our Mission</h2>

        <p>At <b>Crystal Blog</b>, our mission is to empower individuals by providing access to high-quality educational resources and insights. We believe that education is a lifelong journey, and we are committed to helping our readers navigate this journey with confidence and clarity. Our goal is to foster a community of learners who are eager to explore new ideas, enhance their skills, and achieve their personal and professional aspirations.</p>

        <br /><br />

        <h2>What We Offer</h2>

        <p>Our blog features a wide array of content that includes:</p>

        <ul>
          <li><i class="fa fa-circle"></i> <b> In-Depth Articles:</b> We publish well-researched articles on various topics related to training and education, offering valuable insights and practical advice to help you in your learning endeavors.</li>

          <li><i class="fa fa-circle"></i> <b> Resource Reviews:</b> Our team carefully reviews books, magazines, and other educational materials, providing honest assessments to help you choose the best resources for your needs.</li>

          <li><i class="fa fa-circle"></i> <b> Course Recommendations:</b> Whether you're looking for online courses or offline workshops, we curate a list of reputable programs that can enhance your skills and knowledge in a variety of fields.</li>

          <li><i class="fa fa-circle"></i> <b> Expert Interviews:</b> We connect with thought leaders and experts in education and training to bring you exclusive interviews that share their experiences, tips, and perspectives on the future of learning.</li>

          <li><i class="fa fa-circle"></i> <b> Community Engagement:</b> We believe in the power of collaboration and discussion. Our blog encourages readers to share their thoughts, experiences, and resources, fostering a supportive community of learners.</li>
        </ul>

        <br /><br />

        <h2>Our Vision</h2>

        <p>We envision a world where education is accessible to everyone, regardless of their background or circumstances. We aim to break down barriers to learning and provide a platform where individuals can find the resources they need to succeed. By promoting a culture of continuous learning and curiosity, we hope to inspire our readers to pursue their passions and make a positive impact in their communities.</p>

        <br /><br />


        <h2>Join Us on This Journey</h2>

        <p>We invite you to explore our blog, engage with our content, and become a part of our growing community. Whether you're seeking to advance your career, explore new subjects, or simply satisfy your curiosity, <b>Crystal Blog</b> is here to support you every step of the way.</p>

        <p>Thank you for visiting <b>Crystal Blog</b>. Together, let's embark on a journey of knowledge, discovery, and personal growth!</p>


        <br /><br /><br /><br /><br />
        <hr />

        <div className="about-motto">
          <p>You Can Read And Write With <b>Crystal</b>.</p>
          <img src={crystal}/>
        </div>

        <hr />


        <div className="about-team">
          <h2>Meet Our Team</h2>
          <h3>Leadership & Experienced Team</h3>

          <div className="row mb-5">
            <div class="teamMember col-3">
              <img src={person1}/>
              <div class="memberName">
                <p>Emily Rose Johnson</p>
              </div>
            </div>

            <div class="teamMember col-3">
              <img src={person2}/>
              <div class="memberName">
                <p>Jonathan Michael Smith</p>
              </div>
            </div>

            <div class="teamMember col-3">
              <img src={person3}/>
              <div class="memberName">
                <p>Sophia Marie Davis</p>
              </div>
            </div>

            <div class="teamMember col-3">
              <img src={person4}/>
              <div class="memberName">
                <p>Olivia Grace Thompson</p>
              </div>
            </div>
          </div>


          <div className="row">
            <div class="teamMember col-3">
              <img src={person5}/>
              <div class="memberName">
                <p>Isabella Claire Martinez</p>
              </div>
            </div>

            <div class="teamMember col-3">
              <img src={person6}/>
              <div class="memberName">
                <p>Mia Elizabeth Wilson</p>
              </div>
            </div>

            <div class="teamMember col-3">
              <img src={person7}/>
              <div class="memberName">
                <p>Ava Charlotte Anderson</p>
              </div>
            </div>

            <div class="teamMember col-3">
              <img src={person8}/>
              <div class="memberName">
                <p>Harper Jane Robinson</p>
              </div>
            </div>
          </div>
        </div>

        <hr />


        <div className="about-newsletter">
          <h2>Subscribe to Newsletter</h2>

          <p>Subscribe to our newsletter and get our newest updates right on your mailbox.</p>

          <form>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe Now</button>
          </form>
        </div>

      </div>
    </>
  );
}

export default About;