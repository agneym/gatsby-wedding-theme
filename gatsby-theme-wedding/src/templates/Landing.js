import React, { Fragment } from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Cover from "../components/Cover";
import Map from "../components/Map";
import CountdownSection from "../components/CountdownSection";
import Profile from "../components/Profile";

const Landing = () => {
  return (
    <Fragment>
      <SEO />
      <Layout>
        <Cover />
        <Profile />
        <CountdownSection />
        <Map />
      </Layout>
    </Fragment>
  );
};

export default Landing;
