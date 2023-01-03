import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const workHorizontalAnim = (horizontalPanelsRef, horizontalTl) => {
    let q = gsap.utils.selector(horizontalPanelsRef);
    let sections = gsap.utils.toArray(q('.panel'));
    let imagesL = gsap.utils.toArray(q('.img-l'));
    let imagesR = gsap.utils.toArray(q('.img-r'));
    let paragraphs = gsap.utils.toArray(q('.panel-paragraph'));

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: q('.horizontalContainer'),
        start: 'top top',
        pin: true,
        scrub: 0.1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=3000"
      }
    });

      sections.forEach(panel => {
        return (
            gsap.from(panel, {
                // y: 130,
                // scale: 0.8,
                // duration: 2,
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: scrollTween,
                  start: "left right",
                  end: "center center",
                  id: "1",
                  scrub: true
                }
              })
        )
      })


      imagesL.forEach(img => {
        return (
          gsap.from(img, {
            ease: "none",
            rotation: 5,
            scrollTrigger: {
              trigger: img,
              containerAnimation: scrollTween,
              start: "left right",
              end: "center center",
              id: "2",
              scrub: true
            }
          })
        )
      })

      imagesR.forEach(img => {
        return (
          gsap.from(img, {
            ease: "none",
            rotation: -5,
            scrollTrigger: {
              trigger: img,
              containerAnimation: scrollTween,
              start: "left right",
              end: "center center",
              id: "3",
              scrub: true
            }
          })
        )
      })
}

export default workHorizontalAnim
