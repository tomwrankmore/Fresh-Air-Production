import React, { useRef, useEffect } from "react";
import * as styles from "./styles.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HorizontalScrollSection = React.forwardRef(({}, ref) => {
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let mm = gsap.matchMedia(containerRef);

    mm.add("(min-width: 900px)", () => {
      let sections = gsap.utils.toArray(".panel");

      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: ".horizontalContainer",
          start: 'top 82px',
          pin: true,
          scrub: 0.1,
          //snap: directionalSnap(1 / (sections.length - 1)),
          end: "+=3000"
        }
      });

      gsap.set(".box1, .box2", { y: 100 });
      // ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

      // red section
      gsap.to(".box1", {
        y: -130,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
          trigger: ".box1",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
          id: "1"
        }
      });

      // gray section
      gsap.to(".box2", {
        y: -120,
        backgroundColor: "#1e90ff",
        ease: "none",
        scrollTrigger: {
          trigger: ".box2",
          containerAnimation: scrollTween,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
          id: "2"
        }
      });

      // purple section
      ScrollTrigger.create({
        trigger: ".box3",
        containerAnimation: scrollTween,
        toggleClass: "active",
        start: "center 60%",
        id: "3"
      });

      // green section
      ScrollTrigger.create({
        trigger: ".green",
        containerAnimation: scrollTween,
        start: "center 65%",
        end: "center 51%",
        onEnter: () => console.log("enter"),
        onLeave: () => console.log("leave"),
        onEnterBack: () => console.log("enterBack"),
        onLeaveBack: () => console.log("leaveBack"),
        onToggle: self => console.log("active", self.isActive),
        id: "4"
      });

      // only show the relevant section's markers at any given time
      // gsap.set(
      //   ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
      //   { autoAlpha: 0 }
      // );
      // ["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
      //   ScrollTrigger.create({
      //     trigger: "." + triggerClass,
      //     containerAnimation: scrollTween,
      //     start: "left 30%",
      //     end: i === 3 ? "right right" : "right 30%",
      //     markers: false,
      //     onToggle: self =>
      //       gsap.to(".marker-" + (i + 1), { duration: 0.25, autoAlpha: self.isActive ? 1 : 0 })
      //   });
      // });

      // when the matchMedia doesn't match anymore, make sure we revert the text
      return () => {
        // revert any splits or scrollTriggers
        scrollTween.kill();
      };
    });

    return () => mm.revert();
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
