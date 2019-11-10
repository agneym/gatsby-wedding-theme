import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import SocialMediaLink from "./SocialMediaLink";
import media from "./media";

const Container = styled.article`
  margin: 2rem;
  width: 30%;
  text-align: center;

  ${media.phone`
    width: 90%;
  `}
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
  display: block;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.1);
`;

const Name = styled.h3`
  font-family: ${props => props.theme.fonts.main};
`;

function ProfileCard({ image, name, description, links }) {
  return (
    <Container>
      <Image src={image} alt="" />
      <div
        css={`
          text-align: center;
        `}
      >
        <Name>{name}</Name>
        <p>{description}</p>
      </div>
      <div
        css={`
          text-align: center;
          margin: 1.5rem 0;
        `}
      >
        <SocialMediaLink link={links.instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </SocialMediaLink>
        <SocialMediaLink link={links.facebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </SocialMediaLink>
      </div>
    </Container>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.shape({
    instagram: PropTypes.string,
    facebook: PropTypes.string
  }).isRequired
};

export default ProfileCard;
