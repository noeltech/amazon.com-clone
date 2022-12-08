import React, { useEffect, useState } from "react";
import styled from "styled-components";

const initialPosition = 0;

const HeroWidget = () => {
  const [position, setTogglePosition] = useState(initialPosition);

  const handleNextSlide = () => {
    setTogglePosition(position + -1400);
  };

  const handleBacktoOriginal = () => {
    setTogglePosition(position + 1400);
  };

  return (
    <HeroWidgetContainer>
      <NextSlideButton onClick={handleNextSlide}>Next</NextSlideButton>
      <PreviousButton onClick={handleBacktoOriginal}>Prev</PreviousButton>
      <HeroImageContainer position={position}>
        {" "}
        <HeroImage
          src={"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"}
        />
        <HeroImage
          src={"https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"}
        />
        <HeroImage
          src={"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"}
        />
        <HeroImage
          src={"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"}
        />
        ,
      </HeroImageContainer>
    </HeroWidgetContainer>
  );
};

export default HeroWidget;

const HeroWidgetContainer = styled.section`
  max-width: 1400px;
  min-width: 1000px;
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;
`;

const HeroImageContainer = styled.div`
  width: 100%;
  height: 600px;
  left: 0;
  position: abolute;
  display: flex;
  transition: transform 0.3s;
  transform: ${(props) =>
    props.position ? `translateX(${props.position}px)` : `translateX(0)`};
  /* transform: translateX(-1300px); */
`;

const HeroImage = styled.img`
  width: 1400px;
  height: 600px;
  object-fit: fill;
  /* visibility: hidden; */
`;

const NextSlideButton = styled.button`
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  cursor: pointer;
  z-index: 10;
  height: 60px;
`;

const PreviousButton = styled.button`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  height: 60px;
  margin: auto 0;
  cursor: pointer;
  z-index: 10;
`;
