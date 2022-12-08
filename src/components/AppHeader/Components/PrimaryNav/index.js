import React from "react";
import styled from "styled-components";
import MainMenuToggle from "./MainMenuToggle";

import Nav from "./Nav";

const PrimaryNav = () => {
  return (
    <Container>
      <MainMenuToggle />
      <Nav />
    </Container>
  );
};

export default PrimaryNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--clr-secondary);
  width: min(99%, 1400px);
  margin-inline: auto;
`;
