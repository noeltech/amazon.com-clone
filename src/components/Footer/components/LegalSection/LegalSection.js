import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const legalLinks = [
  { to: "/", name: "Condition of Use" },
  { to: "/", name: "Privacy Matters" },
  { to: "/", name: "Internet Based Ads" },
];

const LegalSection = () => {
  const listComponent = legalLinks.map((item) => {
    return (
      <ListItem key={item.name}>
        <LinkItem to={item.to}>{item.name}</LinkItem>
      </ListItem>
    );
  });

  return (
    <Container>
      <ListWrapper>{listComponent}</ListWrapper>
      <Copyright>
        &copy; 1996 -2022, Amazon.com Inc. or its affiliates{" "}
      </Copyright>
    </Container>
  );
};

export default LegalSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 12px;
  color: #ddd;
  background-color: #131a22;
`;

const ListWrapper = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ListItem = styled.li``;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ddd;
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.span``;
