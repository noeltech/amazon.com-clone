import React from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";
import { list1, list2, list3, list4 } from "./NavigationList";

const TopSection = () => {
  return (
    <Container>
      <Grid>
        <HorizontalSpace />
        <Container row>
          <NavLinks title={list1.title} list={list1.list}></NavLinks>
          <NavLinks title={list2.title} list={list2.list}></NavLinks>
          <NavLinks title={list3.title} list={list3.list}></NavLinks>
          <NavLinks title={list4.title} list={list4.list}></NavLinks>
        </Container>
        <HorizontalSpace />
      </Grid>
    </Container>
  );
};

export default TopSection;

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: center;
  width: 100%;
  gap: 5rem;
  background-color: #232f3e;
`;

const Grid = styled.div``;

const HorizontalSpace = styled.div`
  height: 2rem;
`;
