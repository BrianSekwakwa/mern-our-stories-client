import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Our Stories</li>
        </Link>
        <span>|</span>
        <Link to="/create">
          <li>Create Story</li>
        </Link>
      </ul>
    </nav>
  );
}
