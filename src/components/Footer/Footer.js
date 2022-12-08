import React from "react";
import styled from "styled-components";

import TopSection from "./components/TopSection/TopSection";
import BackToTopButton from "./components/TopSection/BackToTopButton";
import FooterLineSection from "./components/FooterLineSection/FooterLineSection";
import BottomSection from "./components/BottomSection/BottomSection";
import LegalSection from "./components/LegalSection/LegalSection";
import SignInSection from "./components/SignInSection";

const Footer = () => {
  return (
    <Container>
      <SignInSection />
      <BackToTopButton />
      <TopSection />
      <FooterLineSection />
      <BottomSection />
      <LegalSection />
    </Container>
  );
};

export default Footer;

const Container = styled.footer``;
