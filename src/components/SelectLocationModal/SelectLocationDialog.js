import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import PortalModal from "../Modal/BaseModal";
import CountriesSelect from "./CountriesSelect";
import { PopUpSelect } from "./PopUpSelect";
import USZipCodeForm from "./USZipCodeForm";
import ZipCodePanel from "./ZipCodePanel/ZipCodePanel";

const initialSelectedValue = { type: "", label: "" };

const SelectLocationDialog = ({ ...props }) => {
  const [PopUpSelectIsOpen, setPopSelectUpIsOpen] = useState(false);
  const [isZipCodeFormOpen, setZipCodeFormOpen] = useState(false);
  const newLocation = useRef(initialSelectedValue);
  const [selected, setSelected] = useState(initialSelectedValue);

  const handleCloseModal = (e) => {
    props.setModalOpen(false);
    handleOnCloseModal();
    e.stopPropagation();
  };

  const handleSelectClick = (e) => {
    setPopSelectUpIsOpen(true);
    e.preventDefault();
  };

  const handleSelectedLocation = (type, label) => {
    setSelected((prev) => ({ ...prev, type: type, label: label }));
    newLocation.current = { type: type, label: label };
  };

  // Compare current lcoation with selected location if it changes
  const CompareLocation = () => {
    // If nothing is selected or change return true
    if (!newLocation.current.type) return false;

    if (props.currentLocation.type != newLocation.current.type) return true;

    if (
      props.currentLocation.type === newLocation.current.type &&
      props.currentLocation.label != newLocation.current.label
    )
      return true;
  };

  // Function to change current/global location
  const handleChangeCurrentLocation = () => {
    props.setCurrentLocation({
      ...props.currentLocation,
      ...newLocation.current,
    });
  };

  // handle Modal on Close
  const handleOnCloseModal = () => {
    if (PopUpSelectIsOpen) {
      setPopSelectUpIsOpen(false);
    }

    const isLocationChanged = CompareLocation();
    if (isLocationChanged) {
      handleChangeCurrentLocation();
    }
  };

  // Toggle ZipCOdeForm
  useEffect(() => {
    if (selected.type === "zipCode") {
      setZipCodeFormOpen(false);
    } else if (selected.type === "name") {
      setZipCodeFormOpen(true);
    }
  }, [selected]);

  //Update Selected lcoation based on currrent Location
  useEffect(() => {
    handleSelectedLocation(
      props.currentLocation.type,
      props.currentLocation.label
    );
  }, [props.currentLocation]);

  return (
    <PortalModal {...props} onClose={handleOnCloseModal}>
      <Container>
        <DialogContainer>
          <DialogHeader>
            <Title>Choose your Location</Title>
          </DialogHeader>
          <DialogBody>
            <Description>
              Delivery options and delivery speeds may vary for different
              locations
            </Description>
            <SignInButton aria-label="Sign in">
              Sign in to see your address
            </SignInButton>
            <DividerText>or enter a US zip code</DividerText>
            {isZipCodeFormOpen ? (
              <USZipCodeForm
                selected={selected}
                onFormSuccess={handleSelectedLocation}
              />
            ) : (
              <ZipCodePanel
                zipcode={selected.label}
                onChange={() => {
                  setZipCodeFormOpen(true);
                }}
              />
            )}

            <DividerText>or</DividerText>
            <CountriesSelect
              handleSelectClick={handleSelectClick}
              selected={selected}
            ></CountriesSelect>
            <CloseButtonWrapper>
              <CloseButton onClick={handleCloseModal}>Done</CloseButton>
            </CloseButtonWrapper>
          </DialogBody>
        </DialogContainer>
        <PopUpSelect
          isOpen={PopUpSelectIsOpen}
          setIsOpen={setPopSelectUpIsOpen}
          selected={selected}
          onChange={handleSelectedLocation}
        />
      </Container>
    </PortalModal>
  );
};

export default SelectLocationDialog;

const Container = styled.div`
  position: relative;
`;

const DialogContainer = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;
const DialogHeader = styled.div`
  box-sizing: border-box;
  padding-left: 1.5rem;
  background-color: #f0f2f2;
`;

const DialogBody = styled.div`
  box-sizing: border-box;
  padding: 1rem 1.5rem;
`;
const Title = styled.h3`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin: 0;
`;

const Description = styled.p`
  font-size: 12px;
`;

const SignInButton = styled.button`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #fcd200;

  background-color: #ffd814;
  font-size: 13px;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;
const CloseButton = styled.button`
  padding: 10px 14px;
  background-color: #ffd814;
  border-radius: 8px;
  border: 1px solid #fcd200;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const DividerText = styled.h5`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  color: grey;

  &::before,
  &::after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid #e7e7e7;
    margin: auto;

    margin-right: 6px;
  }

  &::after {
    margin-left: 6px;
  }
  &::before {
    margin-right: 6px;
  }
`;
