import React from "react";
import { Card } from "../common/Cards";
import ImageLink from "../common/ImageLink";

import dresses from "../../../../assets/dresses.jpg";

const Dresses = () => {
  return (
    <Card cardTitle="Dresses" to="/" bottomLinkLabel="Shop now">
      <ImageLink to="/" imgSrc={dresses} label={""} />
    </Card>
  );
};

export default Dresses;
