import React from "react";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResultBar from "./Components/ResultBar";
import ProductDisplay from "./Components/ProductDisplay";
import ProductFilter from "./Components/ProductFilter";

const queryClient = new QueryClient();

const Products = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ResultBar />
        <Grid>
          <ProductFilter />
          <QueryClientProvider client={queryClient}>
            <ProductDisplay />
          </QueryClientProvider>
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

  @media (max-width: 1600px) {
    width: 100%;
  }
  /* max-width: 100vw; */
`;
