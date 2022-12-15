import gsap from "gsap";

const cloudMarqueeAnim = (tagCloudRef) => {

    let q = gsap.utils.selector(tagCloudRef);

    gsap.to(q('.marqueeContent1'), {xPercent: -100, repeat: -1, duration: 50, ease: 'linear'}).totalProgress(0.6);
    gsap.to(q('.marqueeContent2'), {xPercent: -100, repeat: -1, duration: 60, ease: 'linear'}).totalProgress(0.4);

    gsap.set(q('.cloudMarqueeLine'), {xPercent: 20});
}

export default cloudMarqueeAnim