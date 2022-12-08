import React from "react";
import styled from "styled-components";

import { NavLinkWrapper } from "./styled";

export const CurrencyPreferNav = () => {
  return (
    <NavLinkWrapper to={"#"}>
      <GlobeIcon>$</GlobeIcon>
      <Label>USD - U.S. Dollar</Label>
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
