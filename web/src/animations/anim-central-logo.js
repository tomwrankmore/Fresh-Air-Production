import gsap from "gsap";

const centralLogoAnim = (centralLogoRef, podcastsRef) => {
    
    let q = gsap.utils.selector(centralLogoRef);

    gsap.set(q('.centralLogo'), { visibility: 'hidden' })

    gsap.to(q('.centralLogo'), {
        autoAlpha: 1,
        scrollTrigger: {
            trigger: podcastsRef,
            start: "top top",
            toggleActions: "play none none reverse"
          }
    })

}

export default centralLogoAnim