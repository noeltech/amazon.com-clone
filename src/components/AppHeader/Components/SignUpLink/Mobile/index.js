import React from "react";
import styled from "styled-components";
import { MobileLinkWrapper, BottomLabel, TopLabel } from "../../Common";
import { Container } from "../../../../Layouts";

const SignUpLink = () => {
  return (
    <MobileLinkWrapper to={"/"}>
      <TopLabel>{"Sign in >"}</TopLabel>
    </MobileLinkWrapper>
  );
};

export default SignUpLink;
