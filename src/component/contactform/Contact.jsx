import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact-form">
      <form className="form">

        <div className="input-row">
          <input className="input" placeholder="First Name" />
          <input className="input" placeholder="Last Name" />
        </div>

        <div className="input-row">
          <input className="input" placeholder="Email Address" />
          <input className="input" placeholder="Mobile No" />
        </div>

        <textarea className="input textarea" placeholder="Write Message"></textarea>

        <button className="btn btn-form-submit">Submit</button>
      </form>
    </div>
  );
};

export  { Contact};
