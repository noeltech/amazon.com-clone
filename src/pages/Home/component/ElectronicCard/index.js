import React from "react";

import { SingleContentCard } from "../common/Cards";
import electronicCard from "../../../../assets/electronic_card.jpg";

const index = () => {
  return (
    <SingleContentCard
      to={"/"}
      cardTitle={"Electronics"}
      bottomLinkLabel={"See More"}
      imgSrc={electronicCard}
      label=""
    />
  );
};

export default index;
