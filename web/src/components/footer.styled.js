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
          text-decoration: underline;
        }
    }

    .footerLogo {
        width: 120px;
        height: auto;
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

export const NavigationWrapper = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 4rem;
    gap: 1rem;
    /* align-items: flex-end; */
    @media ${device.mediaMinLarge} {
      grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    }
`

export const LinkList = styled.ul` 
    padding: 0;
    @media ${device.mediaMinMedium} {
      padding: 0;
    }
    li {
      font-size: 1.1rem;
      padding: 0 0 0.25rem 0;
    }
`

export const Subscribe = styled.div`
    grid-column: 1/-1;
    padding-top: 4rem;
    @media ${device.mediaMinMedium} {
      
      grid-column: auto;
    }
    @media ${device.mediaMinLarge} {
      padding-top: 0;
    }
    input {
      background-color: ${colors.FABlue};
      width: 100%;
      padding: 0.5rem 0.25rem;
      border: none;
    }
    p {
        margin-bottom: 1rem;
        max-width: 75%;
        @media ${device.mediaMinMedium} {
          max-width: 75%;
        }
        @media ${device.mediaMinLarge} {
            max-width: 50%;
        }
    }
`

export const SiteInfo = styled.div` 
    text-align: left;
    font-size: 0.875rem;
    line-height: auto;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-end;
    justify-content: flex-start;
    grid-column: 1/-1;
    /* @media ${device.mediaMinMedium} {
      grid-column: 1/-1;
    } */
`