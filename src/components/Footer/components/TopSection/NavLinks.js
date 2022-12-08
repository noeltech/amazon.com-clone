import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = ({ title, list }) => {
  const navListComponent = list.map((item) => {
    return (
      <ListItem key={item.name}>
        <NavItem to={item.to}>{item.name}</NavItem>
      </ListItem>
    );
  });

  return (
    <NavLinksContainer>
      <ListTitle>{title}</ListTitle>
      <ListTitle></ListTitle>
      <ListWrapper>{navListComponent}</ListWrapper>
    </NavLinksContainer>
  );
};

export default NavLinks;

const NavLinksContainer = styled.section`
  padding: 0 1rem;
`;

const ListTitle = styled.h3`
  font-size: 1rem;
  color: #ffff;
`;

const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  line-height: 120%;
  margin-bottom: 8px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #dddd;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;
