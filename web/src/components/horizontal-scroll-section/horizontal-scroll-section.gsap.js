import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function horizontalContainerAnim(containerRef) {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia(containerRef.current);

  mm.add("(min-width: 1024px)", () => {
    let sections = gsap.utils.toArray(".panel");
    let panelSections = gsap.utils.toArray(".panel_section");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: ".horizontalContainer",
        start: "top 82px",
        pin: true,
        scrub: 1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=3000"
      }
    });

    panelSections.forEach((panel, index) => {
      if (index < panelSections.length - 1) {
        // return (
        gsap
          .timeline({
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: 1,
              id: "1"
            }
          })
          .from(panel, {
            yPercent: 30,
            opacity: 0,
            ease: "none"
          })
          .to(
            panel,
            {
              yPercent: -30,
              opacity: 0.5,
              // scale: 0.8,
              ease: "none"
            },
            ">"
          );
      }
    });

    // gsap.set(".box1, .box2", { y: 100 });
    // ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

    // red section
    // gsap.to(".box1", {
    //   y: -130,
    //   duration: 2,
    //   ease: "elastic",
    //   scrollTrigger: {
    //     trigger: ".box1",
    //     containerAnimation: scrollTween,
    //     start: "left center",
    //     toggleActions: "play none none reset",
    //     id: "1"
    //   }
    // });

    // gray section
    // gsap.to(".box2", {
    //   y: -120,
    //   backgroundColor: "#1e90ff",
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".box2",
    //     containerAnimation: scrollTween,
    //     start: "center 80%",
    //     end: "center 20%",
    //     scrub: true,
    //     id: "2"
    //   }
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
