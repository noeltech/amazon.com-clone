import React from "react";
import styled from "styled-components/macro";
import { RouterProvider } from "react-router-dom";

import SimpleNavigation from "./components/SimpleNavigation";
import { GlobalStyles } from "./styles/GlobalStyles";

import BaseModal from "./components/Modal/BaseModal/UseBodyModal";

import AppRoutes from "./routes/Routes";

//Context Providers
import { UserContextProvider } from "./utils/UserContext";
import { CartContextProvider } from "./utils/useCartContext";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <AppRoutes />
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
