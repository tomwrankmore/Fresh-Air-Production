import gsap from "gsap";

const ctaAnim = (ctaRef, ctaTween) => {

    let q = gsap.utils.selector(ctaRef);

    ctaTween = gsap.to(ctaRef, {
        duration: 0.5,
        attr: {fill: "#008080"},
        paused: true
    });

}

export default ctaAnim