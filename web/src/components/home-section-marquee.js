import React, {useRef} from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../styles/colors";

const StyledMarquee = styled.section` 
    /* background: #fff; */
    /* color: ${colors.FABlue}; */
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.667vw;
    padding: 32px 0;
    position: relative;
    overflow: hidden;
`

const MarqueeInner = styled.div` 
    -webkit-font-smoothing: antialiased;
    width: fit-content;
    display: flex;
    flex: auto;
    flex-direction: row;
`

const MarqueePart = styled.div` 
    flex-shrink: 0;
    padding: 0 4px;
    font-smooth: always;
`
const Marquee = React.forwardRef(({textContent, style}, ref) => {

    return (
        <StyledMarquee className="marquee" ref={ref} style={style}>
            <MarqueeInner aria-hidden="true" className="marquee__inner">
                <MarqueePart className="marquee__part">{textContent}</MarqueePart>
                <MarqueePart className="marquee__part">{textContent}</MarqueePart>
                <MarqueePart className="marquee__part">{textContent}</MarqueePart>
                <MarqueePart className="marquee__part">{textContent}</MarqueePart>
                <MarqueePart className="marquee__part">{textContent}</MarqueePart>
                <MarqueePart className="marquee__part">{textContent}</MarqueePart>
            </MarqueeInner>
        </StyledMarquee>
    )
}
)

export default Marquee