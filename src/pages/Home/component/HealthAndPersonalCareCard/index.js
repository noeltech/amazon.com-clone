import React from "react";

import { SingleContentCard } from "../common/Cards";
import personal_care from "../../../../assets/personal_care.jpg";

const index = () => {
  return (
    <SingleContentCard
      to={"/"}
      cardTitle={"Health & Personal Care"}
      bottomLinkLabel={"Shop now"}
      imgSrc={personal_care}
      label=""
    />
  );
};

export default index;
