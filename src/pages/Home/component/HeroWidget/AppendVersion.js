import React, { useEffect, useState, useRef } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import styled from "styled-components";

const HeroImage = styled.img`
  flex-basis: 25%;
  width: 25%;
  object-fit: fill;
  flex-shrink: 0;
  /* visibility: hidden; */
  flex: 1;
`;

const initialPosition = 0;

const slideElement = [
  <HeroImage
    key={"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"}
    src={"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"}
  />,
  <HeroImage
    key={"https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"}
    src={"https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"}
  />,
  <HeroImage
    key={"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"}
    src={"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"}
  />,
  <HeroImage
    key={"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"}
    src={"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"}
  />,
];

function loadSlides() {}

const initialSlideState = {
  isTransition: true,
  direction: "right",
  moveSlide: "translate(0)",
  slides: slideElement,
};

const HeroWidget = () => {
  const [slideState, setSlideState] = useState(initialSlideState);

  const sliderRef = useRef();

  const { moveSlide, direction, isTransition, slides } = slideState;

  console.log("render");

  //   useEffect(() => {
  //     console.log("hello");
  //     if (!isTransitionEnd) {
  //       return;
  //     }
  //     const newArray = newSlides;
  //     newArray.push(newArray.shift());
  //     setNewSlides(newArray);

  //     setSlideState({
  //       ...slideState,
  //       isTransition: false,
  //       moveSlide: "translate(0)",
  //     });

  //     setIsTransitionEnd(false);

  //     return () => {};
  //   }, [isTransitionEnd]);

  // Handle NEXT Slide Button
  const handleNextSlide = () => {
    if (direction === "left") {
      const newArray = slides;
      newArray.unshift(newArray.pop());
      setSlideState({
        ...slideState,
        isTransition: true,
        moveSlide: "translate(-25%)",
        direction: "right",
      });
    } else {
      setSlideState({
        ...slideState,
        isTransition: true,
        moveSlide: "translate(-25%)",
      });
    }
  };

  //Handle PREVIOUS Slide Button
  const handlePrevSlide = () => {
    if (direction === "right") {
      const newArray = slides;
      newArray.push(newArray.shift());
      setSlideState({
        ...slideState,
        isTransition: true,
        moveSlide: "translate(25%)",
        direction: "left",
      });
    } else {
      setSlideState({
        ...slideState,
        isTransition: true,
        moveSlide: "translate(25%)",
      });
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      //   setIsTransitionEnd(true);
      const newArray = slides;
      if (direction === "right") {
        newArray.push(newArray.shift());
      } else {
        newArray.unshift(newArray.pop());
      }

      setSlideState({
        ...slideState,
        isTransition: false,
        moveSlide: "translate(0)",
        slides: newArray,
      });

      //   setTimeout(() => {
      //     setSlideState({
      //       ...slideState,
      //       isTransition: true,
      //     });
      //   });
    };

    sliderRef.current.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderRef.current.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [direction]);

  return (
    <Wrapper>
      <NextSlideButton onClick={handleNextSlide}>Next</NextSlideButton>
      <PreviousButton onClick={handlePrevSlide}>Prev</PreviousButton>
      <Container>
        <Carousel direction={direction}>
          <Slider
            ref={sliderRef}
            moveSlide={moveSlide}
            isTransition={isTransition}
          >
            {slides}
          </Slider>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default HeroWidget;

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 320px;
`;

const Container = styled.section`
  width: 400px;
  height: 320px;
  margin: 20px auto;
  position: absolute;
  top: 0;
  left: 0;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid orange;
  border-radius: 3px;
  display: flex;
  justify-content: ${(props) =>
    props.direction === "right" ? "flex-start" : "flex-end"};
`;

const Slider = styled.div`
  width: 400%;
  height: 100%;
  display: flex;
  border: 1px solid green;
  flex-shrink: 0;
  transition: ${(props) => (props.isTransition ? "all 0.5s" : `none`)};
  transform: ${(props) => props.moveSlide && props.moveSlide};
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
