import { Link } from "gatsby";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import Icon from "./icon";
import { cn } from "../lib/helpers";
import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import * as styles from "./header.module.css";
import Logo from "../assets/FA-nav-logo.inline.svg"
import {Wrapper, StyledHeader, Nav, ToggleNavButton } from "./header.styled";



const Header = React.forwardRef(({ onHideNav, onShowNav, showNav, siteTitle }, ref) => {

gsap.registerPlugin(ScrollTrigger)

useLayoutEffect(() => {
  let mm = gsap.matchMedia(ref);

  mm.add("(min-width: 675px)", () => {

    gsap.set('.navigationLogo', {
      visibility: 'hidden'
    })
  
    const showAnim = gsap.from(ref.current, { 
        yPercent: -100,
        paused: true,
        duration: 0.2
      }).progress(1);
      
      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      });

      // when the matchMedia doesn't match anymore
      return () => {
        gsap.from(ref.current, { 
          yPercent: 55
        })
      }
  });

  return () => mm.revert();
},[])

  return (
  <StyledHeader ref={ref}>
    <Wrapper>
      {/* <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </div> */}

      <ToggleNavButton onClick={showNav ? onHideNav : onShowNav}>
        {showNav ? <Icon symbol="close" /> : <Icon symbol="hamburger" />}
      </ToggleNavButton>

      <Nav className={showNav && 'showNav'}>
        <ul>
          <li>
            <Link to="/archive/">Who We Are</Link>
          </li>
          <li>
            <Link to="/what-we-do/">What We Do</Link>
          </li>
          <li>
            <Link to="/" className="navigationLogo">
              <Logo className="logoSVG" style={{width: '140px', height: 'auto'}}/>
            </Link>
          </li>
          <li>
            <Link to="/archive/">Our Podcasts</Link>
          </li>
          <li>
            <Link to="/archive/">Editorials</Link>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  </StyledHeader>
)
}
);

export default Header;
