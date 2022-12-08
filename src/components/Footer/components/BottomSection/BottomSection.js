import React from "react";
import styled from "styled-components";

import NavList from "./Component/NavList";
const BottomSection = () => {
  return (
    <Container>
      <NavList />
    </Container>
  );
};

export default BottomSection;

const Container = styled.section`
  background-color: #131a22;
  padding-top: 30px;
  padding-bottom: 30px;
`;
