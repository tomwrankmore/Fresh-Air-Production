import React, {useState, useEffect} from "react";
import gsap from "gsap"
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { device } from "../../styles/mediaQueries";

const TagCloudOuterWrapper = styled.div` 
  max-width: 100vw;
  width: 100%;
  overflow-x: hidden;
`

const TagCloudInnerWrapper = styled.div` 
    width: 200%;
    margin: 0 -50%;
    text-align: center;
    position: relative;
    padding-top: 56px;
    text-align: center;
    transition: background-color 0.25s ease-in 0s;

    h1 {
        color: white;
        font-weight: normal;
        padding: 4rem 0;
        max-width: 100%;
        margin: 0 auto;
        line-height: 1.4;
        max-width: 35%;
        font-size: 1.25rem;
        @media ${device.mediaMinSmall} {
          padding: 4rem 0;
          max-width: 20%;
          font-size: 2em;
        }
    }
`

const ExtendedContainer = styled.div` 
    margin-top: 112px;
`

const MarqueeLine = styled.div`
    width: 100%;
    height: 88px;
    position: relative;
    white-space: nowrap;

    .marqueeContent{
        white-space: nowrap;
        display: inline-block;

        a {
            font-size: 77px;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            letter-spacing: 0px;
            font-weight: bold;
            text-transform: uppercase;
            line-height: 1.2;
            text-decoration: none;
            opacity: 1;
            transition: all 0.2 linear 0s;
            padding-right: 42px;
            color: rgba(256, 256, 256, 0.5); 
        }
    }
    .hoverGrey {a:hover {color: ${colors.FABlue}}}
    .hoverBlue {a:hover {color: ${colors.FATurquoise}}}
    .hoverGreen {a:hover {color: ${colors.FADarkerBlue}}}
    .hoverOrange {a:hover {color: ${colors.FAGrey}}}
    .hoverTurq {a:hover {color: ${colors.FADarkerBlue}}}
   
`

const TagCloud = React.forwardRef((props, ref) => {

    const blue = {background: colors.FABlue}
    const grey = {background: colors.FAGrey}
    const darkBlue = {background: colors.FADarkerBlue}
    const lightGreen = {background: colors.FALightGreen}
    const orange = {background: colors.FAOrange}
    const turq = {background: colors.FATurquoise}

    const [bgColor, setBgColor] = useState(blue)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set('.cloudMarqueeLine', {xPercent: 20});
            gsap.to('.marqueeContent1', {xPercent: -100, repeat: -1, duration: 140, ease: 'linear'}).totalProgress(0.6);
            gsap.to('.marqueeContent2', {xPercent: -100, repeat: -1, duration: 160, ease: 'linear'}).totalProgress(0.4);
        }, ref);
        return () => ctx.revert()
      }, [])
    

    return (
        <TagCloudOuterWrapper>
            <TagCloudInnerWrapper style={bgColor} ref={ref}>
              <ExtendedContainer>
                <MarqueeLine 
                  className="cloudMarqueeLine"
                  onMouseEnter={() => setBgColor(grey)}
                  onMouseLeave={() => setBgColor(blue)}
                >
                  <div className="marqueeContent marqueeContent1 hoverGrey">
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                    <Link to="/our-podcasts/">SCIENCE</Link>
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                  </div>
                  <div className="marqueeContent marqueeContent1 hoverGrey">
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                    <Link to="/our-podcasts/">SCIENCE</Link>
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                  </div>
                </MarqueeLine>
                <MarqueeLine 
                  className="cloudMarqueeLine" 
                  onMouseEnter={() => setBgColor(darkBlue)} 
                  onMouseLeave={() => setBgColor(blue)}>
                  <div className="marqueeContent marqueeContent2 hoverBlue">
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                    <Link to="/our-podcasts/">SCIENCE</Link>
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                  </div>
                  <div className="marqueeContent marqueeContent2 hoverBlue">
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                    <Link to="/our-podcasts/">SCIENCE</Link>
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                  </div>
                </MarqueeLine>
                <MarqueeLine 
                  className="cloudMarqueeLine" 
                  onMouseEnter={() => setBgColor(lightGreen)} 
                  onMouseLeave={() => setBgColor(blue)}
                >
                  <div className="marqueeContent marqueeContent1 hoverGreen">
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                    <Link to="/our-podcasts/">SCIENCE</Link>
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                  </div>
                  <div className="marqueeContent marqueeContent1 hoverGreen">
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                    <Link to="/our-podcasts/">SCIENCE</Link>
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                  </div>
                </MarqueeLine>
                <MarqueeLine 
                    className="cloudMarqueeLine"
                    onMouseEnter={() => setBgColor(orange)} 
                    onMouseLeave={() => setBgColor(blue)}
                >
                  <div className="marqueeContent marqueeContent2 hoverOrange">
                    <Link to="/our-podcasts/">SCIENCE</Link>
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                  </div>
                  <div className="marqueeContent marqueeContent2 hoverOrange">
                    <Link to="/our-podcasts/">SCIENCE</Link>
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                  </div>
                </MarqueeLine>
                <MarqueeLine 
                  className="cloudMarqueeLine"
                  onMouseEnter={() => setBgColor(turq)} 
                  onMouseLeave={() => setBgColor(blue)}
                >
                  <div className="marqueeContent marqueeContent1 hoverTurq">
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                    <Link to="/our-podcasts/">SCIENCE</Link>
                  </div>
                  <div className="marqueeContent marqueeContent1 hoverTurq">
                    <Link to="/our-podcasts/">WELLNESS</Link>
                    <Link to="/our-podcasts/">FINANCE</Link>
                    <Link to="/our-podcasts/">INTERVIEW</Link>
                    <Link to="/our-podcasts/">DOCUMENTARY</Link>
                    <Link to="/our-podcasts/">SUSTAINABILITY</Link>
                    <Link to="/our-podcasts/">SCIENCE</Link>
                  </div>
                </MarqueeLine>
              </ExtendedContainer>
                <h1>
                  <Link to="/our-podcasts">TELL YOUR STORY AND CONNECT WITH NEW AUDIENCES</Link>
                </h1>
            </TagCloudInnerWrapper>
        </TagCloudOuterWrapper>
    )
}
)

export default TagCloud