import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const LangaugeOption = (props) => {
  const { isSelected, displayCode, displayName, handleClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  // useEffect(() => {
  //   console.log(isSelected);
  // }, [isSelected]);

  return (
    <IconContext.Provider
      value={{
        color: "grey",
        size: "2rem ",
        style: { verticalAlign: "middle" },
      }}
    >
      <StyledLink
        to="#"
        onMouseEnter={!isSelected ? handleOnMouseEnter : null}
        onMouseLeave={!isSelected ? handleOnMouseLeave : null}
        $isSelected={isSelected}
        onClick={handleClick}
      >
        <OptionIcon>
          {isHovered || isSelected ? (
            <BiRadioCircleMarked />
          ) : (
            <BiRadioCircle />
          )}
        </OptionIcon>
        <OptionLabel>
          {displayName} - {displayCode}
        </OptionLabel>
      </StyledLink>
    </IconContext.Provider>
  );
};

export default LangaugeOption;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  cursor: ${(props) => (props.$isSelected ? "default" : "pointer")};

  &:hover {
    text-decoration: ${(props) => (!props.$isSelected ? "underline" : "none")};
  }
`;

const OptionIcon = styled.span`
  vertical-align: middle;
  display: inline-block;
`;

const OptionLabel = styled.span`
  color: black;
  font-size: 13px;
`;
