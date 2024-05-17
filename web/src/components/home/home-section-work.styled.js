import styled from "styled-components";
import { device } from "../../styles/mediaQueries";
import { colors } from "../../styles/colors";

export const HorizontalContainer = styled.div` 
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    background-color: ${colors.FABlue};
    padding-right: 0;
    @media ${device.mediaMinLarge} {
      width: 400%;
      flex-wrap: nowrap;
      height: calc(100vh - 82px);
    }

    .work-podcast-link {
      display: block; 
      margin-bottom: 1rem;
      text-decoration: underline!important;
    }

    .svg-bg {
      height: 100%;
      position: absolute;
      top: 50%;
      left: 0%;
      z-index: 1;
      width: 300%;
      transform: translateY(-50%);
      display: none;
      @media ${device.mediaMinLarge} {
        display: inline-block;
      }
    }
`

export const Panel = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white; 
  position: relative;
  box-sizing: border-box;
  padding: 0;
  overflow: visible;
  @media ${device.mediaMinLarge} {
    flex-direction: row;
  }

  &.panel1 {
    padding-top: 4rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media ${device.mediaMinLarge} {
      flex-direction: row;
      padding-top: 0;
    }

    .panel-1-img-wrapper {
      width: auto;
      height: 30vh;
      margin: 2rem auto;
      @media ${device.mediaMinLarge} {
        height: 50vh;
      }
    }

    .panel-1-img {
      height: 100%!important;
      width: auto!important;
      margin: 0 auto!important;
    }

    .panel1-right-content, 
    .panel1-left-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .panel1-left-content {
      flex: auto;
      width: 100%;
      padding: 0 2rem;
      @media ${device.mediaMinLarge} {
        flex: 5;
        padding: 0;
      }
      h1 {
        font-size: 3rem;
        @media ${device.mediaMinLarge} {
          font-size: 4rem;
        }
        text-transform: uppercase;
      }
    }

    .panel1-right-content {
      flex: auto;
      padding: 2rem 2rem 4rem 2rem;
      @media ${device.mediaMinLarge} {
        flex: 3;
        padding: 0;
      }
      text-align: center;
      padding-right: 2rem;
      h3 {
        line-height: auto;
        font-size: 1.25rem;
        text-transform: initial;
        font-weight: normal;
        @media ${device.mediaMinLarge} {
          line-height: 2.25rem;
          font-size: 1.5rem;
        }
      }
      h4 {
        font-size: 1.5rem;
        font-weight: normal; 
      }

      .hide-on-mob {
        display: none;
        @media ${device.mediaMinLarge} {
          display: inline-block;
        }
      }
    }
  }

  .panel-equal-column {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0 2rem 2rem 2rem;
    text-align: center;
    z-index: 101;
    margin-bottom: 1rem;
    height: 100%;
    @media ${device.mediaMinLarge} {
      border-bottom: none;
      padding: 0 60px;
      margin-bottom: 0;
      .img {
        transform-origin: center center;
      }

      .img-r {
        /* transform: rotate(10deg); */
        transform-origin: center center;
        @media ${device.mediaMinLarge} {
          margin-bottom: 2rem;
        }
      }

      .img-l {
          /* transform: rotate(-10deg); */
          transform-origin: center center;
        }
    }

    @media ${device.mediaMinXLarge} {
      padding: 2rem 120px;
    }

    &.reverse-on-mob {
      flex-direction: column-reverse;
    }

    .we-work-text-container {
      position: relative;
      z-index: 100;
      h2 {
        margin-bottom: 1rem;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .we-work-img-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .we-work-static-img {
      max-height: calc(50vh - 41px);
      height: 100%;
    }

    /* .gatsby-image-wrapper {
      width: 100%;
      max-width: 420px;
      height: auto;
    } */
    
    h2 {
      /* margin-bottom: 2rem; */
      text-transform: uppercase;
    }
    p, a {
      font-weight: normal;
      text-decoration: none;
      line-height: 1.5rem;
      font-size: 1.275rem;
      /* &:last-child {
        margin-bottom: 2rem;
      } */
      /* @media ${device.mediaMinLarge} {
        &:last-child {
          margin-bottom: 4rem;
        }
      } */
    }
    a:hover {
      text-decoration: underline;
      color: white;
    }
  }
`