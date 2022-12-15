import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showNavAnim = (navigationRef) => {

    const showAnim = gsap.from(navigationRef, { 
        yPercent: -100,
        paused: true,
        duration: 0.2
      }).progress(1);
      
      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      });
}

export default showNavAnim