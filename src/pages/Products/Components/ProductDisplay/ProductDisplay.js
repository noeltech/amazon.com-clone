import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ProductOverview from "../ProductOverview";

const options = {
  method: "GET",
  url: "https://amazon23.p.rapidapi.com/product-search",
  params: { query: "laptop", country: "US" },
  headers: {
    "X-RapidAPI-Key": "068a7239a1mshc2e4af13ba0381ap1b94dfjsn13439ab4383f",
    "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
  },
};

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const result = response.data.result;
        setProducts(result);
      })
      .catch(function (error) {
        console.error(error);
      });

    return () => {};
  }, []);

  let listOfProducts;

  useEffect(() => {
    if (!products) return;
    listOfProducts = products.map((item) => (
      <li key={item.title}>
        <ProductOverview title={item.title} />
      </li>
    ));

    return () => {};
  }, [products]);

  return (
    <Wrapper>
      <ListContainer>
        {products
          ? products.map((item) => (
              <li key={item.title}>
                <ProductOverview title={item.title} imgSrc={item.thumbnail} />
              </li>
            ))
          : null}
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
