import React, {useEffect} from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Wrapper = styled.div``

function Scroll ({ children }) {

    useEffect(() => {
      const smoother = ScrollSmoother.create({
        smooth: 3
      }
    )
  
      return () => {
        smoother.kill()
      }
    }, [])
  
    return (
      <Wrapper id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </Wrapper>
    )
  }

  export default Scroll