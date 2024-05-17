import React, { useRef, useEffect } from "react";
import * as styles from "./home-block-we-work.module.scss";
import horizontalContainerAnim from "../../horizontal-scroll-section/horizontal-scroll-section.gsap";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import BlockContent from "../../block-content";
import { BsArrowRight } from "react-icons/bs";
import SvgBg from "../../../assets/work-svg-path.inline.svg";

const HomeBlockWeWork = ({ data }) => {
  const containerRef = useRef(null);

  // Add animation on mount
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
              image={data.homeWeWorkMainImage.asset.gatsbyImageData}
              alt={data.homeWeWorkMainImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              className="panel-1-img-wrapper"
              imgClassName="panel-1-img"
              aspectRatio={16/9}
            />
            <h1>With You</h1>
          </div>
          <div className={styles.horizontalContainer__first_panel_column}>
            <BsArrowRight size={70} className="rotate-90 lg:rotate-0"/>
            <h3>
              Take a scroll with us.
              <br />
              Whatever stage of the process you're at, we can take your podcast from an idea
              straight to the ears of your customers.
            </h3>
          </div>
        </div>

        <section className={`${styles.horizontalContainer__panel} panel`}>
          <div className={`${styles.horizontalContainer__panel_column} panel_section`}>
            <div className={`${styles.horizontalContainer__panel_column_text} justify-end`}>
              <h3>{data.panelOneTitle}</h3>
              <BlockContent blocks={data._rawPanelOneText} />
            </div>
            <GatsbyImage
              image={data.panelOneImage.asset.gatsbyImageData}
              alt={data.panelOneImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              objectPosition="0 0"
              className="img-l order-2 lg:order-none"
              aspectRatio={16/9}
            />
          </div>
          <div className={`${styles.horizontalContainer__panel_column} panel_section`}>
            <GatsbyImage
              image={data.panelTwoImage.asset.gatsbyImageData}
              alt={data.panelTwoImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              objectPosition="0 0"
              className="img-l order-2 lg:order-none"
              aspectRatio={16/9}
            />
            <div className={`${styles.horizontalContainer__panel_column_text} justify-start`}>
              <h3>{data.panelTwoTitle}</h3>
              <BlockContent blocks={data._rawPanelTwoText} />
            </div>
          </div>
        </section>

        <section className={`${styles.horizontalContainer__panel} panel`}>
          <div className={`${styles.horizontalContainer__panel_column} panel_section`}>
            <div className={`${styles.horizontalContainer__panel_column_text} justify-end`}>
              <h3>{data.panelThreeTitle}</h3>
              <BlockContent blocks={data._rawPanelThreeText} />
            </div>
            <GatsbyImage
              image={data.panelThreeImage.asset.gatsbyImageData}
              alt={data.panelThreeImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              objectPosition="0 0"
              className="img-l order-2 lg:order-none"
              aspectRatio={16/9}
            />
          </div>
          <div className={`${styles.horizontalContainer__panel_column} panel_section`}>
            <GatsbyImage
              image={data.panelFourImage.asset.gatsbyImageData}
              alt={data.panelFourImage.alt}
              placeholder="blurred"
              layout="constrained"
              height="100%"
              objectPosition="0 0"
              className="img-r order-2 lg:order-none"
              aspectRatio={16/9}
            />
            <div className={`${styles.horizontalContainer__panel_column_text} justify-start`}>
              <h3>{data.panelFourTitle}</h3>
              <BlockContent blocks={data._rawPanelFourText} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeBlockWeWork;
