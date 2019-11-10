import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment } from "react";
import styled from "styled-components";

import animationParams from "./animation-params";
import media from "./media";

const Heart = styled.svg`
  display: block;
  margin: 3rem auto;
  fill: ${props => props.theme.colors.primary};
`;

const Text = styled.span`
  margin: 1rem;
  font-size: 1.5rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 400;

  ${Text} {
    font-size: 4rem;
  }

  ${media.phone`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
  `}
`;

const ImpText = styled(Text)`
  color: ${props => props.theme.colors.secondary};

  ${media.phone`
    color: ${props => props.theme.colors.light};
    font-weight: 600;
  `}
`;

const QUERY = graphql`
  query {
    event {
      profiles {
        name
      }
      events {
        title
        occasion {
          place {
            name
          }
        }
      }
    }
  }
`;

function CoverText() {
  const { event } = useStaticQuery(QUERY);
  return (
    <Fragment>
      <Heading>
        <Heart
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="38px"
          height="35px"
          viewBox="0 0 38 35"
          version="1.1"
        >
          <g>
            <path d="M27.6617245,0 C23.6258225,0 20.1656768,2.45818023 18.6933857,5.95832977 C17.2210947,2.45818023 13.760949,0 9.72542087,0 C4.68979662,0 0.54809007,3.82653606 0.0500982738,8.73093275 C0.0168240472,9.05769313 0,9.38968766 0,9.72542087 C0,21.5418839 14.5015809,27.1188686 18.6933857,35 C22.8851906,27.1192424 37.3867715,21.5422577 37.3867715,9.72542087 C37.3867715,9.38968766 37.3699474,9.05769313 37.3366732,8.73093275 C36.8383076,3.82653606 32.6969749,0 27.6617245,0 Z" />
          </g>
        </Heart>
        <Text>{event.profiles[0].name}</Text>
        <Text>&</Text>
        <Text>{event.profiles[1].name}</Text>
      </Heading>
      <Text as="p">Join us on</Text>
      <ImpText as="p" {...animationParams} data-sal-delay="100">
        {event.events[0].title}
      </ImpText>
      <Text as="p">at</Text>
      <ImpText as="p" {...animationParams}>
        {event.events[0].occasion.place.name}
      </ImpText>
    </Fragment>
  );
}

export default CoverText;
