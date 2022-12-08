import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";

const BaseIcon = ({ icon, size, color }) => {
  const iconStyle = {
    size: size ? size : "2em",
    color: color ? color : "inherit",
  };

  return (
    <IconContext.Provider value={iconStyle}>
      <IconWrapper>{icon}</IconWrapper>
    </IconContext.Provider>
  );
};

export default BaseIcon;

const IconWrapper = styled.span`
  display: inline-block;
  display: flex;
  align-items: center;
`;
