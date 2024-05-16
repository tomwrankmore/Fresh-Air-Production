import React from "react";
import * as styles from "./home-block-clients.module.scss";

const HomeBlockClients = ({ data }) => {
  const clientLogosOne = data.homeClientsRowOne.asset.gatsbyImageData.images.fallback.src;
  const clientLogosTwo = data.homeClientsRowTwo.asset.gatsbyImageData.images.fallback.src;
  const clientLogosThree = data.homeClientsRowThree.asset.gatsbyImageData.images.fallback.src;

  return (
    <div className={styles.logoCloudOuterWrapper}>
      <div>
        <div className={`${styles.marqueeLine} ${styles.marqueeLine__left}`}>
          <div className={styles.marqueeLine__marqueeContent}>
            <img
              src={clientLogosOne}
              className={styles.marqueeLine__marqueeContent_clientLogoSVG}
            />
          </div>
          <div className={styles.marqueeLine__marqueeContent}>
            <img
              src={clientLogosOne}
              className={styles.marqueeLine__marqueeContent_clientLogoSVG}
            />
          </div>
        </div>
        <div className={`${styles.marqueeLine} ${styles.marqueeLine__right}`}>
          <div className={styles.marqueeLine__marqueeContent}>
            <img
              src={clientLogosTwo}
              className={styles.marqueeLine__marqueeContent_clientLogoSVG}
            />
          </div>
          <div className={styles.marqueeLine__marqueeContent}>
            <img
              src={clientLogosTwo}
              className={styles.marqueeLine__marqueeContent_clientLogoSVG}
            />
          </div>
        </div>
        <div className={`${styles.marqueeLine} ${styles.marqueeLine__left}`}>
          <div className={styles.marqueeLine__marqueeContent}>
            <img
              src={clientLogosThree}
              className={styles.marqueeLine__marqueeContent_clientLogoSVG}
            />
          </div>
          <div className={styles.marqueeLine__marqueeContent}>
            <img
              src={clientLogosThree}
              className={styles.marqueeLine__marqueeContent_clientLogoSVG}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlockClients;
