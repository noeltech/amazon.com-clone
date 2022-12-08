import React from "react";
import styled from "styled-components";

function AdminBoundaryLabel({ list, handleGoBackv2 }) {
  const ListItem = list.map((item, index) => {
    return (
      <ItemListWrapper key={item} onClick={() => handleGoBackv2(index)}>
        {/* {index != 0 && <ArrowRight />}
        <ArrowRight /> */}
        <BoundaryName>{item}</BoundaryName>
        <ArrowRight />
      </ItemListWrapper>
    );
  });

  return (
    <Container>
      <BoundaryList>{ListItem}</BoundaryList>
    </Container>
  );
}

export default AdminBoundaryLabel;

const Container = styled.div`
  position: absolute;
  top: 20px;

  width: auto;
  z-index: 10;
`;

const BoundaryList = styled.ul`
  display: flex;
`;

const BoundaryName = styled.li`
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  padding: 10px 14px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
`;
const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 12px solid rgba(0, 0, 0, 0.5);
`;

const ItemListWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  &:hover {
    ${BoundaryName} {
      cursor: pointer;

      background-color: rgba(0, 0, 0, 0.7);
    }
    ${ArrowRight} {
      cursor: pointer;
      border-left: 12px solid rgba(0, 0, 0, 0.7);
    }
  }
`;
