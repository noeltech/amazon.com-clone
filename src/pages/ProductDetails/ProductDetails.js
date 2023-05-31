import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import { useCartContext } from "../../utils/useCartContext";

function ProductDetails() {
  const params = useParams();

  const { setCart } = useCartContext();
  console.log(setCart);
  return <div>ProductDetails: {params.id}</div>;
}

export default ProductDetails;

const Wrapper = styled.div``;
