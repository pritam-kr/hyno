import React from 'react'

const WhyOnly = () => {
  return (
    <section className="section about-section">
      <div className="section-wrapper about-wrapper ">
        <div className="section-right">
          <img
            className="responsive-images"
            src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651476283/1_psu3xv.svg"
            alt=""
          />
        </div>
        <div className="section-left">
          <h2 className="heading">Why only LandDocs?</h2>
          <ul>
            <li className="text-md">
            Invest in land and leave the rest to LandDocs for trusted management{" "}
            </li>
            <li className="text-md">
            Highly qualified experts in all land related fields with decades of experience
            </li>{" "}
            <li className="text-md">
            Creating cadre of competent land service providers
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export  { WhyOnly}