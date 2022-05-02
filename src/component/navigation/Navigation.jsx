import React from "react";
import "./style.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="logo">
          <h2 className="text-xl">
            <span className="land">Land</span>
            <span className="docs">Docs</span>
          </h2>
        </div>
        <div className="nav-menus">
          <ul className="nav-link-wrapper">
            <li className="nav-links text-md">Home</li>
            <li className="nav-links text-md">Knowledge Center</li>
            <li className="nav-links text-md">FAQ</li>
            <li className="nav-links text-md">Gallery</li>
            <li className="nav-links text-md">
              <button className="btn btn-create-account text-md">Create Account</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
