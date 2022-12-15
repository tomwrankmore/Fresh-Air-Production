import React, {useState, useEffect, useRef} from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../styles/colors";

const TagCloudWrapper = styled.div` 
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
        max-width: 20%;
        margin: 0 auto;
        line-height: 1.4;
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

    return (
        <TagCloudWrapper style={bgColor} ref={ref}>
            <ExtendedContainer>
                <MarqueeLine 
                    className="cloudMarqueeLine"
                    onMouseEnter={() => setBgColor(grey)} 
                    onMouseLeave={() => setBgColor(blue)}
                >
                    <div 
                        className="marqueeContent marqueeContent1 hoverGrey" 
                    >
                        <Link to="/">NEWS</Link>
                        <Link to="/">SCIENCE</Link>
                        <Link to="/">SPORT</Link>
                        <Link to="/">HEALTH</Link>
                        <Link to="/">WELLBEING</Link>
                    </div>
                    <div 
                        className="marqueeContent marqueeContent1 hoverGrey"
                    >
                        <Link to="/">NEWS</Link>
                        <Link to="/">SCIENCE</Link>
                        <Link to="/">SPORT</Link>
                        <Link to="/">HEALTH</Link>
                        <Link to="/">WELLBEING</Link>
                    </div>
                </MarqueeLine>
                <MarqueeLine 
                    className="cloudMarqueeLine" 
                    onMouseEnter={() => setBgColor(darkBlue)} 
                    onMouseLeave={() => setBgColor(blue)}>
                    <div 
                        className="marqueeContent marqueeContent2 hoverBlue"
                    >
                        <Link to="/">SCIENCE</Link>
                        <Link to="/">SPORT</Link>
                        <Link to="/">HEALTH</Link>
                        <Link to="/">WELLBEING</Link>
                        <Link to="/">NEWS</Link>
                    </div>
                    <div 
                        className="marqueeContent marqueeContent2 hoverBlue"
                    >
                        <Link to="/">SCIENCE</Link>
                        <Link to="/">SPORT</Link>
                        <Link to="/">HEALTH</Link>
                        <Link to="/">WELLBEING</Link>
                        <Link to="/">NEWS</Link>
                    </div>
                </MarqueeLine>
                <MarqueeLine 
                    className="cloudMarqueeLine" 
                    onMouseEnter={() => setBgColor(lightGreen)} 
                    onMouseLeave={() => setBgColor(blue)}
                    >
                    <div 
                        className="marqueeContent marqueeContent1 hoverGreen"
                    >
                        <Link to="/">SPORT</Link>
                        <Link to="/">HEALTH</Link>
                        <Link to="/">WELLBEING</Link>
                        <Link to="/">NEWS</Link>
                        <Link to="/">SCIENCE</Link>
                    </div>
                    <div 
                        className="marqueeContent marqueeContent1 hoverGreen"
                    >
                        <Link to="/">SPORT</Link>
                        <Link to="/">HEALTH</Link>
                        <Link to="/">WELLBEING</Link>
                        <Link to="/">NEWS</Link>
                        <Link to="/">SCIENCE</Link>
                    </div>
                </MarqueeLine>
                <MarqueeLine 
                    className="cloudMarqueeLine"
                    onMouseEnter={() => setBgColor(orange)} 
                    onMouseLeave={() => setBgColor(blue)}
                >
                    <div 
                        className="marqueeContent marqueeContent2 hoverOrange"
                    >
                        <Link to="/">HEALTH</Link>
                        <Link to="/">WELLBEING</Link>
                        <Link to="/">NEWS</Link>
                        <Link to="/">SCIENCE</Link>
                        <Link to="/">SPORT</Link>
                    </div>
                    <div 
                        className="marqueeContent marqueeContent2 hoverOrange" 
                    >
                        <Link to="/">HEALTH</Link>
                        <Link to="/">WELLBEING</Link>
                        <Link to="/">NEWS</Link>
                        <Link to="/">SCIENCE</Link>
                        <Link to="/">SPORT</Link>
                    </div>
                </MarqueeLine>
                <MarqueeLine 
                    className="cloudMarqueeLine"
                    onMouseEnter={() => setBgColor(turq)} 
                    onMouseLeave={() => setBgColor(blue)}
                >
                    <div 
                        className="marqueeContent marqueeContent1 hoverTurq"
                    >
                        <Link to="/">WELLBEING</Link>
                        <Link to="/">NEWS</Link>
                        <Link to="/">SCIENCE</Link>
                        <Link to="/">SPORT</Link>
                        <Link to="/">HEALTH</Link>
                    </div>
                    <div 
                        className="marqueeContent marqueeContent1 hoverTurq" 
                    >
                        <Link to="/">WELLBEING</Link>
                        <Link to="/">NEWS</Link>
                        <Link to="/">SCIENCE</Link>
                        <Link to="/">SPORT</Link>
                        <Link to="/">HEALTH</Link>
                    </div>
                </MarqueeLine>
            </ExtendedContainer>

            <h1>TELL YOUR STORY AND CONNECT WITH NEW AUDIENCES</h1>

        </TagCloudWrapper>
    )
}
)

export default TagCloud