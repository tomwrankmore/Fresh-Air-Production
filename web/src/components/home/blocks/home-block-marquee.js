import React, { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";
import classNames from "classnames";
import * as styles from "./home-block-marquee.module.scss"

const StyledMarquee = styled.section`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
  @media ${device.mediaMinLarge} {
    font-size: 1.875rem;
  }

  &.home-marquee {
    position: relative;
    padding: 0;
    @media ${device.mediaMinMedium} {
      position: absolute;
    }
  }
`;

const MarqueeInner = styled.div`
  -webkit-font-smoothing: antialiased;
  width: fit-content;
  display: flex;
  flex: auto;
  flex-direction: row;
`;

const MarqueePart = styled.div`
  flex-shrink: 0;
  padding: 0 4px;
  font-smooth: always;
`;


const Marquee = React.forwardRef(({ textContent, style, cn }, ref) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".marquee__inner", { xPercent: -50 });
      gsap
        .to(".marquee__part", { xPercent: -100, repeat: -1, duration: 40, ease: "linear" })
        .totalProgress(0.5);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className={classNames(cn, styles.marquee, "marquee")} ref={ref} style={style}>
      <div aria-hidden="true" className={classNames(cn, styles.marqueeInner, "marquee__inner")}>
        <div className={ classNames(styles.marqueePart, "marquee__part") }>{textContent}</div>
        <div className={ classNames(styles.marqueePart, "marquee__part") }>{textContent}</div>
        <div className={ classNames(styles.marqueePart, "marquee__part") }>{textContent}</div>
        <div className={ classNames(styles.marqueePart, "marquee__part") }>{textContent}</div>
        <div className={ classNames(styles.marqueePart, "marquee__part") }>{textContent}</div>
        <div className={ classNames(styles.marqueePart, "marquee__part") }>{textContent}</div>
      </div>
    </section>
  );
});

export default Marquee;
