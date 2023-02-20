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
  }
`

const SubscribeForm = (props) => {

  const [formState, setFormState] = useState(
    {
      email: "",
      message: ""
    }
  )

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFormState({
      [name]: value
    });
  };
  
  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(formState.email)
    setFormState({message: result.msg})
    console.log("formStateformStateformState", result.msg)
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
          <span className="screen-reader-text">Email address</span>
          <input 
            className="subscribe-email" 
            type="email" 
            name="email" 
            placeholder="Enter Email Address..." 
            value={formState.email}
            onChange={handleInputChange}
            />
        </label>
      </div>
      <button className="button" type="submit">
        Subscribe
      </button>
      <div className="message" dangerouslySetInnerHTML={{__html: formState.message}} />
    </StyledSubscribeForm>
  )
}

export default SubscribeForm