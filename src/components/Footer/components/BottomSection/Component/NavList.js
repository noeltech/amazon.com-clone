import React from "react";
import styled from "styled-components";

import NavListLine from "./NavListLine";

import { list1 } from "./Data";

const NavList = () => {
  return (
    <Container>
      <NavListLine list={list1} />
      <NavListLine list={list1} />
      <NavListLine list={list1} />
      <NavListLine list={list1} />
    </Container>
  );
};

export default NavList;

const Container = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
  /* padding-inline-start: 0; */
`;
