import React from "react";
import styled from "styled-components";
import { LinkWrapper } from "../Common";

const navList = [
  { path: "/", label: "Todays Deal" },
  { path: "/", label: "Customer Service" },
  { path: "/", label: "Registry" },
  { path: "/", label: "Gift Cards" },
  { path: "/", label: "Sell" },
  { path: "/", label: "Extra Link Here" },
];

const Nav = () => {
  const NavLinks = navList.map((item) => {
    return (
      // <NavItem key={item.label}>
      <Link key={item.path} to={item.path}>
        {item.label}
      </Link>
      // </NavItem>
    );
  });

  return <Container>{NavLinks}</Container>;
};

export default Nav;

const Container = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
`;

const Link = styled(LinkWrapper)`
  white-space: nowrap;
  border-color: var(--clr-secondary);
  // For Li Tag to contain the height of this element(a tag)
  height: 12px;
  font-size: 14px;
  line-height: 1em;
  margin: 0;

  padding: 12px 9px;
  box-sizing: content-box;
`;
