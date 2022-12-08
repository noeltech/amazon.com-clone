import React from "react";
import styled from "styled-components";

import { NavLinkWrapper } from "./styled";

const CountryPreferNav = () => {
  return (
    <NavLinkWrapper to={"#"}>
      <GlobeIcon>##</GlobeIcon>
      <Label>United States</Label>
    </NavLinkWrapper>
  );
};

export default CountryPreferNav;
const GlobeIcon = styled.span``;
const Label = styled.span`
  padding: 0 6px;
`;
