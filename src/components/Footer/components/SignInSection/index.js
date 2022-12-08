import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import amazonButton from "../../../../assets/amazon-button.png";

const SignInSection = () => {
  return (
    <Container>
      <Box>
        <TopLabel>See personalized recommendations</TopLabel>
        <ButtonLink to={"#"}>Sign in</ButtonLink>
        <BottomLabel>
          New Customer? <SignUpLink to={"#"}>Start here.</SignUpLink>{" "}
        </BottomLabel>
      </Box>
    </Container>
  );
};

export default SignInSection;

const Container = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 1.5rem; ;
`;

const TopLabel = styled.div`
  font-size: 13px;
`;

const Box = styled.div`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;

  & > div,
  a {
    margin-bottom: 6px;
  }
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin: 0;
  padding: 0;
  border-radius: 5px;

  height: 28px;
  width: 230px;

  font-size: 12px;
  font-weight: 700;
  line-height: 28px;
  color: #000;

  background-image: url(${amazonButton});
  background-size: cover;
`;

const BottomLabel = styled.div`
  font-size: 11px;
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #007185;
  font-size: 11px;
`;
