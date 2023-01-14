import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { Link } from "gatsby";
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
      <form 
        name="contact" 
        action="/success"
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </Column>
    </ContactWrapper>
  </Layout>
);

export default NotFoundPage;
