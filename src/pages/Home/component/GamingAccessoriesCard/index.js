import React from "react";
import styled from "styled-components";
import { Card } from "../common/Cards";

import chairs from "../../../../assets/chairs.jpg";
import headsets from "../../../../assets/headsets.jpg";
import keyboards from "../../../../assets/keyboards.jpg";
import computer_mice from "../../../../assets/computer_mice.jpg";
import ImageLink from "../common/ImageLink";

const ListItem = [
  { to: "/", imgSrc: chairs, label: "Chairs" },
  { to: "/", imgSrc: headsets, label: "Headsets" },
  { to: "/", imgSrc: keyboards, label: "Keyboards" },
  { to: "/", imgSrc: computer_mice, label: "Computer mice" },
];

const index = () => {
  const ListComponents = ListItem.map((item) => (
    <ImageLink
      key={item.label}
      to={item.to}
      imgSrc={item.imgSrc}
      label={item.label}
    />
  ));

  return (
    <Card cardTitle="Gaming accessories" to="/" bottomLinkLabel={"See more"}>
      <ContentWrapper> {ListComponents}</ContentWrapper>
    </Card>
  );
};

export default index;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
