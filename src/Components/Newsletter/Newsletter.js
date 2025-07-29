import React from "react";
import './Newsletter.css';




function Newsletter() {
    return (
        <>
            <div className="newsletter-form">
                <h2>Subscribe to Newsletter</h2>

                <p>Subscribe to our newsletter and get our newest updates right on your mail box.</p>

                <form>
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe Now</button>
                </form>
            </div>
        </>
    )
}

export default Newsletter;
