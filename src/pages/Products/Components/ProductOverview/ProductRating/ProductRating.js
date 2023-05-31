import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

function ProductRating({ ratingValue, ratingCount }) {
  return (
    <Container>
      <RatingValue>{ratingValue}</RatingValue>
      <RatingIcon>
        <ReactStars
          count={5}
          size={16}
          activeColor="#ffd700"
          value={ratingValue}
        />
      </RatingIcon>
      <RateCount>({ratingCount})</RateCount>
    </Container>
  );
}

export default ProductRating;

const Container = styled.div`
  margin-top: 8px;
  display: flex;

  align-items: center;
`;

const RatingValue = styled.span`
  padding-right: 8px;
`;

const RatingIcon = styled.span`
  display: inline-block;
  padding-right: 8px;
`;

const RateCount = styled.span`
  color: #007185;
`;
