import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
    
      <div className="footer1">
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Hosting</a>
          </li>
          <li>
            <a>Donate</a>
          </li>
        </ul>
      </div>
      <div className="footer2">
        <ul>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Developers</a>
          </li>
          <li>
            <a>Get Involved</a>
          </li>
        </ul>
      </div>
      <div className="footer3">
        <ul>
          <li>
            {" "}
            <a>Showcase</a>
          </li>
          <li>
            <a>Plugins</a>
          </li>
          <li>
            <a>Themes</a>
          </li>
        </ul>
      </div>
      <div className="footer4">
        <ul>
          <li>
            <a>WordCamp</a>
          </li>
          <li>
            <a>WordPress.TV</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Public Code</a>
          </li>
        </ul>
      </div>
      <div className="footer5">
        <ul>
          <li>
            {" "}
            <a>WordPress.com</a>
          </li>
          <li>
            {" "}
            <a>Matt</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Public Code</a>
          </li>
        </ul>
      </div>
      <div className="footer6">
        <ul>
          <li>
            {" "}
            <a>@WordPress</a>
          </li>

          <li>
            <a>WordPress</a>
          </li>
        </ul>
      </div>
     
      
    </div>
  );
};

export default Footer;
