import React from "react";
import "./style.css";
import * as FaIcons from "react-icons/fa";
import {Contact} from "../../component/index"

const GetInTouch = () => {
  return (
    <section className="section getin-touch-section">
      <header className="section-heading">Get in Touch</header>
      <p className="text-md" style={{ textAlign: "center" }}>
        Contact us for a quote, help us o join the team.
      </p>

      <div className="contact-info-wrapper">
        <div className="contact-box location">
          <FaIcons.FaLocationArrow className="icons contact-icon" />
          <p className="text-sm">1-24 Vihan Nagar, Alwal</p>
        </div>
        <div className="contact-box mobile">
          <FaIcons.FaMobile className="icons contact-icon" />
          <p className="text-sm">+91 45689 89012</p>
        </div>
        <div className="contact-box email">
          <FaIcons.FaEnvelope className="icons contact-icon" />
          <p className="text-sm">info@landocs.com</p>
        </div>
      </div>

      {/*---Contact Form---*/}
      <Contact />
    </section>
  );
};

export { GetInTouch };
