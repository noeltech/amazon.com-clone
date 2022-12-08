import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import brandLogo from "../../../../assets/amazon_logo.png";

const FooterLogo = () => {
  return (
    <LogoLink to="/">
      <IconLogo brandLogo />
    </LogoLink>
  );
};

export default FooterLogo;

const LogoLink = styled(Link)`
  display: flex;
`;

const IconLogo = styled.span`
  display: inline-block;
  width: 90px;
  height: 30px;
  background-image: url(${brandLogo});
  background-repeat: no-repeat;
  background-size: contain;
`;
