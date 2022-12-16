import gsap from "gsap";

const heroAnim = (heroRef) => {

    let q = gsap.utils.selector(heroRef);

    console.log('hero height: ', heroRef.clientHeight)
    console.log('fresh-svg height: ', q('.fresh-svg'))
    console.log('air-svg height: ', q('.air-svg'))
}

export default heroAnim