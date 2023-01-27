import React from "react";
import styled from "styled-components";

import ResultBar from "./Components/ResultBar";
import ProductDisplay from "./Components/ProductDisplay";
import ProductFilter from "./Components/ProductFilter";

const Products = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ResultBar />
        <Grid>
          <ProductFilter />
          <ProductDisplay />
        </Grid>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  width: 80%;
  min-width: 1000px;

  padding-top: 1rem;

  /* max-width: 100vw; */
`;
