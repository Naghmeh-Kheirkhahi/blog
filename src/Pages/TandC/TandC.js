
import React from "react";
import './TandC.css'; // TandC means Terms and Conditions
import { Link } from "react-router-dom";


function TandC() {
    return (
        <>
            <div className="main-page-TandC">
                <div className="TandC">
                    <h1>Terms and Conditions</h1>

                    <h5>Welcome to Crystal Blog! These Terms and Conditions outline the rules and regulations for the use of our website located at <Link to={'/'} style={{ color: 'rgb(99 47 190)' }}><b>Crystal-Blog.com</b></Link>. By accessing this blog, you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our blog.</h5>

                    <br />

                    <h3>1. Acceptance of Terms</h3> <p>By accessing and using Crystal Blog, you accept and agree to be bound by these Terms and Conditions. We reserve the right to modify these terms at any time, and your continued use of the blog constitutes acceptance of the updated terms.</p>

                    <br />

                    <h3>2. Use of Content</h3> <p>All content provided on Crystal Blog, including text, images, and videos, is for informational purposes only. You may not reproduce, distribute, or republish any content without our prior written consent.</p>

                    <br />

                    <h3>3. User Responsibilities</h3> <p>You are responsible for your own conduct while using the blog and for any content you post. You agree not to post any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</p>

                    <br />

                    <h3>4. Intellectual Property</h3> <p>All intellectual property rights in the content of Crystal Blog are owned by us or our licensors. This includes, but is not limited to, copyright, trademarks, and patents. You may not use any of our intellectual property without express permission.</p>

                    <br />

                    <h3>5. Links to Other Websites</h3> <p>Our blog may contain links to third-party websites that are not owned or controlled by Crystal Blog. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites. We recommend reviewing the terms and conditions and privacy policies of any third-party sites you visit.</p>

                    <br />

                    <h3>6. Limitation of Liability</h3> <p>In no event shall Crystal Blog, nor its owners, employees, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the blog or any content therein.</p>

                    <br />

                    <h3>7. Governing Law</h3> <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of Germany. Any disputes arising from these terms shall be resolved in the courts of German Jurisdiction.</p>

                    <br />

                    <h3>8. Changes to Terms</h3> <p>We reserve the right to update or change these Terms and Conditions at any time. We will notify you of any changes by posting the new terms on this page. It is your responsibility to review these terms periodically for any changes.</p>

                    <br />

                    <h3>9. Contact Information</h3> <p>If you have any questions about these Terms and Conditions, please contact us by refering to the <Link to={'/Contact'}><b>contact form</b></Link>.</p>

                    <br />

                    <h3>10. Acknowledgement</h3> <p>These Terms and Conditions have been created with the help of the <a href="https://www.termsandconditionsgenerator.com"><b>Terms and Conditions Generator</b></a>.</p>

                    <br />
                    <h5>By using Crystal Blog, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</h5>
                </div>
            </div>
        </>
    )
}

export default TandC;