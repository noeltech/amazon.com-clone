import { css } from "styled-components";

export const baseItemStyles = css`
  border-radius: 3px;
  padding: 3px;
  border: 2px solid var(--clr-primary);

  &:hover {
    border: 2px solid white;
    cursor: pointer;
  }
`;
