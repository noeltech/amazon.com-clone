import React from "react";
import styled from "styled-components";
import { BiRadioCircleMarked } from "react-icons/bi";
import { IconContext } from "react-icons";

const SelectedOption = () => {
  return (
    <IconContext.Provider value={{ color: "grey", size: "2rem " }}>
      <OptionWrapper>
        <OptionIcon>
          <BiRadioCircleMarked />
        </OptionIcon>
        <OptionLabel>English - EN</OptionLabel>
      </OptionWrapper>
    </IconContext.Provider>
  );
};

export default SelectedOption;

const OptionWrapper = styled.div``;
const OptionIcon = styled.span`
  vertical-align: middle;
  display: inline-block;
`;

const OptionLabel = styled.span`
  color: black;
`;
