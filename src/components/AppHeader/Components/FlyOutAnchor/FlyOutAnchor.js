import React, { useEffect } from "react";
import styled from "styled-components";

import LanguageSelection from "../../../NavFlyout/LangauageSelection/LanguageSelection";

const FlyOutAnchor = ({ isLanguageSelectHovered }) => {
  // useEffect(() => {
  //   console.log("FlyOutAnchor:" + hoveredItem);
  // }, [hoveredItem]);

  return (
    <Container>
      <LanguageSelection isOpen={isLanguageSelectHovered} />
    </Container>
  );
};

export default FlyOutAnchor;

const Container = styled.div`
  position: relative;
`;
