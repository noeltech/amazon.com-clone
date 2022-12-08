import React from "react";
import SelectLocationDialog from "./SelectLocationDialog";

const index = (props) => {
  const { isModalOpen } = props;

  return <>{isModalOpen ? <SelectLocationDialog {...props} /> : null}</>;
};

export default index;
