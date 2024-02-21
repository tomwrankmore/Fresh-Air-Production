import React, { useRef, useEffect } from "react";
import * as styles from "./styles.module.scss";

import horizontalContainerAnim from "./horizontal-scroll-section.gsap"
import { Link } from "gatsby";

const HorizontalScrollSection = React.forwardRef(({}, ref) => {
  const containerRef = useRef(null);

  useEffect(() => {
    horizontalContainerAnim(containerRef)
  }, []);

  return (
    <div style={{position: 'relative'}} ref={containerRef}>
      <div className={`horizontalContainer ${styles.horizontalContainer}`}>
        <div className={`${styles.panel} panel`}>
          <div className="flex-1 p-24 p-24">
            <h1 className="">We Work</h1>
            <h1>image goes here</h1>
            <h1>With you</h1>
          </div>
          <div className="flex-1 p-24">
            <h3>Take a scroll with us.<br/>Whatever stage of the process you're at, we can take your podcast from an idea straight to the ears of your customers.</h3>
          </div>
        </div>

        <section className={`${styles.panel} ${styles.gray} panel`}>
          <div className="flex-1 p-24">
            <h1>STRATEGY & CREATIVE</h1>
            <p>What is the podcast that only you can make? We turn your brand into a podcast that audiences will love. We take broadcast quality producers and turn your talent into podcast stars, your brand purpose into a killer format, and your expertise into a brilliant conversation.</p>
          </div>
          <div className="flex-1 p-24 bg-red-200">Image placeholder</div>
          {/* <div className={`${styles.box} box1 box`}>box1</div> */}
        </section>

        <section className={`${styles.panel} ${styles.blue} panel`}>
          <div className="flex-1 p-24">
            <h1>RECORD AND PRODUCE</h1>
            <p>We're a collective of best in the business audio producers, and we've worked for some of the world's biggest brands. We're also storytellers, journalists, finance specialists, science experts, comedy producers, fashion lovers, and much more.</p>
          </div>
          <div className="flex-1 p-24 bg-red-200">Image placeholder</div>
          {/* <div className={`${styles.box} box2 box`}>box2</div> */}
        </section>

        <section className={`${styles.panel} ${styles.orange} panel`}>
          <div className="flex-1 p-24">
            <h1>ADVERTISE AND PROMOTE</h1>
            <p>We're a team of podcast growth specialists running strategy, media, design and PR to make a podcast into a hit.Our plans bring an audience to the content we produce and strategically distribute it to where the audience already are.</p>
          </div>
          <div className="flex-1 p-24 bg-red-200">Image placeholder</div>
          {/* <div className={`${styles.box} box3 box`}>box3</div> */}
        </section>

        <section className={`${styles.panel} ${styles.darkBlue} panel`}>
          <div className="flex-1 p-24">
            <h1>ANALYSE YOUR DATA</h1>
            <p>We set clear goals to drive the best return for your business. We ruthlessly iterate to make your podcast as successful as it can be. And we show the value so Series 2 is a no-brainer.</p>
            <p><Link to="/contact">Let's get making a podcast</Link></p>
          </div>
          <div className="flex-1 p-24 bg-red-200">Image placeholder</div>
        </section>
      </div>
    </div>
  );
});

export default HorizontalScrollSection;
