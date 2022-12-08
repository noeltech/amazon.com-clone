import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavItem = ({ to, title, description }) => {
  return (
    <LinkWrapper to={to}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </LinkWrapper>
  );
};

export default NavItem;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover > span {
    text-decoration: underline;
  }
`;

const Title = styled.span`
  font-size: 12px;
  color: #ddd;
`;
const Description = styled.span`
  font-size: 11px;
  color: #999;
`;
