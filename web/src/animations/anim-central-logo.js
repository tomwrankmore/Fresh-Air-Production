import gsap from "gsap";

const centralLogoAnim = (centralLogoRef, containerRef) => {
    
    let q = gsap.utils.selector(containerRef);

    gsap.set(q('.centralLogo'), { visibility: 'hidden' })

    // gsap.to(q('.centralLogo'), {
    //     autoAlpha: 1,
    //     scrollTrigger: {
    //         trigger: containerRef,
    //         start: "bottom top",
    //         toggleActions: "play none none reverse"
    //       }
    // })

}

export default centralLogoAnim