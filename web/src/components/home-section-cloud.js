import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../styles/colors";

const TagCloudWrapper = styled.div` 
    background-color: ${colors.FABlue};
    color: white;
`

const ExtendedContainer = styled.div` 
    margin: 0 auto;
    width: 150vw;
`

const TagCloud = (props) => {
    return (
        <TagCloudWrapper>
            <ExtendedContainer>
                <h1>
                    NEWS SCIENCE SPORT HEALTH WELLBEING NEWS SCIENCE SPORT HEALTH WELLBEING NEWS SCIENCE SPORT HEALTH WELLBEING NEWS SCIENCE SPORT HEALTH WELLBEING NEWS SCIENCE SPORT HEALTH WELLBEING NEWS SCIENCE SPORT HEALTH WELLBEING
                </h1>
            </ExtendedContainer>
        </TagCloudWrapper>
    )
}

export default TagCloud