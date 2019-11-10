import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendar,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import AddToCalendar from "./AddToCalendar";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
  opacity: 0.8;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin: 3rem 0 0;
  }
`;

const QUERY = graphql`
  query {
    event {
      events {
        title
        occasion {
          name
          place {
            name
          }
          time
        }
        calendar {
          google
          outlook
        }
      }
    }
  }
`;

function DateList() {
  const {
    event: { events }
  } = useStaticQuery(QUERY);
  return (
    <Fragment>
      {events.map(event => (
        <Container key={event.title}>
          <SectionTitle>
            <StyledIcon icon={faCalendar} color="red" />
            <span> {event.title}</span>
          </SectionTitle>
          <List>
            <ListItem key={event.occasion.name}>
              <span>{event.occasion.name} </span>
              <p>
                <StyledIcon icon={faMapMarkerAlt} />
                <strong> {event.occasion.place.name}</strong>
              </p>
              <p>
                <StyledIcon icon={faClock} />
                <strong> {event.occasion.time}</strong>
              </p>
            </ListItem>
          </List>
          <AddToCalendar
            google={event.calendar.google}
            outlook={event.calendar.outlook}
          />
        </Container>
      ))}
    </Fragment>
  );
}

export default DateList;
