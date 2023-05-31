import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={"Im Noel im a user"}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
