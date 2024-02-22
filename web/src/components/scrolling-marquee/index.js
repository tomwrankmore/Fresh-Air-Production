import React, { useEffect, useState, useRef } from "react";
import * as styles from "./styles.module.scss";
import { Link } from "gatsby";
import { colors } from "../../styles/colors";

const ScrollingMarquee = () => {
  const wordList = ["Documentary", "Sustainability", "Science", "Wellness", "Finance", "Interview"];

  const blue = { background: colors.FABlue };
  const grey = { background: colors.FAGrey };
  const darkBlue = { background: colors.FADarkerBlue };
  const lightGreen = { background: colors.FALightGreen };
  const orange = { background: colors.FAOrange };
  const turq = { background: colors.FATurquoise };

  const [bgColor, setBgColor] = useState(grey);

  return (
    <div className={styles.marqueeWrapper} style={bgColor}>
      {/* section one */}
      <div
        className={styles.marqueeItems}
        onMouseEnter={() => setBgColor(grey)}
        onMouseLeave={() => setBgColor(blue)}
      >
        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_left} ${styles.hoverBlue}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>

        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_left} ${styles.hoverBlue}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* section two */}
      <div
        className={styles.marqueeItems}
        onMouseEnter={() => setBgColor(darkBlue)}
        onMouseLeave={() => setBgColor(blue)}
      >
        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_right} ${styles.hoverTurq}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>
        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_right} ${styles.hoverTurq}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* section three */}
      <div
        className={styles.marqueeItems}
        onMouseEnter={() => setBgColor(lightGreen)}
        onMouseLeave={() => setBgColor(blue)}
      >
        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_left_slower} ${styles.hoverDarkBlue}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>

        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_left_slower} ${styles.hoverDarkBlue}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* section four */}
      <div
        className={styles.marqueeItems}
        onMouseEnter={() => setBgColor(orange)}
        onMouseLeave={() => setBgColor(blue)}
      >
        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_right_slower} ${styles.hoverGrey}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>

        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_right_slower} ${styles.hoverGrey}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* section five */}
      <div
        className={styles.marqueeItems}
        onMouseEnter={() => setBgColor(turq)}
        onMouseLeave={() => setBgColor(blue)}
      >
        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_left_slower} ${styles.hoverDarkBlue}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>

        <div className={`${styles.marqueeItems__slide} ${styles.marqueeItems__slide_left_slower} ${styles.hoverDarkBlue}`}>
          {wordList.map(item => (
            <Link to="/our-podcasts">
              <span>{item}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingMarquee;
