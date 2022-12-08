import styled from "styled-components";
import { Link } from "react-router-dom";
import { baseItemStyles } from "../../styles/Header";

export const A = styled(Link)`
  text-decoration: none;
  color: blue;
`;

export const LinkWrapper = styled(A)`
  border-radius: 3px;
  padding: 3px;
  border: 2px solid var(--clr-primary);

  &:hover {
    border: 2px solid white;
    cursor: pointer;
  }
`;
