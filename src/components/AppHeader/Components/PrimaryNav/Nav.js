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
      <NavItem key={item.label}>
        <Link to={item.path}>{item.label}</Link>
      </NavItem>
    );
  });

  return (
    <Container>
      <ContentWrapper>{NavLinks}</ContentWrapper>
    </Container>
  );
};

export default Nav;

const Container = styled.nav``;

const ContentWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li``;

const Link = styled(LinkWrapper)`
  white-space: nowrap;
  border-color: var(--clr-secondary);
  // For Li Tag to contain the height of this element(a tag)
  display: inline-block;
`;
