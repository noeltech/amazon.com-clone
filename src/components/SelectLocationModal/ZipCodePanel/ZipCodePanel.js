import React from "react";
import styled from "styled-components";

const ZipCodePanel = ({ zipcode, onChange }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    onChange();
  };
  return (
    <Container>
      <Wrapper>
        <Label>
          Deliver to <ZipCode>{zipcode}</ZipCode>
          <ButtonWrapper>
            <ChangeButton href="#" onClick={handleOnClick}>
              Change
            </ChangeButton>
          </ButtonWrapper>
        </Label>
      </Wrapper>
    </Container>
  );
};

export default ZipCodePanel;

const Container = styled.div``;

const Wrapper = styled.div`
  border: 1px solid #e77600;
  border-radius: 10px;
  padding: 14px;
  background-color: #fef8f2;
`;

const Label = styled.p`
  font-size: 14px;
  margin: 0;
`;
const ZipCode = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const ChangeButton = styled.a`
  text-decoration: none;
  color: #001785;
`;

const ButtonWrapper = styled.span`
  margin-left: 5px;
`;
