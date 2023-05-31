import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductRating from "./ProductRating/ProductRating";
import ProductPrice from "./ProductPrice/ProductPrice";

const ProductOverview = (props) => {
  const { title, imgSrc, rating, price, id } = props;
  return (
    <Wrapper>
      <BackgroundOverlay>
        <ImageWrapper>
          <ProductImage src={imgSrc} alt={title} />
        </ImageWrapper>
      </BackgroundOverlay>
      <ProductInfo>
        <LinkToDetailsPage to={`/product-details/${id}`}>
          <ProductTitle>{title}</ProductTitle>
        </LinkToDetailsPage>
        <ProductRating ratingValue={rating.rate} ratingCount={rating.count} />
        <ProductPrice price={price} />
        <DeliveryDetails>
          FREE Delivery
          <DeliveryDate>Wed,April 12</DeliveryDate>
        </DeliveryDetails>
        <ShippingDestination>Ships to Philippines</ShippingDestination>
      </ProductInfo>
    </Wrapper>
  );
};

export default ProductOverview;

const LinkToDetailsPage = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  /* background: #000;
  opacity: 0.04;
  background-blend-mode: multiply; */
`;

const ProductTitle = styled.h3``;

const BackgroundOverlay = styled.div`
  position: relative;
  ::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.03;
    pointer-events: none;
  }
`;

const DeliveryDetails = styled.div`
  font-size: 14px;
`;
const DeliveryDate = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-left: 6px;
`;

const ShippingDestination = styled.div`
  font-size: 12px;
`;

const ProductInfo = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 1rem;
  padding-top: 8px;
`;
