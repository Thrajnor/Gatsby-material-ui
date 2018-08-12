import React from "react";

import "assets/scss/material-kit-react.css?v=1.1.0";
import Layout from "components/layout/layout";
import LandingPage from "pages/LandingPage/LandingPage";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <LandingPage></LandingPage>
      </Layout>
    );
  }
}

export default Index;
