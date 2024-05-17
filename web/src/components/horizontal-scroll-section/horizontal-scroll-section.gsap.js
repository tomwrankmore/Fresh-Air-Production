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
            ease: "none"
          })
          .to(
            panel,
            {
              yPercent: -30,
              opacity: 0.5,
              ease: "none"
            },
            ">"
          );
      }
    });

    // when the matchMedia doesn't match anymore, make sure we revert the text
    return () => {
      // revert any splits or scrollTriggers
      scrollTween.kill();
    };
  });

  return () => mm.revert();
}

export default horizontalContainerAnim;
