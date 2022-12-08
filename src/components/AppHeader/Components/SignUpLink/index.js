import React, { useState } from "react";
import styled from "styled-components";
import { LinkWrapper as LinkContainer, TopLabel, BottomLabel } from "../Common";
import { Container } from "../../../Layouts";
import SignInFlyout from "../../../NavFlyout/SignInFlyout";

const SignUpLink = ({ onHovered, onMouseLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEntered = () => {
    setIsHovered(true);
    onHovered();
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };
  return (
    <Wrapper
      onMouseEnter={handleOnMouseEntered}
      onMouseLeave={handleOnMouseLeave}
    >
      <LinkContainer to={"/"}>
        <Container column>
          <TopLabel>Hello,Sign in</TopLabel>
          <BottomLabel>Account & List</BottomLabel>
        </Container>
      </LinkContainer>
      <SignInFlyout isOpen={isHovered}></SignInFlyout>
    </Wrapper>
  );
};

export default SignUpLink;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
