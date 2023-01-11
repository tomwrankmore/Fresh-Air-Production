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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    @media ${device.mediaMinMedium} {
        flex-direction: row;
        align-items: flex-start;
    }
`

export const FooterWrapper = styled.div` 
    box-sizing: border-box;
    /* max-width: 960px; */
    padding: 4.5em 1.5em 1.5em;
    margin: 0 auto;
    @media ${device.mediaMinMedium} {
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;
`

export const LinkList = styled.ul` 
    flex: 1;
    text-align: center;
    width: 100%;
    border-bottom: dotted 1px white;
    padding: 0.5rem 0;
    @media ${device.mediaMinMedium} {
        text-align: left;
        border-bottom: none;
    }
    li {
      line-height: 1.45rem;
      font-size: 1.1rem;
    }
`

export const Subscribe = styled.div`
    text-align: center;
    padding-top: 1rem;
    @media ${device.mediaMinMedium} {
        text-align: left;
        flex: 2;
        padding-top: 0;
    }
    p {
        margin-bottom: 1rem;
        max-width: 100%;
        @media ${device.mediaMinMedium} {
            max-width: 75%;
        }
    }
`