import React from "react";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";

// @import '../styles/custom-media.css';
// @import '../styles/custom-properties.css';

export const Content = styled.div` 
    background-color: white;
    min-height: calc(100% - 73px - 120px);
    overflow-x: hidden;
    @media ${device.mediaMinSmall} {
        min-height: calc(100% - 88px - 150px);
        overflow-x: inherit;
    }
`