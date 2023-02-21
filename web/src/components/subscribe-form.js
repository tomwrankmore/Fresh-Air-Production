import React, {useState} from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp"
import { colors } from "../styles/colors";

const StyledSubscribeForm = styled.form`
  .message {
    color: ${colors.FABlue};
    font-weight: bold;
    text-align: center;
    width:100%;
  }
  .form-row {
    width:100%;
  }
  input {
    border: solid 1px #00AFEE;
    padding: 1rem 0.75rem;
    text-align:center;
  }
  p.acknowledge {
    font-size: 0.5rem;
    display: block;
    margin: 1rem auto 1rem auto;
  }
  button.submitButton {
    margin: 0 auto;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const SubscribeForm = (props) => {

  const [formState, setFormState] = useState(
    {
      email: "",
      fname: "",
      lname: "",
      message: ""
    }
  )

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(
      formState.email, 
      {
        FNAME: formState.fname, 
        LNAME: formState.lname
      })
    setFormState({email: "", fname: "", lname: "", message: result.msg})
  }

  return (
    <StyledSubscribeForm 
      name="subscribeForm" 
      method="POST" 
      id="subscribe-form" 
      className="subscribe-form"
      onSubmit={handleSubmit}
    >
      <div className="form-row">
        <label>
          <span className="screen-reader-text">First name</span>
          <input 
            className="subscribe-fname" 
            type="fname" 
            name="fname" 
            placeholder="First name" 
            value={formState.fname}
            onChange={handleInputChange}
            />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span className="screen-reader-text">Last name</span>
          <input 
            className="subscribe-lname" 
            type="lname" 
            name="lname" 
            placeholder="Last name" 
            value={formState.lname}
            onChange={handleInputChange}
            />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span className="screen-reader-text">Email address</span>
          <input 
            className="subscribe-email" 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={formState.email}
            onChange={handleInputChange}
            />
        </label>
      </div>
      <p className="acknowledge">I ACKNOWLEDGE THAT I HAVE REVIEWED AND HEREBY AGREE TO THE PRIVACY POLICY.</p>
      <button className="submitButton button" type="submit">
        Sign up
      </button>
      <div className="message" dangerouslySetInnerHTML={{__html: formState.message}} />
    </StyledSubscribeForm>
  )
}

export default SubscribeForm