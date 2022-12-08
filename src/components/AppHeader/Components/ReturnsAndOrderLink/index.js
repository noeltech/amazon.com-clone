import React from "react";
import { LinkWrapper as LinkContainer, TopLabel, BottomLabel } from "../Common";
import { Container } from "../../../Layouts";

const ReturnsAndOrderLink = () => {
  return (
    <LinkContainer to={"/"}>
      <Container column>
        <TopLabel>Returns</TopLabel>
        <BottomLabel>& Order</BottomLabel>
      </Container>
    </LinkContainer>
  );
};

export default ReturnsAndOrderLink;
