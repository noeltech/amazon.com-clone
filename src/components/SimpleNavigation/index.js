import React from "react";
// import { Link } from "react-router-dom";
import { StyledLink } from "../Links";

function SimpleNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <StyledLink to="/" label="HOME" />
          </li>
          <li>
            <StyledLink to="login" label="LOGIN" />
          </li>
          <li>
            <StyledLink to="sign-up" label="SIGN-UP" />
          </li>
          <li>
            <StyledLink to="map" label="MAP" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SimpleNav;
