import React from "react";
import styled from "styled-components";

import BaseIcon from "../Common";
import { ButtonWrapper } from "../Common";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

const MainMenuToggle = () => {
  let isMobile = useMediaQuery("(max-width:768px");

  return (
    <Button>
      <ContentWrapper>
        <BaseIcon icon={<GiHamburgerMenu />} size="1.2em" color="white" />
        <ButtonText>All</ButtonText>
      </ContentWrapper>
    </Button>
  );
};

export default MainMenuToggle;

const Button = styled(ButtonWrapper)`
  margin: 0;
  border: 2px solid var(--clr-secondary);
`;

const ContentWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const ButtonText = styled.span`
  margin-left: 4px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
`;
