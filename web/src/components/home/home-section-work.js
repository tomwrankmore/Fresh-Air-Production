import React, {useEffect} from "react";
import gsap from 'gsap'
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import BlockContent from "../block-content";
import { BsArrowRight } from "react-icons/bs";
import SvgBg from "../../assets/work-svg-path.inline.svg"

import { HorizontalContainer, Panel } from "./home-section-work.styled";

const Work = React.forwardRef(({
  workSectionHeading,
  homeWorkSectionImage,
  panelOneTitle,
  panelOneText,
  panelOneImage,
  panelTwoTitle,
  panelTwoText,
  panelTwoImage,
  panelThreeTitle,
  panelThreeText,
  panelThreeImage,
  panelFourTitle,
  panelFourText,
  panelFourImage
}, ref) => {

    useEffect(() => {
      let mm = gsap.matchMedia(ref);
    
      mm.add("(min-width: 900px)", () => {
        // gsap logic here
        let sections = gsap.utils.toArray('.panel');
        let imagesL = gsap.utils.toArray('.img-l');
        let imagesR = gsap.utils.toArray('.img-r');
        let textFromAbove = gsap.utils.toArray('.text-from-above')
        let textFromBelow = gsap.utils.toArray('.text-from-below')
    
        let scrollTween = gsap.to(sections, {
          xPercent: -110 * (sections.length - 1),
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: '.horizontalContainer',
            start: 'top 82px',
            pin: true,
            scrub: 0.1,
            // markers: true,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end: "+=3000"
          }
        });
    
        // sections.forEach(panel => {
        //   return (
        //       gsap.from(panel, {
        //           ease: "none",
        //           scrollTrigger: {
        //             trigger: panel,
        //             containerAnimation: scrollTween,
        //             start: "left right",
        //             end: "center center",
        //             id: "1",
        //             // scrub: 2
        //           }
        //         })
        //   )
        // })

        // textFromAbove.forEach(text => {
        //   return (
        //     gsap.from(text, {
        //       ease: "none",
        //       yPercent: -30,
        //       autoAlpha: 0.5,
        //       scale: 0.9,
        //       scrollTrigger: {
        //         trigger: text,
        //         containerAnimation: scrollTween,
        //         start: "left right",
        //         end: "left center",
        //         id: "2",
        //         scrub: 2
        //       }
        //     })
        //   )
        // })

        // textFromBelow.forEach(text => {
        //   return (
        //     gsap.from(text, {
        //       ease: "none",
        //       autoAlpha: 0.5,
        //       yPercent: 30,
        //       scale: 0.9,
        //       scrollTrigger: {
        //         trigger: text,
        //         containerAnimation: scrollTween,
        //         start: "left right",
        //         end: "left center",
        //         id: "2",
        //         scrub: 2
        //       }
        //     })
        //   )
        // })
    
        // imagesL.forEach(img => {
        //   return (
        //     gsap.from(img, {
        //       ease: "none",
        //       rotation: 5,
        //       xPercent: 30,
        //       scale: 0.9,
        //       scrollTrigger: {
        //         trigger: img,
        //         containerAnimation: scrollTween,
        //         start: "left right",
        //         end: "left center",
        //         id: "2",
        //         scrub: 2
        //       }
        //     })
        //   )
        // })
    
        // imagesR.forEach(img => {
        //   return (
        //     gsap.from(img, {
        //       ease: "none",
        //       rotation: -5,
        //       xPercent: 30,
        //       scale: 0.9,
        //       scrollTrigger: {
        //         trigger: img,
        //         containerAnimation: scrollTween,
        //         start: "left right",
        //         end: "left center",
        //         id: "3",
        //         scrub: 2
        //       }
        //     })
        //   )
        // })

        // when the matchMedia doesn't match anymore, make sure we revert the text
        return () => {
          // revert any splits or scrollTriggers
          scrollTween.kill()
        };
      });
    
      return () => mm.revert();
    }, []);

    return (
        <div style={{position: 'relative'}} ref={ref}>
          <HorizontalContainer className="horizontalContainer">
            <Panel className="panel panel1">
              <div className="panel1-left-content">
                <h1>We Work</h1>
                <GatsbyImage 
                  image={homeWorkSectionImage.asset.gatsbyImageData}
                  alt={homeWorkSectionImage.alt}
                  placeholder="blurred"
                  layout="constrained"
                  height="100%"
                  className='panel-1-img-wrapper'
                  imgClassName='panel-1-img'
                />
                <h1>With You</h1>
              </div>
              <div className="panel1-right-content">
                <BsArrowRight style={{fontSize: '3rem', marginBottom: '1rem'}}  className='hide-on-mob'/>
                <h4 className='hide-on-mob'>Take a scroll with us</h4>
                <h3>{workSectionHeading}</h3>
              </div>
            </Panel>
            <Panel className="panel panel2">
              <SvgBg className="svg-bg" />
              <div className="panel-equal-column">
                <div className="we-work-text-container text-from-above">
                  <div>
                    <h2>{panelOneTitle}</h2>
                    <BlockContent blocks={panelOneText}/>
                  </div>
                </div>
                <div className="we-work-img-container">
                  <img 
                    src={panelOneImage.asset.gatsbyImageData.images.fallback.src}
                    srcSet={panelOneImage.asset.gatsbyImageData.images.fallback.srcSet}
                    alt={panelOneImage.alt} 
                    className="we-work-static-img img-l" 
                  />
                  {/* <GatsbyImage
                    image={panelOneImage.asset.gatsbyImageData}
                    alt={panelOneImage.alt}
                    placeholder="blurred"
                    layout="constrained"
                    height="100%"
                    objectPosition="0 0"
                    className="img-l"
                  /> */}
                </div>
              </div>
              <div className="panel-equal-column">
                <div className="we-work-img-container">
                  <img 
                    src={panelTwoImage.asset.gatsbyImageData.images.fallback.src} 
                    srcSet={panelTwoImage.asset.gatsbyImageData.images.fallback.srcSet}
                    alt={panelTwoImage.alt} 
                    className="we-work-static-img img-r" 
                  />
                  </div>
                  <div className="we-work-text-container text-from-below">
                    <div>
                      <h2>{panelTwoTitle}</h2>
                      <BlockContent blocks={panelTwoText}/>
                    </div>
                  </div>
              </div>
            </Panel>
            <Panel className="panel panel3">
              <div className="panel-equal-column">
                <div className="we-work-text-container text-from-above">
                  <div>
                    <h2>{panelThreeTitle}</h2>
                    <BlockContent blocks={panelThreeText}/>
                  </div>
                </div>
                <div className="we-work-img-container">
                  <img 
                    src={panelThreeImage.asset.gatsbyImageData.images.fallback.src}
                    srcSet={panelThreeImage.asset.gatsbyImageData.images.fallback.srcSet}
                    alt={panelThreeImage.alt} 
                    className="we-work-static-img img-l"
                  />
                  {/* <GatsbyImage
                    image={panelThreeImage.asset.gatsbyImageData}
                    alt={panelThreeImage.alt}
                    placeholder="blurred"
                    layout="constrained"
                    height="100%"
                    objectPosition="0 0"
                    className="img-l"
                  /> */}
                </div>
              </div>
              <div className="panel-equal-column">
              <div className="we-work-img-container">
                <img 
                  src={panelFourImage.asset.gatsbyImageData.images.fallback.src} 
                  srcSet={panelFourImage.asset.gatsbyImageData.images.fallback.srcSet}
                  alt={panelFourImage.alt} 
                  className="we-work-static-img img-r"
                />
                {/* <GatsbyImage
                  image={panelFourImage.asset.gatsbyImageData}
                  alt={panelFourImage.alt}
                  placeholder="blurred"
                  layout="constrained"
                  height="100%"
                  objectPosition="0 0"
                  className="img-r"
                /> */}
              </div>
                <div className="we-work-text-container text-from-below">
                  <div>
                    <h2>{panelFourTitle}</h2>
                    <BlockContent blocks={panelFourText}/>
                    <br/>
                    <Link to="/contact" className="work-podcast-link">Let's get making a podcast</Link>
                  </div>
                </div>
              </div>
            </Panel>
          </HorizontalContainer>
        </div>
    )
}
)

export default Work