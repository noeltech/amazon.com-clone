import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem";

const NavListLine = ({ list }) => {
  const listComponent = list.map((item, index) => {
    return (
      <ListItem key={index}>
        <NavItem
          to={item.to}
          title={item.title}
          description={item.description}
        />
      </ListItem>
    );
  });

  return <Container>{listComponent}</Container>;
};

export default NavListLine;

const Container = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  width: 13ch;
`;
