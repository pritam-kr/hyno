import React from "react";
import "./style.css"

const Showcase = () => {
  return <section className="section showcase-section">
        <div className="section-wrapper showcase-wrapper">
            <div className="showcase-image">
                <img src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651502535/photo-1564767609342-620cb19b2357_c5kzqp.jpg" alt="" />
            </div>
            <div className="showcase-content">
                <h1 className="text-xl">Happy landowners with secure land rights and <br/>enhanced land value</h1>
            </div>
        </div>
  </section>;
};

export { Showcase };
 