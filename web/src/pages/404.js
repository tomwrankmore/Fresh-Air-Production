import React from "react";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { Link } from "gatsby";
import CentralLogo from "../components/central-logo"

const FourZeroFour = styled.div` 
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  flex-direction: column;
  background-color: ${colors.FABlue};
  h1 {
    margin-bottom: 1rem;
  }
  h1, p {
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {text-decoration: underline}
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <CentralLogo />
    <FourZeroFour>
      <h1>Sorry, that page doesn't appear to exist!</h1>
      <Link to="/">Take me home...</Link>
    </FourZeroFour>
  </Layout>
);

export default NotFoundPage;
