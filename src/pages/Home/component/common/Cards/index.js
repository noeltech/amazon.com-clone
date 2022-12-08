import React from "react";
import styled from "styled-components";
import { BaseCard } from "./style";
import { Link } from "react-router-dom";
import ImageLink from "../ImageLink";
import CarouselCard from "./CarouselCard";

const Card = ({ cardTitle, to, bottomLinkLabel, children, height }) => {
  return (
    <CardContainer height={height}>
      <CardTitle>{cardTitle}</CardTitle>
      <Content>{children ? children : null}</Content>
      {bottomLinkLabel ? (
        <BottomLink to={to}>{bottomLinkLabel}</BottomLink>
      ) : null}
    </CardContainer>
  );
};

const SingleContentCard = ({
  cardTitle,
  to,
  bottomLinkLabel,
  imgSrc,
  label,
}) => {
  return (
    <Card cardTitle={cardTitle} to={to} bottomLinkLabel={bottomLinkLabel}>
      <ImageLink to={to} imgSrc={imgSrc} label={label} />
    </Card>
  );
};

export { Card, SingleContentCard, CarouselCard };

const CardContainer = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: ${(props) => (props.height ? props.height : "400px")};
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
`;

const Content = styled.div`
  height: 100%;
`;

const BottomLink = styled(Link)`
  font-size: 0.9rem;
  color: #007185;

  text-decoration: none;
`;
