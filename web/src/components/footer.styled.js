import styled from "styled-components";
import { device } from "../styles/mediaQueries"
import { colors } from "../styles/colors";

export const StyledFooter = styled.div` 
    border-top: 1px solid gray;
    background-color:  ${colors.FAGrey};
    color: white;

    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: red;
        }
    }

    .footerLogo {
        width: 120px;
        height: auto;
    }
`

export const NavigationWrapper = styled.div` 
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const FooterWrapper = styled.div` 
    box-sizing: border-box;
    /* max-width: 960px; */
    padding: 4.5em 1.5em 1.5em;
    margin: 0 auto;
    @media ${device.mediaMinSmall} {
        padding: 4rem 2rem;
    }
`

export const CompanyAddress = styled.div` 
    text-align: center;
    margin: 0 0 1rem;
`

export const SiteInfo = styled.div` 
    text-align: left;
    font-size: 0.875rem;
    line-height: auto;
`

export const LinkList = styled.ul` 
    flex: 1;
    li {
        line-height: 1.875rem;
    }
`

export const Subscribe = styled.div` 
    flex: 2;
    p {
        margin-bottom: 1rem;
        max-width: 75%;
    }
`