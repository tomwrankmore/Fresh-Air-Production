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
      _rawContactText
      marqueeText
      firstNameField
      surnameNameField
      emailField
      subjectField
      messageField
      submitField
      formCompleteField
      calendlyLink
      contactHeroImage {
        alt
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

const ContactForm = styled.form`
  max-width: 500px;
  width: 100%;

  div.form-section {
    margin-bottom: 1rem;
    fieldset.name-fieldset {
      display: flex;
      gap: 1rem;
      div {
        flex: 1;
        input {
          width: 100%;
        }
      }
    }
    label {
      margin-right: 0.5rem;
      margin-bottom: 0.25rem;
      display: block;
    }
    input,
    textarea#message {
      border: solid 1px ${colors.FABlue};
      padding: 1rem 0.75rem;
    }
    input.email,
    input.subject {
      width: 100%;
    }
    textarea#message {
      width: 100%;
    }
    button.submit-btn {
      background-color: transparent;
      border: none;
      text-decoration: underline;
      font-size: 1rem;
      padding: 0;
      &:hover {
        cursor: pointer;
        color: ${colors.FABlue};
      }
    }
  }
`;

const ContactPage = props => {
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formSuccesState, setFormSuccesState] = useState(false);

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formState })
    })
      // .then(() => setFormSuccesState(true))
      // .then(() => setFormState({fname: "", lname: "", email: "", subject: "", message: ""}))
      .then(() => navigate("/form-submitted/"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
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

  const heroBgImage = data.contactPageContent.contactHeroImage.asset.localFile.childImageSharp.gatsbyImageData;

  const contactMarqRef = useRef();
  const outerWrapperRef = useRef();

  console.log('data', data)

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
            <BlockContent blocks={data.contactPageContent._rawContactText} />

            {/* {isBrowser ? <PopupWidget
              url={data.contactPageContent.calendlyLink}
              rootElement={document.getElementById("root")}
              text="Click here to schedule a meeting!"
              textColor="#ffffff"
              color={colors.FABlue}
            /> : null } */}

            {!formSuccesState ? (
              <ContactForm
                name="contact-form"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="contact-form" value="contact-form" />
                <div className="form-section">
                  <fieldset className="name-fieldset">
                    <div>
                      <label htmlFor="fname">{data.contactPageContent.firstNameField}:</label>
                      <input
                        id="fname"
                        type="text"
                        name="fname"
                        onChange={handleChange}
                        value={formState.fname}
                        required
                        // placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lname">{data.contactPageContent.surnameNameField}:</label>
                      <input
                        id="lname"
                        type="text"
                        name="lname"
                        onChange={handleChange}
                        value={formState.lname}
                        required
                        // placeholder="Enter your last name"
                      />
                    </div>
                  </fieldset>
                </div>
                <div className="form-section">
                  <label htmlFor="email">{data.contactPageContent.emailField}:</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formState.email}
                    required
                    className="email"
                    // placeholder="Enter your email"
                  />
                </div>
                <div className="form-section">
                  <label htmlFor="subject">{data.contactPageContent.subjectField}:</label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    onChange={handleChange}
                    value={formState.subject}
                    required
                    className="subject"
                  ></input>
                </div>
                <div className="form-section">
                  <label>Message:</label>
                  <textarea
                    name="message"
                    id="message"
                    onChange={handleChange}
                    value={formState.message}
                    required
                  ></textarea>
                </div>
                <div className="form-section">
                  <button type="submit" className="submit-btn">
                    {data.contactPageContent.submitField}
                  </button>
                </div>
              </ContactForm>
            ) : (
              <h3>{data.contactPageContent.formCompleteField}</h3>
            )}
          </Column>
        </ContactWrapper>
      </ContactOuterWrapper>

      {/* <!-- Podscribe pixel --> */}
      <Script strategy="off-main-thread">
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
                w.podscribe('lead', {
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
            category: 'Contact',
            type: '',  // Dynamically populate from session data
            value: '10',  // Dynamically populate from session data
            currency: '£',  
          });
        })(window, document)
        `}
      </Script>

      {/* Second Spotify Pixel Feb 2024 */}

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
              category: 'Contact Form',
              type: '',  // Dynamically populate from session data
              value: '5',  // Dynamically populate from session data
              currency: 'GBP',  
            });
          })(window, document);
        `}
      </Script>
    </Layout>
  );
};

export default ContactPage;
