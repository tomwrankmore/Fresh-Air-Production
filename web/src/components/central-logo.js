import React, {useLayoutEffect} from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import Logo from "../assets/FA-nav-logo.inline.svg"
import gsap from "gsap"

const StyledCentralLogo = styled.div` 
    width: 100vw;
    position: fixed;
    /* background-color: hotpink; */
    z-index: 101;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    @media ${device.mediaMinMedium} {
        
    }
`

const CentralLogo = React.forwardRef((props, ref) => {

    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       gsap.set('.central-logo', { visibility: 'hidden' })
    //       gsap.to('.central-logo', {
    //           autoAlpha: 1,
    //           scrollTrigger: {
    //               trigger: podcastsRef.current,
    //               start: "top top",
    //               toggleActions: "play none none reverse"
    //             }
    //       })
    //     }, ref);
    //     return () => ctx.revert()
    //   }, [])

    return (
        <StyledCentralLogo ref={ref}>
            <Link to="/" className="centralLogo">
                <Logo className="logoSVG" style={{width: '140px', height: 'auto'}}/>
            </Link>
        </StyledCentralLogo>
        )
    }
);
  
 export default CentralLogo;