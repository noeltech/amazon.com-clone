import React from "react";
import { Card } from "../common/Cards";
import styled from "styled-components";

import computer_accessories from "../../../../assets/computer_accessories.jpg";
import video_games from "../../../../assets/video_games.jpg";
import baby from "../../../../assets/baby.jpg";
import toysngames from "../../../../assets/toysngames.jpg";
import ImageLink from "../common/ImageLink";

const ListItem = [
  { to: "/", imgSrc: computer_accessories, label: "Compute & Accessories" },
  { to: "/", imgSrc: video_games, label: "Video Games" },
  { to: "/", imgSrc: baby, label: "Baby" },
  { to: "/", imgSrc: toysngames, label: "Toys & Games" },
];

const ShopByCategory = () => {
  const ListComponents = ListItem.map((item) => (
    <ImageLink
      key={item.label}
      to={item.to}
      imgSrc={item.imgSrc}
      label={item.label}
    />
  ));
  return (
    <Card cardTitle="Shop by Category" to="/" bottomLinkLabel={"Shop now"}>
      <ContentWrapper>{ListComponents} </ContentWrapper>
    </Card>
  );
};

export default ShopByCategory;

const ContentWrapper = styled.div`
  height: 90%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  text-align: center;
  overflow: hidden;
`;
