import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.row ? "row" : props.column ? "column" : "row"};
`;
