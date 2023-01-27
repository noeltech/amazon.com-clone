import React from "react";
import styled from "styled-components";

const ProductOverview = (props) => {
  return (
    <Wrapper>
      <BackgroundOverlay>
        <ImageWrapper></ImageWrapper>
      </BackgroundOverlay>
      <Spacer></Spacer>
      <ProductTitle></ProductTitle>
    </Wrapper>
  );
};

export default ProductOverview;

const Wrapper = styled.div`
  flex-grow: 1;
  flex-basis: 250px;
  flex-shrink: 1;

  margin-bottom: 2rem;
`;
const Spacer = styled.div`
  height: 14px;
`;

const ImageWrapper = styled.div`
  height: 260px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  /* background: #000;
  opacity: 0.04;
  background-blend-mode: multiply; */
`;

const ProductTitle = styled.div`
  height: 2rem;
  background: #000;
  opacity: 0.04;
`;

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
    opacity: 0.08;
    pointer-events: none;
  }
`;
