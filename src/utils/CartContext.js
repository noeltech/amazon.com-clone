import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
