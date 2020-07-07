import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-div">
      <div className="div-1">
        <i class="fa-2x fa fa-wordpress"></i>
        <span className = "div-1-right">
          <i class="fa-1.99x fa fa-comments"></i>
          <a>Register</a>
          <a>Log in</a>
          <i class="fa-1.99x fa fa-search"></i>
        </span>
      </div>

      <div className="div-2">
        <span className="div-2-img">
        <img src = {require('./wporg-logo.svg')} />
        </span>
        <span className = "div-2-search">
        <input type="text" placeholder="Search WordPress.org" />
        <i class="fa-1.99x fa fa-search"></i>
        </span>
      </div>



      <div className="div-3">
        <span className = "div-3-a-tag">
        <NavLink exact activeClassName ="active" to ="/">Showcase</NavLink>
        <NavLink exact activeClassName ="active" to ="/themes">Themes</NavLink>
        <NavLink exact activeClassName ="active" to ="/plugins">Plugins</NavLink>
        <NavLink exact activeClassName ="active" to ="/mobile">Mobile</NavLink>
        <NavLink exact activeClassName ="active" to ="/support">Support</NavLink>
        <NavLink exact activeClassName ="active" to ="/get-involved">Get Involved</NavLink>
        <a href = "#about">About</a>
        <a href = "#blog">Blog</a>
        <NavLink exact activeClassName ="active" to ="/hosting">Hosting</NavLink>
        
          
          </span>
          <span className = "div-3-btn">
              <button href = "#getting-wordpress">Get WordPress</button>
          </span>
      </div>


    </div>
  );
};

export default Navbar;
