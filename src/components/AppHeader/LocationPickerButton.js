import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { baseItemStyles } from "../../styles/Header";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";

import SelectLocationDialog from "../SelectLocationModal/";

const LocationPickerButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState({
    type: "name",
    label: "Philippines",
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container onClick={handleOpenModal}>
      <ContentWrapper>
        <IconContainer>
          <IconContext.Provider value={{ color: "white", size: "24px" }}>
            <IconWrapper>
              <GoLocation />
            </IconWrapper>
          </IconContext.Provider>
        </IconContainer>
        <TitleWrapper>
          <Title>Deliver to</Title>
          <CountryText>{userLocation.label}</CountryText>
        </TitleWrapper>
      </ContentWrapper>
      <SelectLocationDialog
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        currentLocation={userLocation}
        setCurrentLocation={setUserLocation}
      />
      {/* <BaseModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} /> */}
    </Container>
  );
};

export default LocationPickerButton;

const Container = styled.button`
  ${baseItemStyles}
  background: inherit;
  max-width: 150px;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
`;
const IconContainer = styled.span`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;

  margin-right: 3px;
`;

const IconWrapper = styled.span``;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const Title = styled.span`
  color: var(--clr-text-light-500);
  text-align: left;
  white-space: nowrap;
  font-size: 12px;
  color: grey;
`;

const CountryText = styled.span`
  color: var(--clr-text-light-400);
  white-space: nowrap;
  width: calc(100%);
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
`;
