import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function horizontalContainerAnim(containerRef) {
  gsap.registerPlugin(ScrollTrigger);
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
}

export default horizontalContainerAnim;