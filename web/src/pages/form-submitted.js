import React, { useState, useRef, useEffect } from "react";
import { graphql, Script, navigate } from "gatsby";
import styled from "styled-components";
import { PopupWidget } from "react-calendly";
import GraphQLErrorList from "../components/graphql-error-list";
import { device } from "../styles/mediaQueries";
import { colors } from "../styles/colors";
import { BgImage, convertToBgImage } from "gbimage-bridge";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import CentralLogo from "../components/central-logo";
import BlockContent from "../components/block-content";
import Marquee from "../components/marquee";

export const query = graphql`
  query ContactPageQuery {
    contactPageContent: sanityContactPage {
      _rawContactHeroText
      marqueeText
      formCompleteField
      calendlyLink
      contactHeroImage {
        asset {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1024, quality: 50, placeholder: BLURRED, formats: AUTO)
            }
          }
        }
        alt
      }
    }
  }
`;

const ContactOuterWrapper = styled.div`
  padding: 2rem 0;
`;

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
  h1,
  p {
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

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
`;

const ContactFormSubmittedPage = props => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const isBrowser = typeof window !== "undefined";

  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const heroBgImage =
  data?.contactPageContent?.contactHeroImage?.asset?.localFile.childImageSharp.gatsbyImageData;

  const contactMarqRef = useRef();
  const outerWrapperRef = useRef();

  return (
    <Layout>
      <SEO title="Contact" />
      <CentralLogo />
      <ContactOuterWrapper ref={outerWrapperRef}>
        <Marquee
          style={{ color: colors.FABlue }}
          textContent={data.contactPageContent.marqueeText}
          ref={contactMarqRef}
          cn="home-marquee"
        />
        <ContactWrapper>
          <Column className="form-columns">
            <BgImage image={heroBgImage} className="background-image" />
          </Column>
          <Column className="form-columns">
            {/* <BlockContent blocks={data.contactPageContent._rawContactText}/> */}
            <h3>{data.contactPageContent.formCompleteField}</h3>
          </Column>
        </ContactWrapper>
      </ContactOuterWrapper>

      {/* <!-- Podscribe pixel --> */}
        <Script>
          {`
            (function (w, d) {
              var id = 'podscribe-capture',
              n = 'script';
              var e = d.createElement(n);
              e.id = id;
              e.async = true;
              e.src = 'https://d34r8q7sht0t9k.cloudfront.net/tag.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
              e.addEventListener('load', function() {
                w.podscribe('init', { user_id: '5b5e9391-684f-4f68-bf83-f2d963a6d467', advertiser: 'freshair' });
                w.podscribe('signup', {
                  hashed_email: [HASHED_EMAIL],
                });
              })
            })(window, document);
          `}
        </Script>
      {/* <!-- /Podscribe pixel --> */}

      {/* Spotify Lead Pixel */}
      <Script>
        {`
          (function(w, d){
            var id='spdt-capture', n='script';
            if (!d.getElementById(id)) {
              w.spdt =
                w.spdt ||
                function() {
                  (w.spdt.q = w.spdt.q || []).push(arguments);
                };
              var e = d.createElement(n); e.id = id; e.async=1;
              e.src = 'https://pixel.byspotify.com/ping.min.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
            }
            w.spdt('conf', { key: '4e992a6ef705413fbe4c8768ddc3b801' });
            w.spdt('lead', {
              category: 'Request for Quote',
              type: '',  // Dynamically populate from session data
              value: '5000',  // Dynamically populate from session data
              currency: '£',  
            });
          })(window, document)
        `}
      </Script>

      <Script>
        {`
          (function(w, d){
            var id='spdt-capture', n='script';
            if (!d.getElementById(id)) {
              w.spdt =
                w.spdt ||
                function() {
                  (w.spdt.q = w.spdt.q || []).push(arguments);
                };
              var e = d.createElement(n); e.id = id; e.async=1;
              e.src = 'https://pixel.byspotify.com/ping.min.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
            }
            w.spdt('conf', { key: 'f4d14b1d6dd7407f95aa43d929665572' });
            w.spdt('lead', {
              category: 'Email Capture',
              type: '',  // Dynamically populate from session data
              value: '2500',  // Dynamically populate from session data
              currency: 'GBP',  
            });
          })(window, document);
        `}
      </Script>
    </Layout>
  );
};

export default ContactFormSubmittedPage;
