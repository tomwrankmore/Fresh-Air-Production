import React, {useState, useRef, useEffect} from "react";
import { graphql } from 'gatsby'
import styled from "styled-components";
import { PopupWidget } from "react-calendly";
import GraphQLErrorList from "../components/graphql-error-list";
import {device} from "../styles/mediaQueries"
import { colors } from "../styles/colors";
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import Layout from "../containers/layout";
import SEO from "../components/seo";
import CentralLogo from "../components/central-logo"
import BlockContent from "../components/block-content";
import Marquee from "../components/marquee"


export const query = graphql`
  query ContactPageQuery {
    contactPageContent: sanityContactPageContent {
      _rawContactHeroText
      _rawContactText
      calendlyLink
      contactHeroImage {
        asset {
          localFile {
            childImageSharp {
              gatsbyImageData(
                  width: 1024, 
                  quality: 50, 
                  placeholder: BLURRED, 
                  formats: AUTO
                )
            }
          }
        }
        alt
      }
    }
  }
`;

const ContactOuterWrapper = styled.div`
  padding: 2rem 0 ;
`

const ContactWrapper = styled.div` 
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 4rem 1rem 2rem 1rem;
  flex-direction: column;
  gap: 2rem;
  /* &.contact-page-hero {
    height: calc(100vh - 82px);
  } */
  @media ${device.mediaMinMedium} {
    flex-direction: row;
  }
  h1 {
    &:first-child {
      margin: 83.5px auto 1rem auto;
    }
    margin: 0 0 1rem 0;
    text-align: center;
    max-width: 50%;
    line-height: 1.25;
  }
  h1, p {
  }
  a {
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
  /* height: 100%; */
  width: 100%;

  &.form-columns {
    span {
      display: block;
    }
  }

  a {
    color: black;
    text-decoration: underline;
  }

  .background-image {
    width: 100%;
    height: 100%;
    min-height: 50vh;
    /* @media ${device.mediaMinMedium} {
      min-height: 100vh;
    } */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.4rem;
  }
`

const ContactPage = (props) => {

  const isBrowser = typeof window !== "undefined"

  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const heroBgImage = data.contactPageContent.contactHeroImage.asset.localFile.childImageSharp.gatsbyImageData

  const contactMarqRef = useRef()
  const outerWrapperRef = useRef()

  return (
    <Layout>
      <SEO title="Contact" />
      <CentralLogo />
      <ContactOuterWrapper ref={outerWrapperRef}>
       <Marquee 
          style={{color: colors.FABlue}}
          textContent="Don't be shy. Get in touch. Don't be shy. Get in touch. Don't be shy. Get in touch."
          ref={contactMarqRef}
          cn="home-marquee"
        />
        <ContactWrapper>
          <Column className="form-columns">
            <BgImage 
              image={heroBgImage}
              className="background-image" 
            />
          </Column>
          <Column className="form-columns">
            {/* <p>
              <span>Don't be shy. You can <a href="mailto:hello@freshairproduction.co.uk" rel="noreferrer">email us</a>.</span> 
              <span>Fill in the form on the right or <a href="tel:+442034885195" rel="noreferrer">give us a call</a> to start making podcasts, radio adverts and amazing audio.</span>
            </p>
            <p>
              <span>Email: <a href="mailto:hello@freshairproduction.co.uk" rel="noreferrer">hello@freshairproduction.co.uk</a></span>
              <span>Phone: <a href="tel:+442034885195">+44 (0)203 4885195</a></span>
            </p>
            <p>
              To enquire about working for us at Fresh Air, please email <a href="mailto:work@freshairproduction.co.uk" rel="noreferrer">work@freshairproduction.co.uk</a>
            </p> */}
            
          <BlockContent blocks={data.contactPageContent._rawContactText}/>
           
           {isBrowser ? <PopupWidget
              url={data.contactPageContent.calendlyLink}
              rootElement={document.getElementById("root")}
              text="Click here to schedule a meeting!"
              textColor="#ffffff"
              color={colors.FABlue}
            /> : null }

          </Column>
        </ContactWrapper>
      </ContactOuterWrapper>
      
    </Layout>
  )
};

export default ContactPage;