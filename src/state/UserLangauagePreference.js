import React, { createContext, useState, useEffect } from "react";

const UserPreferedLanguage = createContext({
  preferedLanguage: "EN",
  setPreferedLanguage: () => {},
});

const UserPreferedLanguageProvider = ({ children }) => {
  const [preferedLanguage, setPreferedLanguage] = useState("EN");
  const value = { preferedLanguage, setPreferedLanguage };
  return (
    <UserPreferedLanguage.Provider value={value}>
      {children}
    </UserPreferedLanguage.Provider>
  );
};

export { UserPreferedLanguage, UserPreferedLanguageProvider };
