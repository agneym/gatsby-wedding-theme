import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLink = styled.a`
  color: unset;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.4rem;
  transition: color 0.1s ease-out;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

function SocialMediaLink({ link, children }) {
  return (
    <StyledLink href={link} target="_blank">
      {children}
    </StyledLink>
  );
}

SocialMediaLink.propTypes = {
  link: PropTypes.string.isRequired
};

export default SocialMediaLink;
