import React, { useState } from "react";
import styled from "styled-components/macro";

import AppHeader from "./components/AppHeader";
import SimpleNavigation from "./components/SimpleNavigation";
import { GlobalStyles } from "./styles/GlobalStyles";
import Footer from "./components/Footer/Footer";
import BaseModal from "./components/Modal/BaseModal/UseBodyModal";
import { UserPreferedLanguageProvider } from "./state/UserLangauagePreference";

import AllRoutes from "./routes";

function App() {
  const [isPageContentOverlayOpen, setPageContentOverlayOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <UserPreferedLanguageProvider>
          <AppHeader setPageContentOverlayOpen={setPageContentOverlayOpen} />
        </UserPreferedLanguageProvider>

        {/* <SimpleNavigation /> */}
        <PageContent>
          <AllRoutes />
          {isPageContentOverlayOpen ? <PageContentOverlay /> : null}
        </PageContent>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 1000px;
  min-height: 100vh;
  /* height: 100%; */
  overflow: auto;
`;

const PageContent = styled.div`
  position: relative;
`;
const PageContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: 99;
`;
