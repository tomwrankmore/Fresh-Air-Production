import React from "react";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";

export const Content = styled.div` 
    background-color: white;
    min-height: calc(100% - 73px - 120px);
    @media ${device.mediaMinSmall} {
        min-height: calc(100% - 88px - 150px);
    }
`