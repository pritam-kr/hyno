import React from 'react'

const Values = () => {
  return (
    <section className="section about-section">
    <div className="section-wrapper about-wrapper ">
      <div className="section-left">
        <h2 className="heading">Our Values</h2>
        <ul>
          <li className="text-md">
          We provide efficient services maintaining confidentiality{" "}
          </li>
          <li className="text-md">
          We give highest priority to the needs and requirements of the users
          </li>{" "}
          <li className="text-md">
          Minimizing time, reducing cost and improving quality are our key concerns
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
  )
}

export   {Values}