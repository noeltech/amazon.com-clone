import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { client } from "../../../../utils/api-client";

import ProductOverview from "../ProductOverview";
import ProductBlankDisplay from "../ProductBlankDisplay";

const ProductDisplay = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      client("products?limit=20").then(
        (data) => {
          console.log(data);
          return data;
        },
        (error) => console.log(error)
      ),
    refetchOnWindowFocus: false,
  });

  const DisplayBlankItems = () => {
    let blankDisplay = [];
    for (let index = 0; index < 30; index++) {
      blankDisplay.push(<ProductBlankDisplay key={index} />);
    }
    return blankDisplay;
  };

  const DisplayItems = (data) => {
    return data.map((item, index) => (
      <List key={item.title}>
        <ProductOverview title={item.title} imgSrc={item.image} />
      </List>
    ));
  };

  return (
    <Wrapper>
      <ListContainer>
        {isLoading ? DisplayBlankItems() : data ? DisplayItems(data) : null}
      </ListContainer>
    </Wrapper>
  );
};

export default ProductDisplay;

const Wrapper = styled.div`
  width: 100%;
`;

const ListContainer = styled.ul`
  display: flex;

  flex-wrap: wrap;
`;

const List = styled.li`
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  width: 33.33333%;
  @media (min-width: 1200px) {
    width: 25%;
  }
  @media (min-width: 1500px) {
    width: 20%;
  }
`;
