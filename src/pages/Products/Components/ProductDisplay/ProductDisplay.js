import React from "react";
import styled from "styled-components";
import useQuery from "../../../../hooks/useQuery";
import { productApi } from "../../../../services/api/productApi";

import ProductOverview from "../ProductOverview";
import ProductBlankDisplay from "../ProductBlankDisplay";

const ProductDisplay = () => {
  const { data, isLoading, error } = useQuery(productApi.fetchAll);

  const DisplayBlankItems = () => {
    let blankDisplay = [];
    for (let index = 0; index < 30; index++) {
      blankDisplay.push(<ProductBlankDisplay key={index} />);
    }
    return blankDisplay;
  };

  const DisplayItems = (data) => {
    return data.map((item, index) => (
      <li key={item.title}>
        <ProductOverview title={item.title} imgSrc={item.image} />
      </li>
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
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
