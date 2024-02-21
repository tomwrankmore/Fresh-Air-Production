import React, { useRef, useEffect } from "react";
import * as styles from "./styles.module.css";

import horizontalContainerAnim from "./horizontal-scroll-section.gsap"

const HorizontalScrollSection = React.forwardRef(({}, ref) => {
  const containerRef = useRef(null);

  useEffect(() => {
    horizontalContainerAnim(containerRef)
  }, []);

  return (
    <div style={{position: 'relative'}} ref={containerRef}>
      <div className={`horizontalContainer ${styles.horizontalContainer}`}>
        <div className={`${styles.panel} panel p-24`}>
          <div className="flex-1">
            <h1 className="">We Work</h1>
            <h1>image goes here</h1>
            <h1>With you</h1>
          </div>
          <div className="flex-1">
            <h3 className="underline">Take a scroll with us.<br/>Whatever stage of the process you're at, we can take your podcast from an idea straight to the ears of your customers.</h3>
          </div>
        </div>

        <section className={`${styles.panel} ${styles.gray} panel `}>
          <div>Fire an animation at a particular spot...</div>
          <div className={`${styles.box} box1 box`}>box1</div>
        </section>

        <section className={`${styles.panel} ${styles.blue} panel `}>
          <div>...or scrub it back &amp; forth with the scrollbar</div>
          <div className={`${styles.box} box2 box`}>box2</div>
        </section>

        <section className={`${styles.panel} ${styles.orange} panel `}>
          <div>Toggle a CSS className</div>
          <div className={`${styles.box} box3 box`}>box3</div>
        </section>

        <section className={`${styles.panel} ${styles.red} panel`}>
          <div>Use the rich callback system</div>
        </section>
      </div>
    </div>
  );
});

export default HorizontalScrollSection;
