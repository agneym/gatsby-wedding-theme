import React from "react";
import styled from "styled-components";

import logoImg from "../images/icon.png";

const StyledFooter = styled.footer`
  height: ${props => props.theme.footer.height};
  background-color: #2a2a2a;
  margin-top: 0.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Content = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Content>
        <img src={logoImg} alt="" />
      </Content>
    </StyledFooter>
  );
}

export default Footer;
