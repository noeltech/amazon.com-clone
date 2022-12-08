import React from "react";

//Custom  Components
import { SingleContentCard } from "./common/Cards";

//Assets
import computerAccessoriesCard from "../../../assets/computer_accessories_card.jpg";

const ComputerAccessoriesCard = () => {
  return (
    <SingleContentCard
      to={"/"}
      cardTitle={"Computer & Accessories"}
      bottomLinkLabel={"Shop now"}
      imgSrc={computerAccessoriesCard}
      label=""
    />
  );
};

export default ComputerAccessoriesCard;
