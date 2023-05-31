import React, { useState } from "react";
import styled from "styled-components";
import Map from "../components/Map";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import { UserPreferedLanguageProvider } from "../state/UserLangauagePreference";
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer/Footer";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Routes, Route, Outlet } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="map" element={<Map />} />

        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
function RootLayout() {
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
          <Outlet />
        </PageContent>

        <Footer />
      </AppContainer>
    </>
  );
}

const PageContent = styled.div`
  position: relative;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 1000px;
  min-height: 100vh;
  /* height: 100%; */
  overflow: auto;
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
