import React from "react";
import styled from "styled-components";

export default function ScreenOverlay({ isVisible }) {
  return (
    <>
      {isVisible && (
        <Wrapper>
          <Overlay></Overlay>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: #000;
  opacity: 0.6;
  height: 2000px;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
`;
