import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const onClickHandle = () => {
    window.location = "/";
  };
  return (
    <nav>
      <ul>
        <li onClick={onClickHandle}>Our Stories</li>
        <span>|</span>
        <Link to="/create">
          <li>Create Story</li>
        </Link>
      </ul>
    </nav>
  );
}
