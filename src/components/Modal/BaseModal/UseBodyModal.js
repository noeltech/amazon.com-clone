import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BaseModal = () => {
  const [isModalOpen, toggleModal] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleToggleModal = () => {
    toggleModal();
  };
  return (
    <>
      {isModalOpen ? (
        <ModalContainer>
          <ModalContent>
            <Button onClick={handleToggleModal}>Close</Button>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default BaseModal;

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
  height: 500px;
  width: 600px;
  background-color: white;
`;

const Button = styled.button``;
