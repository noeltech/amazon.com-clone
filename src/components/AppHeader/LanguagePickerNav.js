import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { baseItemStyles } from "../../styles/Header";

import LanguageSelection from "../../components/NavFlyout/LangauageSelection/LanguageSelection";
import { UserPreferedLanguage } from "../../state/UserLangauagePreference";

const LanguagePickerNav = ({ onHovered, onMouseLeave }) => {
  const { preferedLanguage } = useContext(UserPreferedLanguage);
  const [isHovered, setIsHovered] = useState(false);
  const handleOnHovered = () => {
    onHovered();
    setIsHovered(true);
  };
  // const handleOnMouseLeave = () => {
  //   onHovered("");
  // };

  const handleOnClose = () => {
    setTimeout(() => {
      setIsHovered(false);
      onMouseLeave();
    }, 100);
  };
  return (
    <Container onMouseEnter={handleOnHovered} onMouseLeave={handleOnClose}>
      <StyledLink to={"/"}>
        <FlexColumn>
          <CurrentLangauge>{preferedLanguage}</CurrentLangauge>
          <FlexRow>
            <CountryFlagImage>flag</CountryFlagImage>
            <DropdownIcon>V</DropdownIcon>
          </FlexRow>
        </FlexColumn>
      </StyledLink>
      <LanguageSelection isOpen={isHovered} handleOnSelect={handleOnClose} />
    </Container>
  );
};

export default LanguagePickerNav;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  ${baseItemStyles}
  text-decoration: none;
  color: var(--clr-text-light-500);
`;

const FlexColumn = styled.span`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.span`
  display: flex;
  justify-content: center;
`;

const CurrentLangauge = styled.span``;

const CountryFlagImage = styled.span``;

const DropdownIcon = styled.span``;
