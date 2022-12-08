import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import BaseIcon from "./BaseIcon";

export const HeaderItemHoverStyle = css`
  border-radius: 3px;
  margin: 5px 0;
  padding: 6px 10px;
  border: 2px solid var(--clr-primary);

  &:hover {
    border: 2px solid white;
    cursor: pointer;
  }
`;

export const LinkWrapper = styled(Link)`
  ${HeaderItemHoverStyle}
  text-decoration: none;
  color: var(--clr-text-light-500);
`;

export const MobileLinkWrapper = styled(Link)`
  text-decoration: none;
  color: var(--clr-text-light-500);
  display: inline-block;
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  @media (min-width: 768px) {
    ${HeaderItemHoverStyle}
  }
  background: inherit;
`;
export const MobileButtonWrapper = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  background: inherit;
  color: inherit;
  font-family: sans-serif;
  /* font-size: 1rem; */
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background: #0053ba;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const TopLabel = styled.span`
  font-size: 0.9rem;
  white-space: nowrap;
`;

export const BottomLabel = styled.span`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
`;

export default BaseIcon;
