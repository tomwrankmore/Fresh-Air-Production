import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./home-block-hero.module.scss";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomeHero = ({data}) => {

  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const childLines = new SplitText(".hero-heading", {
        type: "lines",
        linesClass: "lineChild"
      });

      const parentLines = new SplitText(".hero-heading", {
        type: "lines",
        linesClass: "lineParent"
      });

      const { lines } = childLines;

      gsap.set(lines, { autoAlpha: 0 , yPercent: 100,});

      const tl = gsap.timeline()
      .to('.overlay', {
        height: 0,
        duration: 1,
        ease: "inOut"
      })
      .to(lines, {
        yPercent: 0,
        autoAlpha: 1,
        ease: "back",
        stagger: {
          amount: 0.25
        }
      }, '-=0.5');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const { heroBackgroundImage } = useStaticQuery(
    graphql`
      query {
        heroBackgroundImage: file(relativePath: { eq: "hero-splash.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1024
              quality: 80
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );

  const pluginImage = getImage(data.image.asset);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={`${styles.hero__overlay} overlay`} />
      <div className={styles.hero__gradientOverlay} />
      <div className={styles.hero__headingContainer}>
        <h1 className="hero-heading">{data.heading}</h1>
      </div>
      <BgImage image={pluginImage} className={styles.hero__backgroundImg} />
    </div>
  );
};

export default HomeHero;
