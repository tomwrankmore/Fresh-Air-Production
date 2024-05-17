import React, { useRef, useEffect } from "react";
import * as styles from "./styles.module.scss";
import horizontalContainerAnim from "./horizontal-scroll-section.gsap";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import BlockContent from "../block-content";
import { BsArrowRight } from "react-icons/bs";
import SvgBg from "../../assets/work-svg-path.inline.svg"

const HorizontalScrollSection = (props) => {
  const {
    workSectionHeading,
    homeWorkSectionImage,
    panelOneTitle,
    panelOneText,
    panelOneImage,
    panelTwoText,
    panelTwoTitle,
    panelTwoImage,
    panelThreeTitle,
    panelThreeText,
    panelThreeImage,
    panelFourTitle,
    panelFourText,
    panelFourImage
  } = props;

  const containerRef = useRef(null);

  useEffect(() => {
    horizontalContainerAnim(containerRef);
  }, []);

  return (
    <div className={styles.horizontalWrapper} ref={containerRef}>
      
      <div className={`horizontalContainer ${styles.horizontalContainer}`}>
        
        <div className={`${styles.horizontalContainer__first_panel} panel`}>
          <SvgBg className={styles.svgBg} />
          <div className={styles.horizontalContainer__first_panel_column}>
            <h1>We Work</h1>
            <GatsbyImage
              image={homeWorkSectionImage.asset.gatsbyImageData}
              alt={homeWorkSectionImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              className="panel-1-img-wrapper"
              imgClassName="panel-1-img"
            />
            <h1>With You</h1>
          </div>
          <div className={styles.horizontalContainer__first_panel_column}>
            <BsArrowRight size={70} />
            <h3>
              Take a scroll with us.
              <br />
              Whatever stage of the process you're at, we can take your podcast from an idea
              straight to the ears of your customers.
            </h3>
          </div>
        </div>

        <section className={`${styles.horizontalContainer__panel} ${styles.gray} panel`}>
          <div className={styles.horizontalContainer__panel_column}>
            <div className={styles.horizontalContainer__panel_column_text}>
              <h3>{panelOneTitle}</h3>
              <BlockContent blocks={panelOneText} />
            </div>
            <GatsbyImage
              image={panelOneImage.asset.gatsbyImageData}
              alt={panelOneImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              objectPosition="0 0"
              className="img-l"
            />
          </div>
          <div className={styles.horizontalContainer__panel_column}>
            <GatsbyImage
              image={panelTwoImage.asset.gatsbyImageData}
              alt={panelTwoImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              objectPosition="0 0"
              className="img-l"
            />
            <div className={styles.horizontalContainer__panel_column_text}>
              <h3>{panelTwoTitle}</h3>
              <BlockContent blocks={panelTwoText} />
            </div>
          </div>
        </section>

        <section className={`${styles.horizontalContainer__panel} ${styles.blue} panel`}>
          <div className={styles.horizontalContainer__panel_column}>
            <div className={styles.horizontalContainer__panel_column_text}>
              <h3>{panelThreeTitle}</h3>
              <BlockContent blocks={panelThreeText} />
            </div>
            <GatsbyImage
              image={panelThreeImage.asset.gatsbyImageData}
              alt={panelThreeImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              objectPosition="0 0"
              className="img-l"
            />
          </div>
          <div className={styles.horizontalContainer__panel_column}>
            <GatsbyImage
              image={panelFourImage.asset.gatsbyImageData}
              alt={panelFourImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              objectPosition="0 0"
              className="img-r"
            />
            <div className={styles.horizontalContainer__panel_column_text}>
              <h3>{panelFourTitle}</h3>
              <BlockContent blocks={panelFourText} />
              <br />

              <p>
                <Link to="/contact" className="work-podcast-link">
                  Let's get making a podcast
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
