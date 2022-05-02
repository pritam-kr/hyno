import React, { useState } from "react";
import "./style.css";
import * as FaIcons from "react-icons/fa";

const images = [
  "https://res.cloudinary.com/dhqxln7zi/image/upload/v1651507207/what-are-the-different-types-of-land-use-zones_ht4xdo.jpg",
  "https://res.cloudinary.com/dhqxln7zi/image/upload/v1651507206/istockphoto-182187138-612x612_rqzyzd.jpg",
  "https://res.cloudinary.com/dhqxln7zi/image/upload/v1651507205/agricultural_land-for-sale-thol-Ahmedabad-plot_view_zdd8y8.webp",
  "https://res.cloudinary.com/dhqxln7zi/image/upload/v1651507205/download_xac4gw.jpg",
  "https://res.cloudinary.com/dhqxln7zi/image/upload/v1651502535/photo-1564767609342-620cb19b2357_c5kzqp.jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const [image, setImages] = useState(images[index]);

  const imageNextHandler = () => {
    setIndex(index + 1);
    if (index >= images.length - 1) {
      setIndex(0);
    }
    setImages(images[index]);
  };


  return (
    <section className="hero-section">
      <div className="section-wrapper hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-heading">
            Single Platform for <br /> land services
          </h1>
          <p className="text-md">
            Creating a single digital platform on land connecting all the
            stakeholders around the world providing all land services pertaining
            to the land across the country at one’s doorsteps anywhere on the
            globe
          </p>
          <button className="btn btn-register">Register with us</button>
        </div>
        <div className="hero-image-slider">
          <img src={image} alt="" />

          <div className="btn-container">
            <button onClick={() => imageNextHandler()}>
              <FaIcons.FaArrowRight />
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
