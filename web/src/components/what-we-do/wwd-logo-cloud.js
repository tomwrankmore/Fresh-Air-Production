import React from "react";
import {colors} from "../../styles/colors"
import styled from "styled-components";
import ClientLogoCloud from "../client-logo-cloud"

const WwdLogoCloudWrapper = styled.div` 
   padding: 2rem 0 2rem 0; 
   background-color: white;

   h1 {
    font-weight: normal;
    padding: 0 0 2rem 2rem;
   }
`

const WwdLogoCloud = React.forwardRef((props, ref) => {
    return (
        <WwdLogoCloudWrapper>
          <h1>Our clients</h1>
          <ClientLogoCloud ref={ref}/>
        </WwdLogoCloudWrapper>
    )
})

export default WwdLogoCloud