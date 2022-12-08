import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components/macro";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

const PortalModal = (props) => {
  //   const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = (e) => {
    console.log("Dialog Shadow is Clicked");
    props.onClose();
    props.setModalOpen(false);
  };

  const ref = useOutsideClick(handleCloseModal);

  useEffect(() => {
    //   isModalOpen ? toggleModalOpen() : toggleModalClose();
    if (props.isModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.isModalOpen]);

  return (
    <>
      {props.isModalOpen
        ? ReactDOM.createPortal(
            <ModalContainer>
              <ModalContent ref={ref}>
                {/* <Button onClick={handleCloseModal}>Close</Button> */}
                {props.children}
              </ModalContent>
            </ModalContainer>,
            document.querySelector("#modal_root")
          )
        : null}
    </>
  );
};

export default PortalModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  /* height: 500px;
  width: 600px;
  background-color: white; */
`;

const Button = styled.button`
  padding: 1rem;
  cursor: pointer;
`;
