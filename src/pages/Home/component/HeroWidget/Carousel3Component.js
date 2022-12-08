import React, { useEffect, useState } from "react";
import styled from "styled-components";

import heroImage from "../../../../assets/hero_1.jpg";

const initialPosition = 0;
const initialSlideIndex = { left: 3, middle: 0, right: 1 };

const HeroWidget = () => {
  const [position, setTogglePosition] = useState(initialPosition);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(initialSlideIndex);
  //   const [isSlideMoved, setSlideMoved] = useState(false);
  const [isTransitionEnd, setTransitionEnd] = useState(false);

  const elements = ImagesComponent();

  //Handle  Next Slide Button
  const handleNextSlide = () => {
    setTogglePosition(-400);
    // Reset Index if last current index is the last slide
    if (currentIndex === 3) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  //Handle  Previous Slide Button
  const handlePrevSlide = () => {
    setTogglePosition(0);

    if (currentIndex === 0) {
      setCurrentIndex(3);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleOnTransitionEnd = () => {
    setTransitionEnd(true);
  };

  // Update Slide Position
  useEffect(() => {
    if (!isTransitionEnd) {
      return;
    }
    console.log(currentIndex);

    if (currentIndex === 0) {
      setSlideIndex({ left: 3, middle: currentIndex, right: currentIndex + 1 });
    } else if (currentIndex === 3) {
      setSlideIndex({ left: currentIndex - 1, middle: currentIndex, right: 0 });
    } else {
      setSlideIndex({
        left: currentIndex - 1,
        middle: currentIndex,
        right: currentIndex + 1,
      });
    }

    setTransitionEnd(false);
    // return () => {
    //   console.log("this run?");
    //   setTransitionEnd(false);
    // };
  }, [isTransitionEnd]);

  useEffect(() => {
    console.log(slideIndex);
  }, [slideIndex]);

  return (
    <HeroWidgetContainer>
      <NextSlideButton onClick={handleNextSlide}>Next</NextSlideButton>
      <BackToOriginal onClick={handlePrevSlide}>tPrev</BackToOriginal>
      <HeroImageContainer
        position={position}
        onTransitionEnd={handleOnTransitionEnd}
      >
        {elements[slideIndex.left]}
        {elements[slideIndex.middle]}
        {elements[slideIndex.right]}
      </HeroImageContainer>
    </HeroWidgetContainer>
  );
};

export const ImagesComponent = () => {
  return [
    <HeroImage
      src={"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"}
    />,

    <HeroImage
      src={"https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"}
    />,
    <HeroImage
      src={"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"}
    />,
    <HeroImage
      src={"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"}
    />,
  ];
};

export default HeroWidget;

const HeroWidgetContainer = styled.section`
  max-width: 1400px;
  min-width: 1000px;
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const HeroImageContainer = styled.div`
  border: 1px solid pink;
  width: 400px;
  height: 600px;
  left: 0;
  position: absolute;
  display: flex;
  transition: transform 0.3s;
  transform: ${(props) =>
    props.position ? `translateX(${props.position}px)` : `translateX(0)`};
  /* transform: translateX(-1300px); */
`;

const HeroImage = styled.img`
  width: 400px;
  height: 600px;
  object-fit: fill;
  /* visibility: hidden; */
`;

const NextSlideButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  cursor: pointer;
  z-index: 10;
`;

const BackToOriginal = styled.button`
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  cursor: pointer;
  z-index: 10;
`;
