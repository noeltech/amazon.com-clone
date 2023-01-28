import React from "react";
import styled from "styled-components";

const ProductOverview = (props) => {
  const { title, imgSrc } = props;
  return (
    <Wrapper>
      <BackgroundOverlay>
        <ImageWrapper>
          <ProductImage src={imgSrc} alt={title} />
        </ImageWrapper>
      </BackgroundOverlay>
      <ProductTitle>{title}</ProductTitle>
    </Wrapper>
  );
};

export default ProductOverview;

const Wrapper = styled.div`
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
