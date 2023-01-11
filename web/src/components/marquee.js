import React, {useLayoutEffect} from "react";
import gsap from "gsap"
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";

const StyledMarquee = styled.section` 
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.25rem;
    padding: 3rem 0;
    position: relative;
    overflow: hidden;
    @media ${device.mediaMinLarge} {
        font-size: 1.875rem
    }
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

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".marquee__inner", {xPercent: -50});
            gsap.to('.marquee__part', {xPercent: -100, repeat: -1, duration: 40, ease: "linear"}).totalProgress(0.5);
        }, ref);
        return () => ctx.revert()
      }, [])

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