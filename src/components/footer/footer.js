import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                <span className="footer-name">Meet Sharma</span>
                <span className="footer-year">&copy; {new Date().getFullYear()}</span>
            </p>
        </footer>
    );
};

export default Footer;
