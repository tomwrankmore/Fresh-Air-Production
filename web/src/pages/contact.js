import React, {useState} from "react";
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import {device} from "../styles/mediaQueries"
import { colors } from "../styles/colors";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CentralLogo from "../components/central-logo"

const ContactWrapper = styled.div` 
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  flex-direction: row;
  background-color: ${colors.FADarkerBlue};
  h1 {
    margin: 83.5px 0 1rem 0;
    text-align: center;
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
  align-items: center;
  justify-content: center;
  height: 100%;

  .background-image {
    width: 100%;
    min-height: 50vh;
    @media ${device.mediaMinMedium} {
      min-height: 100vh;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ContactPage = () => {

  const { heroBackgroundImage } = useStaticQuery(
    graphql`
      query {
        heroBackgroundImage: file(relativePath: { eq: "fresh-air-contact.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1024
              quality: 50
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(heroBackgroundImage);
  const bgImage = convertToBgImage(pluginImage);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })
 
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success!"))
      .then(() => setFormState({name: "",email: "",message: ""}))
      .catch(error => alert(error));

    e.preventDefault();
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value, 
    })
  }
  
  return (
    <Layout>
      <SEO title="Contact" />
      <CentralLogo />
      <ContactWrapper>
        <Column>
          <h1>Don't be shy...<br/>Get in touch with us</h1>
        </Column>
        <Column>
          <BgImage 
            image={pluginImage}
            className="background-image" 
          />
        </Column>
      </ContactWrapper>
      <ContactWrapper>
        <Column>
          <p>Don't be shy. You can email us. Fill in the form on the right or give us a call to start making podcasts, radio adverts and amazing audio.</p>

          <p>
            <span>Email: hello@freshairproduction.co.uk</span>
            <span>Phone: +44 (0)203 4885195</span>
          </p>
          <p>
            To enquire about working for us at Fresh Air, please email work@freshairproduction.co.uk
          </p>

        </Column>
        <Column>
          <form 
            name="fresh-air-contact-form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">Name</label>
              <input 
                id="name"
                type="text" 
                name="name"
                onChange={handleChange}
                value={formState.name}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label>Message: 
                <textarea 
                  name="message" 
                  id="message"
                  onChange={handleChange}
                  value={formState.message}
                ></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Column>
      </ContactWrapper>
    </Layout>
  )
};

export default ContactPage;
