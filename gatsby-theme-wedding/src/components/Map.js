import React from "react";
import styled from "styled-components";

import DateList from "./DateList";
import media from "./media";
import animationParams from "./animation-params";

const Container = styled.section`
  height: 100vh;
  display: flex;
  padding-bottom: 0.5rem;

  & > * {
    flex: 1 100%;
  }

  ${media.phone`
    height: auto;
    flex-direction: column-reverse;
  `}
`;

const TextContainer = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`;

const MapContainer = styled.div``;

const GoogleMap = styled.iframe`
  border: 0;
  width: 100%;
  height: 50%;
`;

function Map() {
  return (
    <Container>
      <MapContainer>
        <GoogleMap
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15699.277005641103!2d76.217312!3d10.356333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c755f1e72437318!2sMCP%20International%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1570207817269!5m2!1sen!2sin"
          frameBorder="0"
          allowfullscreen=""
        ></GoogleMap>
        <GoogleMap
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15716.567645018256!2d76.3053825!3d10.0051346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd13d905253660fdd!2sThe%20Renai%20cochin!5e0!3m2!1sen!2sin!4v1570208516340!5m2!1sen!2sin"
          frameBorder="0"
          allowfullscreen=""
        ></GoogleMap>
      </MapContainer>
      <TextContainer>
        <Heading {...animationParams}>When & Where</Heading>
        <DateList />
      </TextContainer>
    </Container>
  );
}

export default Map;
