import React from "react";

//Custom  Components
import { SingleContentCard } from "./common/Cards";

//Assets
import top_deal from "../../../assets/top-deal.jpg";

const TopDealCard = () => {
  return (
    <SingleContentCard
      to={"/"}
      cardTitle={"Top Deal"}
      bottomLinkLabel={"See all deals"}
      imgSrc={top_deal}
      label=""
    />
  );
};

export default TopDealCard;
