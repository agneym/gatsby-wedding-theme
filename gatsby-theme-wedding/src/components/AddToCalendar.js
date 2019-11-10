import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  margin: 0 0.5rem;
  color: rgb(0, 0, 0);
  text-decoration: underline;
  padding: 0.5rem;
  transition: color 0.2s ease-out;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

function AddToCalendar({ google, outlook }) {
  return (
    <Container>
      <p>Add to your Calendar:</p>
      <Link target="_blank" rel="noopener noreferrer" href={google}>
        Google
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={outlook}
        css={`
          margin-left: 0;
        `}
      >
        Outlook
      </Link>
    </Container>
  );
}

AddToCalendar.propTypes = {
  google: PropTypes.string.isRequired,
  outlook: PropTypes.string.isRequired
};

export default AddToCalendar;
