import React from "react";
import styled from "styled-components";

const CategorySelectorButton = () => {
  return (
    <Container>
      <Label>All</Label>
      <DropDownIcon> {">"} </DropDownIcon>
    </Container>
  );
};

export default CategorySelectorButton;

const Container = styled.div`
  border-radius: 5px 0 0 5px;
  display: flex;
  background-color: #f3f3f3;
  min-width: 2em;
  border-right: solid 1px grey;
  padding: 0.6em;

  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 14px;
  color: black;
`;

const DropDownIcon = styled.i`
  font-size: 14px;
  color: black;
`;
