import React, { useState, useEffect } from "react";
import styled from "styled-components";

const USZipCodeForm = ({ selected, onFormSuccess }) => {
  const [errors, setErrors] = useState("");
  const [values, setValues] = useState("");

  // Validate
  const validate = (value) => {
    const errorMessage = "Please enter a valid US zip code";
    if (value === "" || value.length <= 4) {
      return errorMessage;
    } else {
      return "";
    }
  };

  // Handle OnChange
  const handleOnchange = (event) => {
    const value = event.target.value;
    setValues(value);
  };

  // haandle OnSubmit
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let errors = validate(values);

    setErrors(errors);
    if (errors) {
      console.log(errors);
    } else {
      //  DO SUCCESS LOGIC
      onFormSuccess("zipCode", values);
    }
  };

  useEffect(() => {
    if (selected.type === "zipCode") setValues(selected.label);
    return () => {
      setValues("");
    };
  }, [selected]);

  return (
    <Container>
      <RowContainer>
        <ZipCodeInput
          maxLength={5}
          value={values}
          onChange={handleOnchange}
        ></ZipCodeInput>
        <ApplyButton onClick={handleOnSubmit}>Apply</ApplyButton>
      </RowContainer>
      {errors && <ErrorMessage>{errors}</ErrorMessage>}
    </Container>
  );
};

export default USZipCodeForm;

const Container = styled.form``;

const RowContainer = styled.div`
  display: flex;
  grid-gap: 5px;
  height: 30px;
`;

const ZipCodeInput = styled.input`
  width: 100%;
`;

const ApplyButton = styled.button`
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 7px;
  border: 1px solid #d5d9d9;
  background-color: inherit;
  cursor: pointer;

  &:hover {
    background-color: #e5e4e2;
  }
`;
const ErrorMessage = styled.p`
  margin: 0;
  font-size: 13px;
  color: red;
`;
