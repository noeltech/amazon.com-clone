import React from "react";
import styled from "styled-components";

const SearchInput = ({ setOverlay }) => {
  const handleOnFocus = function () {
    setOverlay(true);
  };
  const handleOnBlur = function () {
    setOverlay(false);
  };
  return <Input onFocus={handleOnFocus} onBlur={handleOnBlur}></Input>;
};

export default SearchInput;

const Input = styled.input`
  font-size: 18px;
  width: 100%;
  padding: 0.6em;
  border-width: 0;
  border-style: none;
  outline: none;
`;
