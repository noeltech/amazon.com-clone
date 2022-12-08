import React from "react";
import styled from "styled-components";

import FooterLogo from "./FooterLogo";
import { LanguageSelectNav } from "./LanguageSelectNav";
import { CurrencyPreferNav } from "./CurrencyPreferNav";
import CountryPreferNav from "./CountryPreferNav";

const FooterLineSection = () => {
  return (
    <Container>
      <NavLeft>
        <FooterLogo />
      </NavLeft>
      <NavRight>
        <LanguageSelectNav />
        <CurrencyPreferNav />
        <CountryPreferNav />
      </NavRight>
    </Container>
  );
};

export default FooterLineSection;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  justify-content: center;
  gap: 5rem;
  border-top: 1px solid #3a4553;
  background-color: #232f3e;
`;
const NavLeft = styled.div``;

const NavRight = styled.div`
  display: flex;
  gap: 0.5rem;
`;
