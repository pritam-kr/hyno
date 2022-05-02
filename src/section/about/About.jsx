import React from "react";
import "./style.css";
 

const About = () => {
  return (
    <section className="section about-section" style={{paddingBottom: "6rem"}}>
      <div className="section-wrapper about-wrapper ">
        <div className="section-left">
          <h2 className="heading">About LandDocs</h2>
          <ul>
            <li className="text-md">
              All land related service available at your doorsteps on a single
              click or call{" "}
            </li>
            <li className="text-md">
              Monitoring your land rights, records and boundaries from anywhere
              in the world
            </li>{" "}
            <li className="text-md">
              All land services needs pertaining to land in India - from
              anywhere in the world
            </li>
          </ul>
        </div>
        <div className="section-right">
          <img
            className="responsive-images"
            src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651476283/1_psu3xv.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export { About };
