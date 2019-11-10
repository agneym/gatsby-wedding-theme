import React from "react";
import styled from "styled-components";

import cover from "../images/cover.jpg";
import CoverText from "./CoverText";
import media from "./media";

const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;

  ${media.phone`
    grid-template-columns: 1fr;
    min-height: 100vh;
    height: auto;
  `}
`;

const TextContainer = styled.div`
  align-self: center;
  text-align: center;

  ${media.phone`
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    z-index: 5;
    color: #ffffff;
    padding-bottom: 2rem;
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100vh;

  ${media.phone`
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    height: 100%;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `}
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

function Cover() {
  return (
    <Container>
      <TextContainer>
        <CoverText />
      </TextContainer>
      <ImageContainer>
        <Image src={cover} alt="" />
      </ImageContainer>
    </Container>
  );
}

export default Cover;
