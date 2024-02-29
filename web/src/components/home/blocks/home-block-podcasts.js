import React, { useEffect, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../../styles/colors";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { device } from "../../../styles/mediaQueries";
import BlockContent from "../../block-content";

import * as styles from "./home-block-podcasts.module.scss";

function HomeBlockPodcasts({ data }) {
  console.log(data);

  const heading = data._rawHomePodcastHeading;
  const podcasts = data.homePodcasts;
  console.log("podcasts:", podcasts);
  const root = useRef(null);

  return (
    <div className={styles.podcastsWrapper} ref={root}>
      <div className={styles.podcastsWrapper__leftCol}>
        {podcasts &&
          podcasts.map((podcast, idx) => {
            return (
              <div className="podcast" key={idx}>
                <Link to={`/podcast/${podcast.slug.current}`}>
                  <GatsbyImage
                    image={podcast.heroImage.asset.gatsbyImageData}
                    alt={podcast?.heroImage?.alt ? podcast?.heroImage?.alt : "alt"}
                    placeholder="blurred"
                    // layout="fullWidth"
                    objectFit="cover"
                    className="podcastImgWrapper"
                    imgClassName="podcastImg"
                  />
                </Link>
              </div>
            );
          })}
      </div>
      <div  className={styles.podcastsWrapper__rightCol}>
        <BlockContent blocks={heading} />
      </div>
    </div>
  );
}

export default HomeBlockPodcasts;
