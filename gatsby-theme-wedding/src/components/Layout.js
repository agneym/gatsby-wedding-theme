import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import Footer from "./Footer";

const Main = styled.main`
  position: relative;
  height: 100%;
  z-index: 100;
  background-color: #ffffff;
  margin-bottom: ${props => props.theme.footer.height};
  overflow-x: hidden;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Main css={``}>{children}</Main>
        <Footer />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
