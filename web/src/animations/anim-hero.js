import gsap from "gsap";

const heroAnim = (heroRef) => {

    let q = gsap.utils.selector(heroRef);

    const mover = heroRef.clientHeight - 270

    gsap.set(q('.air-svg'), {
        y: - mover
    })

    gsap.to(q('.air-svg'), {
        y:0,
        scrollTrigger: {
            trigger: heroRef,
            start: "top top",
            end: "bottom 50%",
            scrub: 2
        }
    })
}

export default heroAnim