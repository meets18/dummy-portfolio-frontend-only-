import React from "react";
import "./contact.css";
import emailimg from "./../../assests/email.png";
import githubimg from "./../../assests/github.png";
import linkedinimg from "./../../assests/linkedin.png";

const Contact = () => {
    return (
        <section className="contact">
            <div id="contact">
                <h1 className="contacttitle">Contact Me</h1>
                <span className="contactdesc">You can reach out to me here...</span>
                <form className="contactform">
                    <input type="text" placeholder="Name" className="name" />
                    <input type="email" placeholder="Email" className="email" />
                    <textarea rows="5" placeholder="Message" className="message"></textarea>
                    <button type="submit" className="submit">Submit</button>
                    <div className="social">
                        <h2 className="social-title">Valuable Links</h2>
                        <div className="social-links">
                            <a href="mailto:smeet3590@gmail.com">
                                <img src={emailimg} alt="Email" className="socialimg" />
                            </a>
                            <a href="https://github.com/meets18" target="_blank" rel="noopener noreferrer">
                                <img src={githubimg} alt="GitHub" className="socialimg" />
                            </a>
                            <a href="https://www.linkedin.com/in/meet-sharma-45ba60291/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinimg} alt="LinkedIn" className="socialimg" />
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
