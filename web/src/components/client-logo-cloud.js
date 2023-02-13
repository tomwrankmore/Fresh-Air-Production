import React, {useLayoutEffect} from "react";
import gsap from "gsap"
import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import ClientLogoRowOne from "../assets/client-logos-row-one.inline.svg"
import ClientLogoRowTwo from "../assets/client-logos-row-two.inline.svg"
import ClientLogoRowThree from "../assets/client-logos-row-three.inline.svg"

const LogoCloudOuterWrapper = styled.div` 
  max-width: 100vw;
  width: 100%;
  overflow-x: hidden;
`

const LogoCloudInnerWrapper = styled.div` 
    width: 200%;
    margin: 0 -50%;
    text-align: center;
    position: relative;
    text-align: center;
    transition: background-color 0.25s ease-in 0s;

    .clientLogoSVG {
      width: 200vw;
      display: inline-block;
      height: auto;
      @media ${device.mediaMinSmall} {
        width: 175vw;
      }
      @media ${device.mediaMinMedium} {
        width: 100vw;
      }
    }
`

const ExtendedContainer = styled.div` 
`

const MarqueeLine = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    white-space: nowrap;
    padding: 1rem 0;

    .marqueeContent{
      white-space: nowrap;
      display: inline-block;
      margin-right: 1rem;
    }
`

const ClientLogoCloud = React.forwardRef((props, ref) => {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        gsap.set('.cloudMarqueeLine', {xPercent: 20});
        gsap.to('.marqueeContent1', {xPercent: -100, repeat: -1, duration: 100, ease: 'linear'}).totalProgress(0.5);
        gsap.to('.marqueeContent2', {xPercent: -100, repeat: -1, duration: 90, ease: 'linear'}).totalProgress(0.5);
    }, ref);
    return () => ctx.revert()
  }, [])

  return (
  <LogoCloudOuterWrapper>
    <LogoCloudInnerWrapper ref={ref}>
      <ExtendedContainer>
        <MarqueeLine className="cloudMarqueeLine">
          <div className="marqueeContent marqueeContent1">
            <ClientLogoRowOne  className="clientLogoSVG" />
          </div>
          <div className="marqueeContent marqueeContent1">
            <ClientLogoRowOne  className="clientLogoSVG" />
          </div>
        </MarqueeLine>
        <MarqueeLine className="cloudMarqueeLine">
          <div className="marqueeContent marqueeContent2">
            <ClientLogoRowTwo className="clientLogoSVG" />
          </div>
          <div className="marqueeContent marqueeContent2">
            <ClientLogoRowTwo className="clientLogoSVG" />
          </div>
        </MarqueeLine>
        <MarqueeLine className="cloudMarqueeLine">
          <div className="marqueeContent marqueeContent2">
            <ClientLogoRowThree className="clientLogoSVG" />
          </div>
          <div className="marqueeContent marqueeContent2">
            <ClientLogoRowThree className="clientLogoSVG" />
          </div>
        </MarqueeLine>
      </ExtendedContainer>
    </LogoCloudInnerWrapper>
  </LogoCloudOuterWrapper>
  )
})

export default ClientLogoCloud