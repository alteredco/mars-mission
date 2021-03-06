﻿﻿import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export function Header() {
  return (
    <header className="header" data-testid="header">
      <nav className="navBar">
        <input className="menuButton" type="checkbox" id="menuButton" />
        <label className="menuIcon" htmlFor="menuButton">
          <span className="navIcon" />
        </label>
        <Link to="">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/Images/nasa-logo.png`}
            alt="logo"
          />
        </Link>
        <ul className="menu">
          <li className="navItem">
            <Link className="navLink" to="/curiosity">
              Curiosity
            </Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to="/opportunity">
              Opportunity
            </Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to="/spirit">
              Spirit
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
