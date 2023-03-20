import React, {useLayoutEffect} from "react";
import gsap from 'gsap'
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import BlockContent from "../block-content";
import styled from "styled-components";
import { device } from "../../styles/mediaQueries";
import { colors } from "../../styles/colors";
import { BsArrowRight } from "react-icons/bs";
import SvgBg from "../../assets/work-svg-path.inline.svg"

const HorizontalContainer = styled.div` 
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    background-color: ${colors.FABlue};
    padding-right: 0;
    @media ${device.mediaMinLarge} {
      width: 330%;
      flex-wrap: nowrap;
      height: calc(100vh - 82px);
    }

    .work-podcast-link {
      display: block; 
      margin-bottom: 1rem;
      text-decoration: underline!important;
    }

    .svg-bg {
      height: 100%;
      position: absolute;
      top: 50%;
      left: 0%;
      z-index: 1;
      width: 300%;
      transform: translateY(-50%);
      display: none;
      @media ${device.mediaMinLarge} {
        display: inline-block;
      }
    }
`

const Panel = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white; 
  position: relative;
  box-sizing: border-box;
  padding: 0;
  overflow: visible;
  @media ${device.mediaMinLarge} {
    flex-direction: row;
  }

  &.panel1 {
    padding-top: 4rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media ${device.mediaMinLarge} {
      flex-direction: row;
      padding-top: 0;
    }

    .panel-1-img-wrapper {
      width: auto;
      height: 30vh;
      margin: 2rem auto;
      @media ${device.mediaMinLarge} {
        height: 50vh;
      }
    }

    .panel-1-img {
      height: 100%!important;
      width: auto!important;
      margin: 0 auto!important;
    }

    .panel1-right-content, 
    .panel1-left-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .panel1-left-content {
      flex: auto;
      width: 100%;
      padding: 0 2rem;
      @media ${device.mediaMinLarge} {
        flex: 5;
        padding: 0;
      }
      h1 {
        font-size: 3rem;
        @media ${device.mediaMinLarge} {
          font-size: 4rem;
        }
        text-transform: uppercase;
      }
    }

    .panel1-right-content {
      flex: auto;
      padding: 2rem 2rem 4rem 2rem;
      @media ${device.mediaMinLarge} {
        flex: 3;
        padding: 0;
      }
      text-align: center;
      padding-right: 2rem;
      h3 {
        line-height: auto;
        font-size: 1.25rem;
        text-transform: initial;
        font-weight: normal;
        @media ${device.mediaMinLarge} {
          line-height: 2.25rem;
          font-size: 1.5rem;
        }
      }
      h4 {
        font-size: 1.5rem;
        font-weight: normal; 
      }
      /* h4, h5 {
        margin-bottom: 2rem;
      } */

      .hide-on-mob {
        display: none;
        @media ${device.mediaMinLarge} {
          display: inline-block;
        }
      }
    }
  }

  .panel-equal-column {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0 2rem 2rem 2rem;
    text-align: center;
    z-index: 101;
    margin-bottom: 1rem;
    height: 100%;
    @media ${device.mediaMinLarge} {
      border-bottom: none;
      padding: 0 60px;
      margin-bottom: 0;
      .img {
        transform-origin: center center;
      }

      .img-r {
        transform: rotate(10deg);
        transform-origin: center center;
        @media ${device.mediaMinLarge} {
          margin-bottom: 2rem;
        }
      }

      .img-l {
          transform: rotate(-10deg);
          transform-origin: center center;
        }
    }

    @media ${device.mediaMinXLarge} {
      padding: 2rem 120px;
    }

    &.reverse-on-mob {
      flex-direction: column-reverse;
    }

    .we-work-text-container {
      position: relative;
      z-index: 100;
      h2 {
        margin-bottom: 1rem;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .we-work-img-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .we-work-static-img {
      max-height: calc(50vh - 41px);
      height: 100%;
    }

    /* .gatsby-image-wrapper {
      width: 100%;
      max-width: 420px;
      height: auto;
    } */
    
    h2 {
      /* margin-bottom: 2rem; */
      text-transform: uppercase;
    }
    p, a {
      font-weight: normal;
      text-decoration: none;
      line-height: 1.5rem;
      font-size: 1.275rem;
      /* &:last-child {
        margin-bottom: 2rem;
      } */
      /* @media ${device.mediaMinLarge} {
        &:last-child {
          margin-bottom: 4rem;
        }
      } */
    }
    a:hover {
      text-decoration: underline;
      color: white;
    }
  }
`

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

    useLayoutEffect(() => {
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
    
        sections.forEach(panel => {
          return (
              gsap.from(panel, {
                  ease: "none",
                  scrollTrigger: {
                    trigger: panel,
                    containerAnimation: scrollTween,
                    start: "left right",
                    end: "center center",
                    id: "1",
                    scrub: 2
                  }
                })
          )
        })

        textFromAbove.forEach(text => {
          return (
            gsap.from(text, {
              ease: "none",
              yPercent: -30,
              autoAlpha: 0.5,
              scale: 0.9,
              scrollTrigger: {
                trigger: text,
                containerAnimation: scrollTween,
                start: "left right",
                end: "left center",
                id: "2",
                scrub: 2
              }
            })
          )
        })

        textFromBelow.forEach(text => {
          return (
            gsap.from(text, {
              ease: "none",
              autoAlpha: 0.5,
              yPercent: 30,
              scale: 0.9,
              scrollTrigger: {
                trigger: text,
                containerAnimation: scrollTween,
                start: "left right",
                end: "left center",
                id: "2",
                scrub: 2
              }
            })
          )
        })
    
        imagesL.forEach(img => {
          return (
            gsap.from(img, {
              ease: "none",
              rotation: 5,
              xPercent: 30,
              scale: 0.9,
              scrollTrigger: {
                trigger: img,
                containerAnimation: scrollTween,
                start: "left right",
                end: "left center",
                id: "2",
                scrub: 2
              }
            })
          )
        })
    
        imagesR.forEach(img => {
          return (
            gsap.from(img, {
              ease: "none",
              rotation: -5,
              xPercent: 30,
              scale: 0.9,
              scrollTrigger: {
                trigger: img,
                containerAnimation: scrollTween,
                start: "left right",
                end: "left center",
                id: "3",
                scrub: 2
              }
            })
          )
        })

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