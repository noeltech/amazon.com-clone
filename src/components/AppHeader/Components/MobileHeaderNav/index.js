import React from "react";
import styled from "styled-components";

import MainMenuToggle from "./MainMenuToggle";
import AppLogo from "../../AppLogo";
import CartNav from "../CartNav";
import SignUpLink from "../SignUpLink/Mobile";

const Index = () => {
  return (
    <HeaderNavContainer>
      <Wrapper>
        <MainMenuToggle />
        <AppLogo isMobile={true} />
      </Wrapper>
      <Wrapper>
        <SignUpLink />
        <CartNav isMobile={true} />
      </Wrapper>
    </HeaderNavContainer>
  );
};

export default Index;

const HeaderNavContainer = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
