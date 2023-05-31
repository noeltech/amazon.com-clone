import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import PrimaryNav from "./Components/PrimaryNav";
import LocationPickerButton from "./LocationPickerButton";
import LanguagePickerNav from "./LanguagePickerNav";
import HeaderSearchBar from "./Components/HeaderSearchBar";
import AppLogo from "./AppLogo";
import SignUpLink from "./Components/SignUpLink";
import ReturnsAndOrderLink from "./Components/ReturnsAndOrderLink";
import CartNav from "./Components/CartNav";
import FlyOutAnchor from "./Components/FlyOutAnchor/FlyOutAnchor";
import ScreenOverlay from "./Components/ScreenOverlay";

import MobileHeaderNav from "./Components/MobileHeaderNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function AppHeader(props) {
  const { setPageContentOverlayOpen } = props;
  //CHECK IF DESKTOP WIDE
  let isMobile = useMediaQuery("(min-width:768px");
  const [isLanguageSelectHovered, setisLanguageSelectHovered] = useState(false);
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const ref = useRef();

  const handleLanguagePickerNavHovered = () => {
    setPageContentOverlayOpen(true);
  };

  const handleLanguagePickerNavMouseLeave = () => {
    setPageContentOverlayOpen(false);
  };

  return (
    <Header ref={ref}>
      <AppBarContainer>
        {!isMobile ? <MobileHeaderNav /> : null}
        <ContentWrapper isMobile>
          {isMobile ? (
            <LeftItemContainer>
              <AppLogo />
              {/* <SimpleNav /> */}
              <LocationPickerButton />
            </LeftItemContainer>
          ) : null}

          <HeaderSearchBar setOverlay={setOverlayOpen} />
          {isMobile ? (
            <>
              <LanguagePickerNav
                onHovered={handleLanguagePickerNavHovered}
                onMouseLeave={handleLanguagePickerNavMouseLeave}
              />
              <SignUpLink
                onHovered={handleLanguagePickerNavHovered}
                onMouseLeave={handleLanguagePickerNavMouseLeave}
              />
              <ReturnsAndOrderLink />
              <CartNav />
            </>
          ) : null}
        </ContentWrapper>
      </AppBarContainer>

      <PrimaryNavContainer>
        <PrimaryNav />
      </PrimaryNavContainer>
      <ScreenOverlay isVisible={isOverlayOpen} />
    </Header>
  );
}

export default AppHeader;

const Header = styled.header`
  @media (min-width: 768px) {
    min-width: 1000px;
  }
`;

const LeftItemContainer = styled.div`
  display: flex;
`;

const AppBarContainer = styled.div`
  background: var(--clr-primary);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--clr-primary);
  width: min(99%, 1600px);
  margin-inline: auto;
`;

const PrimaryNavContainer = styled.div`
  background: var(--clr-secondary);
  width: 100%;
  /* overflow: hidden; */
  /* overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none; */
`;
