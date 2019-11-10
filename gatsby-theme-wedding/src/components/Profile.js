import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import ProfileCard from "./ProfileCard";
import media from "./media";
import flowersImg from "../images/flowers.gif";
import brideImg from "../images/bride.jpg";
import groomImg from "../images/groom.jpg";

const Container = styled.section`
  padding: 6rem 2rem;
`;

const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 8rem;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${media.phone`
    flex-direction: column;
  `}
`;

const QUERY = graphql`
  query fetchProfiles {
    event {
      profiles {
        description
        name
        links {
          facebook
          instagram
        }
      }
    }
  }
`;

function Profile() {
  const {
    event: { profiles }
  } = useStaticQuery(QUERY);
  return (
    <Container>
      <TitleContainer>
        <Image src={flowersImg} alt="flowers" />
        <Title data-sal="slide-up" data-sal-delay="200">
          Bride & Groom
        </Title>
      </TitleContainer>
      <CardContainer>
        <ProfileCard image={brideImg} {...profiles[0]} />
        <ProfileCard image={groomImg} {...profiles[1]} />
      </CardContainer>
    </Container>
  );
}

export default Profile;
