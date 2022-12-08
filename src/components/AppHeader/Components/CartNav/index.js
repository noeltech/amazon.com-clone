import React from "react";
import styled from "styled-components";

import { LinkWrapper as LinkContainer, MobileLinkWrapper } from "../Common";
import { FaCartPlus } from "react-icons/fa";
import { IconContext } from "react-icons";

const cartStyle = { size: "2em" };

const CartNav = ({ isMobile }) => {
  const components = (
    <IconContext.Provider value={cartStyle}>
      <IconWrapper>
        <FaCartPlus />
      </IconWrapper>
    </IconContext.Provider>
  );

  if (isMobile)
    return <MobileLinkWrapper to={"/"}>{components}</MobileLinkWrapper>;
  else {
    return <LinkContainer to={"/"}>{components}</LinkContainer>;
  }
};

export default CartNav;

const IconWrapper = styled.i`
  display: inline-block;
`;
