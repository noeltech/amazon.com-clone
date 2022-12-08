import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SelectedOption from "./Components/SelectedOption/SelectedOption";
import LangaugeOption from "./Components/LanguageOption/LangaugeOption";
import { UserPreferedLanguage } from "../../../state/UserLangauagePreference";

import { userLanguages } from "./Data/UserLanguages";

const LanguageSelection = ({ isOpen, handleOnSelect }) => {
  const { preferedLanguage, setPreferedLanguage } =
    useContext(UserPreferedLanguage);
  const handleClickOption = (e, code) => {
    // e.preventDefault();
    setPreferedLanguage(code);
    handleOnSelect();
  };

  const userLanguagesOptions = userLanguages.map((item) => {
    return (
      <LangaugeOption
        key={item.code}
        isSelected={preferedLanguage === item.displayCode ? true : false}
        displayCode={item.displayCode}
        displayName={item.displayName}
        handleClick={(e) => handleClickOption(e, item.displayCode)}
      />
    );
  });

  return (
    <>
      {isOpen ? (
        <FlyoutAnchor>
          <FlyOutContainer>
            <Wrapper>
              <NavItem>
                <NavText>Change language</NavText>
                <StyledLink to="#">Learn more</StyledLink>
              </NavItem>
              {/* <SelectedOption /> */}

              <LangaugeOption
                isSelected={preferedLanguage === "EN" ? true : false}
                displayCode={"EN"}
                displayName={"English"}
                handleClick={(e) => handleClickOption(e, "EN")}
              />
              <Divider />
              {userLanguagesOptions}
              <Divider />
              <NavItem>
                <NavText>Change Currency</NavText>
                <StyledLink to="#">Learn more</StyledLink>
              </NavItem>
              <NavItemGrid>
                <NavText>$ - USD - US Dollar </NavText>
                <StyledLink to="#">Change</StyledLink>
              </NavItemGrid>
              <Divider />
              <NavItem>
                <NavText>You are shopping on Amazon.com</NavText>
                <StyledLink to="#">
                  <ChangeCountryText>Change country/region</ChangeCountryText>
                </StyledLink>
              </NavItem>
            </Wrapper>
          </FlyOutContainer>
        </FlyoutAnchor>
      ) : null}
    </>
  );
};

export default LanguageSelection;

const NavItem = styled.div``;
const NavText = styled.span`
  font-size: 14px;
`;
const ChangeCountryText = styled.div`
  text-align: center;
  font-size: 13px;
  margin-top: 1rem;
`;

const NavItemGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 6px;
`;

const Divider = styled.div`
  background: #eee;
  height: 1px;
  margin-left: 20px;
  margin-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const StyledLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  margin-left: 8px;
  /* cursor: pointer; */
  &:hover {
    text-decoration: underline;
  }
`;
const FlyoutAnchor = styled.div`
  position: relative;
`;

const FlyOutContainer = styled.div`
  position: absolute;
  top: -2px;
  left: -10px;
  z-index: 100;
`;

const Wrapper = styled.section`
  background-color: white;
  min-width: 210px;
  padding: 12px;
  border-radius: 5px;
  color: black;
`;
