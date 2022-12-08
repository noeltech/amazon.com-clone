import React, { useInsertionEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LinkWrapper, MobileLinkWrapper } from "./Components/Common";

const AppLogo = ({ isMobile }) => {
  if (isMobile)
    return (
      <MobileLinkWrapper to={"/"}>
        <Logo />
      </MobileLinkWrapper>
    );
  else {
    return (
      <LinkWrapper to={"/"}>
        <Logo />
      </LinkWrapper>
    );
  }
};

export default AppLogo;

const Logo = styled.span`
  display: inline-block;
  content: "";
  width: 90px;
  height: 30px;
  background-image: url(${logo});
  background-size: 100%;
`;
//
