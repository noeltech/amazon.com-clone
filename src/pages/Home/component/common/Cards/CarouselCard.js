import React from "react";
import styled from "styled-components";

import { Card } from "./index";

const CarouselCard = ({ cardTitle, children, height }) => {
  return (
    <Card cardTitle={cardTitle} height={height}>
      <CarouselContentContainer>
        <CarouselContenWrapper>{children}</CarouselContenWrapper>
      </CarouselContentContainer>
    </Card>
  );
};

export default CarouselCard;

const CarouselContenWrapper = styled.ul`
  box-sizing: border-box;
  display: flex;
  width: fit-content;
  gap: 1rem;
  height: 100%;

  margin: 0;
  padding: 0;
  padding-bottom: 1rem;
`;

const CarouselContentContainer = styled.div`
  height: 100%;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 6px;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 2rem;
    border-radius: 6px;
    height: 6px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
