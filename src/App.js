import React, { useState } from "react";
import styled from "styled-components/macro";

import Map from "./components/Map";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import SimpleNavigation from "./components/SimpleNavigation";
import { GlobalStyles } from "./styles/GlobalStyles";
import Footer from "./components/Footer/Footer";
import BaseModal from "./components/Modal/BaseModal/UseBodyModal";
import { UserPreferedLanguageProvider } from "./state/UserLangauagePreference";

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
          {isPageContentOverlayOpen ? <PageContentOverlay /> : null}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Register />} />
            <Route path="map" element={<Map />} />
          </Routes>
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
