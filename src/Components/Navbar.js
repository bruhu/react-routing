import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar-list">
        <li>
          <NavLink to="/home" activeClassName="selected-navbar">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected-navbar">About</NavLink>
        </li>
        <li>
          <NavLink to="/info" activeClassName="selected-navbar">Info</NavLink>
        </li>
        <li>
          <NavLink to="/credits" activeClassName="selected-navbar">Credits</NavLink>
        </li>
        <li>
          <NavLink to="/topics" activeClassName="selected-navbar">Topics</NavLink>
        </li>
      </ul>
    </div>
  );
}
