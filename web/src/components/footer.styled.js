import styled from "styled-components";
import { device } from "../styles/mediaQueries"
import { colors } from "../styles/colors";

export const StyledFooter = styled.div` 
    /* border-top: 1px solid gray; */
    background-color:  ${colors.FAGrey};
    color: white;

    p.mailing-list-title {
      margin: 0 auto;
    }

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
    /* grid-column: 1/-1;
    padding-top: 4rem;
    @media ${device.mediaMinMedium} {
      grid-column: auto;
    }
    @media ${device.mediaMinLarge} {
      padding-top: 0;
    } */
    max-width: 450px;
    margin: 0 auto;
    width: 100%;
    p {
        margin-bottom: 1rem;
        max-width: 100%;
        font-size: 0.875rem;
        @media ${device.mediaMinMedium} {
          max-width: 75%;
        }
    }
    form {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }
    input {
      /* background-color: ${colors.FABlue}; */
      width: 100%;
      padding: 1rem 0.5rem;
      /* border: none; */
      color: white;
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
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