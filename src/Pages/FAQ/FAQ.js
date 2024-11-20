

import React, { useState } from "react";
import './FAQ.css';



function FAQ() {

    const [openIndex, setOpenIndex] = useState(null); // State to track which answer is open

    const faqs = [
        {
            question: "What types of scientific resources do you provide?",
            answer: "We offer a variety of resources, including articles, research papers, educational videos, and links to online courses across various scientific disciplines such as biology, chemistry, physics, and environmental science. Our goal is to provide valuable resources for students, educators, and science enthusiasts."
        },
        {
            question: "How can I access the online courses mentioned in your blog?",
            answer: "You can access the online courses by clicking on the provided links in our blog posts, which will direct you to the respective course platforms where you can enroll. Some courses may offer free trials or discounts for first-time users."
        },
        {
            question: "Are the resources on your blog free to access?",
            answer: "Many of the resources we share are free, including articles and videos. However, some online courses may require a fee for enrollment or certification. We provide information on the cost and availability of resources in our blog posts."
        },
        {
            question: "How often do you update your blog with new scientific resources?",
            answer: "We strive to update our blog regularly, typically every week, to ensure that our readers have access to the latest scientific resources and information. Be sure to check back frequently for new content!"
        },
        {
            question: "Can I contribute to your blog or suggest resources?",
            answer: "Yes! We welcome contributions and suggestions from our readers. Please contact us through our website's contact form with your ideas or resources you would like to share. We appreciate your input!"
        },
        {
            question: "What is the target audience for your blog",
            answer: "Our blog is designed for students, educators, and anyone interested in science, providing resources that cater to various levels of expertise, from beginners to advanced learners. We aim to make science accessible to all."
        },
        {
            question: "Do you provide resources for specific scientific fields?",
            answer: "Yes, we cover a wide range of scientific fields, including but not limited to biology, chemistry, physics, environmental science, and health sciences. You can find resources tailored to these disciplines on our blog."
        },
        {
            question: "How can I stay updated on new posts and resources?",
            answer: "You can subscribe to our newsletter or follow us on social media to receive updates on new blog posts and resources directly in your inbox or feed. Links to our social media accounts are available on our website."
        },
        {
            question: "Are there any prerequisites for the online courses you recommend?",
            answer: "Some online courses may have prerequisites, such as prior knowledge or specific skills. We provide this information in the course descriptions linked in our blog. Please review the requirements before enrolling."
        },
        {
            question: "Can I find resources for scientific research projects on your blog?",
            answer: "Yes, we offer resources and guides for conducting scientific research projects, including tips on formulating research questions, methodologies, and data analysis techniques. Check out our blog posts for more information."
        }
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the index
    };


    return (
        <>
            <div className="faq-section">
                <h1>Frequently Asked Questions (FAQ)</h1>

                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <h3 className="faq-question" onClick={() => toggleAnswer(index)}>
                            {index + 1}. {faq.question}
                        </h3>
                        {openIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default FAQ;