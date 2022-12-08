import React from "react";

import { A, LinkWrapper } from "./styled";

export const StyledLink = ({ to, label }) => {
  return <A to={to}>{label}</A>;
};

export const HeaderLinkWrapper = ({ to }) => {
  return <LinkWrapper to={to}> {}</LinkWrapper>;
};
// import React from "react";

// const index = () => {
//   return (
//     <div>index</div>
//   )
// }

// export default index
