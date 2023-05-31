import React from "react";
import styled from "styled-components";

import { getDecimalValue } from "../../../../../utils/getDecimalValue";

function ProductPrice({ price }) {
  return (
    <Container>
      <CurrencySymbol>&#36;</CurrencySymbol>
      <PriceWholeValue>{Math.trunc(price)}</PriceWholeValue>
      <PriceDecimalValue>{getDecimalValue(price)}</PriceDecimalValue>
    </Container>
  );
}

export default ProductPrice;

const Container = styled.div``;

const CurrencySymbol = styled.span`
  font-size: 13px;
  position: relative;
  top: -7px; ;
`;

const PriceWholeValue = styled.span`
  font-size: 24px;
`;

const PriceDecimalValue = styled.span`
  font-size: 13px;
  position: relative;
  top: -7px;
`;
