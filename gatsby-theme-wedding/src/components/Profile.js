import React from "react";
import styled from "styled-components";

import ProfileCard from "./ProfileCard";
import media from "./media";
import flowersImg from "../images/flowers.gif";
import sruthiImg from "../images/sruthi.jpg";
import naveenImg from "../images/naveen.jpg";

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

const profiles = {
  sruthi: {
    image: sruthiImg,
    name: "Sruthy Menon",
    description: `People who know sruthi would aptly describe her as a cheery, enthusiastic and loving person, always looking for an opportunity to socialize. Amongst her many passions, she is a trained carnatic singer, dancer and is also an animal lover. On the most important day of her life, she hopes to see you all there to celebrate and create memories with her to cherish forever.`,
    links: {
      instagram: "https://instagram.com/sruthimenon94/",
      facebook: "https://www.facebook.com/sruthimenon1994"
    }
  },
  naveen: {
    image: naveenImg,
    name: "Naveen",
    description: `Speaking about Naveen, he could be best described as gentle, light-hearted, out-going and loving person. His passions include cricket, travelling. He wants all to be a part of the celebration on this auspicious day and create memories which he would hold on to forever.`,
    links: {
      instagram: "https://instagram.com/naveen_suresh91/",
      facebook: "https://www.facebook.com/naveen.suresh.9"
    }
  }
};

function Profile() {
  return (
    <Container>
      <TitleContainer>
        <Image src={flowersImg} alt="flowers" />
        <Title data-sal="slide-up" data-sal-delay="200">
          Bride & Groom
        </Title>
      </TitleContainer>
      <CardContainer>
        <ProfileCard {...profiles.sruthi} />
        <ProfileCard {...profiles.naveen} />
      </CardContainer>
    </Container>
  );
}

export default Profile;
