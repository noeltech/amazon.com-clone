import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components/macro";
// import { useOutsideClick } from "../../../hooks/useOutsideClick";
import CreatePortal from "../../hooks/CreatePortal";

const Popper = ({ props, children }) => {
  const anchorEl = useRef();

  //   const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const rect = anchorEl.current.getBoundingClientRect();
    console.log(rect);
    return () => {};
  }, [anchorEl]);

  return (
    <Anchor ref={anchorEl}>
      <CreatePortal wrapperId={"popper-root"}>
        <RelativeBox>
          <ContentWrapper>
            <h6>HELLO IM A POPPER FROM A PORTAL</h6>
          </ContentWrapper>
        </RelativeBox>
      </CreatePortal>
    </Anchor>
  );
};

export default Popper;

const Anchor = styled.div`
  width: 100%;
`;

const RelativeBox = styled.div`
  position: fixed;
  top: 67px;
  left: 887px; ;
`;
const ContentWrapper = styled.div`
  background-color: white;
  padding: 1rem;
`;
