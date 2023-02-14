import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CentralLogo from "../components/central-logo"

const ContactWrapper = styled.div` 
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  flex-direction: row;
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

const Column = styled.div` 
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 1rem;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Contact" />
    <CentralLogo />
    <ContactWrapper>
      <Column>
        <h1>Contact</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, nemo reiciendis, odio soluta numquam possimus a quis cupiditate corrupti nulla nam quas porro placeat tenetur similique atque voluptate ad voluptatibus!</p>
      </Column>
      <Column>
        <h1>Thanks for your message, we'll get back to you as soon as possible!</h1>
      </Column>
    </ContactWrapper>
  </Layout>
);

export default NotFoundPage;
