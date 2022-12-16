import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const podcastAnim = (podcastsRef, tl) => {

    let q = gsap.utils.selector(podcastsRef);

    const childLines = new SplitText(q('.podcastHeading'), {
        type: 'lines',
        linesClass: 'lineChild',
    });

    const parentLines = new SplitText(q('.podcastHeading'), {
      type: 'lines',
      linesClass: 'lineParent',
    });

    const { lines } = childLines;

    tl = gsap.timeline({
        scrollTrigger: {
          trigger: podcastsRef,
          start: "top 50%",
        //   end: "center 75%",
          toggleActions: "play none none reverse"
        },
      })
    .from(lines, {
      yPercent: 100, 
      autoAlpha: 0,
      ease: 'back',
      stagger: {
        amount: 0.1,
      }
    })
    
}

export default podcastAnim