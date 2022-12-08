import React from "react";
import styled from "styled-components";

import BaseIcon from "../Common";
import { GiHamburgerMenu } from "react-icons/gi";

const MainMenuToggle = () => {
  return (
    <Button>
      <ContentWrapper>
        <BaseIcon icon={<GiHamburgerMenu />} size="1.6em" color="white" />
      </ContentWrapper>
    </Button>
  );
};

export default MainMenuToggle;

const Button = styled.button`
  border: none;
  padding: 0;
  background-color: inherit;
`;

const ContentWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const ButtonText = styled.span`
  margin-left: 4px;
  color: white;
  /* font-size: 1rem; */
  font-weight: 600;
  white-space: nowrap;
`;
