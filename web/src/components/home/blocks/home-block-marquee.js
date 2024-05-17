import React from "react";
import * as styles from "./home-block-marquee.module.scss";

const Marquee = ({ textContent }) => {
  return (
    <>
      <div className={styles.marqueeItems}>
        <div className={`${styles.marqueeItems__slide}`}>
          <span className="text-bold">{textContent}</span>
        </div>
        <div className={`${styles.marqueeItems__slide}`}>
          <span>{textContent}</span>
        </div>
        <div className={`${styles.marqueeItems__slide}`}>
          <span>{textContent}</span>
        </div>
      </div>
    </>
  );
};

export default Marquee;
