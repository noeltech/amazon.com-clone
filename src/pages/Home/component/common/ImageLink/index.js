import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImageLink = ({ to, imgSrc, label }) => {
  return (
    <LinkWrapper to={to}>
      <ImageWrapper>
        <Image src={imgSrc} />
      </ImageWrapper>
      {label ? <Label>{label}</Label> : null}
    </LinkWrapper>
  );
};

export default ImageLink;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: 0.9rem;
  color: black;
  height: 100%;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 9;
  flex-basis: 0;
  margin-inline: auto;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;

  height: 100%;
`;

const Label = styled.span`
  flex-grow: 1;
`;
