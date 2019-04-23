import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Info</li>
        <li>Credits</li>
      </ul>
    </div>
  );
}
