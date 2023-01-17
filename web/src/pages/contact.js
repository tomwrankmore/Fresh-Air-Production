import React, {useState} from "react";
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

const ContactPage = () => {

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
          <h1>Contact</h1>
          <p>Don't hesitate to get in touch if there's anything you'd like to discuss</p>
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
        {/* <form 
          name="contact" 
          action="/form-success"
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
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
        </form> */}
        </Column>
      </ContactWrapper>
    </Layout>
  )
};

export default ContactPage;
