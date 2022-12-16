import gsap from "gsap";

const heroAnim = (heroRef) => {

    let q = gsap.utils.selector(heroRef);

    console.log('hero height: ', heroRef.clientHeight)

    const mover = heroRef.clientHeight - 270

    console.log('mover', mover)

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

    // gsap.to(q('.fresh-svg'), {
    //     yPercent: -70,
    //     scrollTrigger: {
    //         trigger: heroRef,
    //         start: "top top",
    //         scrub: 2
    //     }
    // })
     
}

export default heroAnim