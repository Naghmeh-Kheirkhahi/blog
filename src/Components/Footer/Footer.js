
import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import websiteLogo from './../../Assets/Images/blogLogo.png';





function Footer() {

    return (
        <>
            <footer>
                <div className="row">
                    <div className="col-12 col-xl-6">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="footer-logo">
                                    <Link to="/"><img src={websiteLogo} alt="Logo" /></Link>
                                </div>

                                <div className="footer-description">
                                    <p><span>Crystal Blog</span> is a blog about crystals. We love crystals and we want to share our knowledge with you. We hope you enjoy our blog.</p>
                                </div>

                                <div className="social-icons">
                                    <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a>
                                    <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 footer-subscribe">
                                <h3>Subscribe</h3>

                                <div className="subscribe-form">
                                    <input type="text" placeholder="Your Name" />
                                    <br />
                                    <input type="email" placeholder="Your Email Address" />
                                    <br />
                                    <button>Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-6">
                        <div className="row">
                            <div className="col-4 col-sm-4 footer-list">
                                <h3>Main Links</h3>
                                <ul>
                                    <li><Link to="/About">About Us</Link></li>
                                    <li><Link to="/Contact">Contact Us</Link></li>
                                    <li><Link to="/Blog">Blog</Link></li>
                                    <li><Link to="/FAQ">FAQ</Link></li>
                                </ul>
                            </div>

                            <div className="col-4 col-sm-4 footer-list">
                                <h3>Sub Links</h3>
                                <ul>
                                    <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                                    <li><Link to="/CustomerSupport">Customer Support</Link></li>
                                    <li><Link to="/TandC">Terms & Conditions</Link></li>
                                </ul>
                            </div>

                            <div className="col-4 col-sm-4 footer-list">
                                <h3>Categories</h3>
                                <ul>
                                    <li><Link to="/Category/Category1">Category 1</Link></li>
                                    <li><Link to="/Category/Category2">Category 2</Link></li>
                                    <li><Link to="/Category/Category3">Category 3</Link></li>
                                    <li><Link to="/Category/Category4">Category 4</Link></li>
                                    <li><Link to="/Category/Category5">Category 5</Link></li>
                                    <li><Link to="/Category/Category6">Category 6</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Crystal Blog by Naghmeh Kheirkhahi. All Rights Reserved.</p>
                </div>
            </footer>

        </>

    )
}


export default Footer;