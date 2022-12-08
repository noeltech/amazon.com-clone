import React from "react";
import styled from "styled-components";

const BackToTopButton = () => {
  return (
    <Button>
      <Label>Back to top</Label>
    </Button>
  );
};

export default BackToTopButton;

const Button = styled.button`
  height: 60px;
  width: 100%;
  background-color: #37475a;
  cursor: pointer;

  &:hover {
    background-color: #485769;
  }
`;

const Label = styled.span`
  color: #ffff;
  font-size: 13px;
`;
