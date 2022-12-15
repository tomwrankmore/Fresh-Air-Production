import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import * as styles from "./header.module.css";
import Logo from "../assets/FA-nav-logo.inline.svg"
import {Wrapper, StyledHeader, Nav, ToggleNavButton } from "./header.styled";


const Header = React.forwardRef(({ onHideNav, onShowNav, showNav, siteTitle }, ref) => (
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
            <Link to="/archive/">What We Do</Link>
          </li>
          <li>
            <Link to="/">
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
);

export default Header;
