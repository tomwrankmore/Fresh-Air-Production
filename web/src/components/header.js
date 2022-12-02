import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import styled from "styled-components";
import { device } from "../styles/media-queries";
import * as styles from "./header.module.css";

const StyledHeader = styled.div` 
  position: relative;
  z-index: 100;
  width: 100%;
  position: fixed;
`

const Wrapper = styled.div` 
box-sizing: border-box;
  margin: 0 auto;
  /* max-width: 960px; */
  padding: 1em;
  display: flex;

  @media ${device.mediaMinSmall} {
    padding: 1.5em 1.5em;
  }
`

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  </StyledHeader>
);

export default Header;
