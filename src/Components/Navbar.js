import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar-list">
        <li>
          <NavLink to="/home" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected">About</NavLink>
        </li>
        <li>
          <NavLink to="/info" activeClassName="selected">Info</NavLink>
        </li>
        <li>
          <NavLink to="/credits" activeClassName="selected">Credits</NavLink>
        </li>
        <li>
          <NavLink to="/topics" activeClassName="selected">Topics</NavLink>
        </li>
      </ul>
    </div>
  );
}
