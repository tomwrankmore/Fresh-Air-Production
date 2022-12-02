import React from "react";
import { device } from "../styles/media-queries";
import styled from "styled-components";

// @import '../styles/custom-media.css';
// @import '../styles/custom-properties.css';

export const Content = styled.div` 
    background-color: white;
    min-height: calc(100% - 73px - 120px);
    @media ${device.mediaMinSmall} {
        min-height: calc(100% - 88px - 150px);
    }
`

export const Footer = styled.div` 
    border-top: 1px solid gray;

    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: red;
        }
    }
`

export const FooterWrapper = styled.div` 
    box-sizing: border-box;
    /* max-width: 960px; */
    padding: 4.5em 1.5em 1.5em;
    margin: 0 auto;
    @media ${device.mediaMinSmall} {
        padding: 6em 2em 2em;
    }
`

export const CompanyAddress = styled.div` 
    text-align: center;
    margin: 0 0 1rem;
`

export const SiteInfo = styled.div` 
    text-align: center;
    font-size: 0.875rem;
    line-height: auto;
`
