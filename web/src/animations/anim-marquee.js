import gsap from "gsap";

const marqueeAnim = (marqueeRef) => {

    let q = gsap.utils.selector(marqueeRef);

    gsap.to(q('.marquee__part'), {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

    gsap.set(q(".marquee__inner"), {xPercent: -50});
}

export default marqueeAnim