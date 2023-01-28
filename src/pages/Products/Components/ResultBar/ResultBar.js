import React from "react";
import styled from "styled-components";

const ResultBar = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextResult>12 of 10000 results</TextResult>
        <SortByWidget>
          <SelectInput name="Sort by">
            <option value="">Sort by</option>
          </SelectInput>
        </SortByWidget>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ResultBar;

const SortByWidget = styled.div``;

const SelectInput = styled.select``;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* border-bottom: 1px solid grey; */
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.2);
  padding-top: 10px;
  padding-bottom: 10px;
`;

const TextResult = styled.p`
  height: 16px;
  padding: 0;
  margin: 0;
  font-size: 14px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1000px;
  width: 80%;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 1600px) {
    width: 100%;
  }
`;
