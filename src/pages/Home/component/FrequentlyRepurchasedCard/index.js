import React from "react";
import styled from "styled-components";

import ImageLink from "../common/ImageLink";
import { CarouselCard } from "../common/Cards";

import freq_01 from "../../../../assets/freq_01.jpg";
import freq_02 from "../../../../assets/freq_02.jpg";
import freq_03 from "../../../../assets/freq_03.jpg";
import freq_04 from "../../../../assets/freq_04.jpg";
import freq_05 from "../../../../assets/freq_05.jpg";

const carouselItems = [
  { to: "/", imgSrc: freq_01, label: "" },
  { to: "/", imgSrc: freq_02, label: "" },
  { to: "/", imgSrc: freq_03, label: "" },
  { to: "/", imgSrc: freq_04, label: "" },
  { to: "/", imgSrc: freq_05, label: "" },
  { to: "/", imgSrc: freq_01, label: "" },
  { to: "/", imgSrc: freq_02, label: "" },
  { to: "/", imgSrc: freq_03, label: "" },
  { to: "/", imgSrc: freq_04, label: "" },
  { to: "/", imgSrc: freq_05, label: "" },
];

const FrequentlyRepurchasedCard = () => {
  const carouselContent = carouselItems.map((item, index) => {
    return (
      <ListItem key={index}>
        <ImageLink to={item.to} imgSrc={item.imgSrc} label="" />
      </ListItem>
    );
  });

  return (
    <CarouselCard cardTitle="Frequently Repurchased in Supplies" height="320px">
      {carouselContent}
    </CarouselCard>
  );
};

export default FrequentlyRepurchasedCard;

const ListItem = styled.li`
  /* width: auto;
  height: auto;
  max-width: 270px;
  max-height: 200px; */
  width: 200px;
`;
