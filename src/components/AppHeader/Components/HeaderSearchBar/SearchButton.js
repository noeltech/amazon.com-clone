import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

const iconStyle = { size: "1.1em" };

export const SearchButton = () => {
  return (
    <Container>
      <Button>
        <IconContext.Provider value={iconStyle}>
          <IconWrappper>
            <FaSearch></FaSearch>
          </IconWrappper>
        </IconContext.Provider>
      </Button>
    </Container>
  );
};

export default SearchButton;

const Container = styled.div`
  background-color: #febd69;
`;

const Button = styled.button`
  padding: 7px 10px;
  border-width: 0;
  font-size: 1.2em;
  height: 100%;
  background-color: inherit;
`;

const IconWrappper = styled.i`
  display: flex;
  align-items: center;
`;
