import React from "react";
import styled from "styled-components";

import ResultBar from "./Components/ResultBar";
import ProductDisplay from "./Components/ProductDisplay";

const Products = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ResultBar />
        <Grid>
          <ProductDisplay />
        </Grid>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div``;

const ContentWrapper = styled.div``;

const Grid = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  min-width: 1000px;
  max-width: 100vw;
`;
