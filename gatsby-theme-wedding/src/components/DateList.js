import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendar,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import AddToCalendar from "./AddToCalendar";

const config = [
  {
    title: "03-November-2019",
    occasion: [
      {
        name: "Thaliketu",
        place: "Vengattumpilly Shiva Temple",
        time: "11:40AM - 12:15PM"
      },
      {
        name: "Lunch & Celebrations",
        place: "MCP International Auditorium, Irinjalakuda",
        time: "12:30PM"
      }
    ],
    calendar: {
      google:
        "http://www.google.com/calendar/event?action=TEMPLATE&dates=20191103T070000Z%2F20191103T100000Z&text=Sruthi%20Naveen%20Wedding&location=MCP%20International%20Auditorium%2C%20Irinjalakuda&details=",
      outlook:
        "https://outlook.live.com/owa/?body=&enddt=20191009T185749&location=MCP%20International%20Auditorium%2C%20Irinjalakuda&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=20191009T185749&subject=Sruthi%20Naveen%20Wedding"
    }
  },
  {
    title: "04-November-2019",
    occasion: [
      {
        name: "Reception",
        place: "Renai Cochin",
        time: "06:30PM - 09:30PM"
      }
    ],
    calendar: {
      google:
        "http://www.google.com/calendar/event?action=TEMPLATE&dates=20191104T010000Z%2F20191104T040000Z&text=Sruthi%20Naveen%20Reception&location=Renai%20Palarivattom&details=",
      outlook:
        "https://outlook.live.com/owa/?body=&enddt=20191009T185909&location=Renai%20Cochin&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=20191009T185749&subject=Sruthi%20Naveen%20Reception"
    }
  }
];

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

function DateList() {
  return (
    <Fragment>
      {config.map(item => (
        <Container key={item.title}>
          <SectionTitle>
            <StyledIcon icon={faCalendar} color="red" />
            <span> {item.title}</span>
          </SectionTitle>
          <List>
            {item.occasion.map(occasion => (
              <ListItem key={occasion.name}>
                <span>{occasion.name} </span>
                <p>
                  <StyledIcon icon={faMapMarkerAlt} />
                  <strong> {occasion.place}</strong>
                </p>
                <p>
                  <StyledIcon icon={faClock} />
                  <strong> {occasion.time}</strong>
                </p>
              </ListItem>
            ))}
          </List>
          <AddToCalendar
            google={item.calendar.google}
            outlook={item.calendar.outlook}
          />
        </Container>
      ))}
    </Fragment>
  );
}

export default DateList;
