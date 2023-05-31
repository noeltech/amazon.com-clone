import React from "react";
import styled from "styled-components";
import CategorySelectorButton from "./CategorySelectorButton";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

const HeaderSearchBar = ({ setOverlay }) => {
  let isMobile = useMediaQuery("(min-width:768px");
  return (
    <Container>
      <ContentWrapper>
        {isMobile ? <CategorySelectorButton /> : null}
        <SearchInput setOverlay={setOverlay}></SearchInput>
        <SearchButton />
      </ContentWrapper>
    </Container>
  );
};

export default HeaderSearchBar;

const Container = styled.div`
  color: var(--clr-text-light-500);
  width: 100%;
  height: 40px;
  min-width: 300px;
  padding: 10px 4px;
  /* overflow: hidden; */
`;
const ContentWrapper = styled.form`
  display: flex;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
`;
