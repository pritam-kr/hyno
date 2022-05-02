import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-box company-info">
        <h2 className="text-xl">
            <span className="land">Land</span>
            <span className="docs">Docs</span>
          </h2>
          <p className="text-sm">Plot no. 1-24 Vihan Nagar, Alwal Hyderabad - Telangana Sate 500010</p>
        </div>
        <div className="footer-box">
              <ul>
                <li>Home</li>
                <li>Knowledge Center</li>
                <li>Our Mission</li>
                <li>FAQ</li>
              </ul>
        </div>
        <div className="footer-box">
              <ul>
                <li>Value Statement</li>
                <li>Gallery</li>
                <li>Ask for a legal Expert</li>
              </ul>
        </div>
        <div className="footer-box">
              <ul>
                <li>Document</li>
                <li>FAQs</li>
                <li>Registration</li>
              </ul>
        </div>
      </div>
      <p className="text-sm copyright-text">&#169; LandDocs, India - Hyno Technologies</p>
    </footer>
  );
};

export { Footer };
