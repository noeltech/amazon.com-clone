import React from "react";
import styled from "styled-components";

import { NavLinkWrapper } from "./styled";

export const LanguageSelectNav = () => {
  return (
    <NavLinkWrapper to={"#"}>
      <GlobeIcon>O</GlobeIcon>
      <Label>English</Label>
      <DropDownIcon>{"<>"}</DropDownIcon>
    </NavLinkWrapper>
  );
};

const GlobeIcon = styled.span``;
const Label = styled.span`
  padding: 0 6px;
`;
const DropDownIcon = styled.span`
  position: relative;
  left: 12px;
`;
