import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { countries } from "../../data/countries";

const CountriesSelect = ({ handleSelectClick, selected }) => {
  const [label, setLabel] = useState("");
  // const OptionList = countries.map((item) => (
  //   <Option key={item.name} value={item.name}>
  //     {item.name}
  //   </Option>
  // ));

  // useEffect(() => {
  //   if (newLocation.type===""){
  //     if(currentLocation.type){

  //     }
  //   }else if(newLocation.type==="zipCode"){

  //   }

  // }, [currentLocation,newLocation])

  return (
    <SelectButton onClick={handleSelectClick}>
      {/* <Select name="countries" id="countries" disabled={true}>
        {OptionList}
      </Select> */}
      <ButtonInner>
        <Label>
          {selected.type === "zipCode" ? "Ship Outside the US" : selected.label}
        </Label>
        <DropDownIcon>{">"}</DropDownIcon>
      </ButtonInner>
    </SelectButton>
  );
};

export default CountriesSelect;

const SelectButton = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  color: #0f1111;
  background-color: #f0f2f2;
  /* box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5); */
  box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  cursor: pointer;

  &:hover {
    background-color: #e3e6e6;
  }
`;
const ButtonInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 14px;
`;
const Label = styled.span`
  font-size: 13px;
  font-weight: 600;
`;
const DropDownIcon = styled.span`
  font-weight: 600;
`;
const Select = styled.select`
  padding: 10px;
  width: 100%;
`;

const Option = styled.option``;

const Wrapper = styled.span`
  display: inline-block;
`;
