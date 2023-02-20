import React, {useLayoutEffect} from "react";
import gsap from 'gsap'
import { StaticImage } from "gatsby-plugin-image";
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
    @media ${device.mediaMinLarge} {
      width: 300%;
      flex-wrap: nowrap;
      height: calc(100vh - 82px);
    }

    .svg-bg {
      height: 100%;
      position: absolute;
      top: 50%;
      left: 0%;
      z-index: 1;
      width: 200vw;
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

    .panel-1-img {
      width: 100%; 
      margin: 2rem auto;
      @media ${device.mediaMinLarge} {
        width: 60%; 
        margin: 30px auto;
      }
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
      h4, h5 {
        margin-bottom: 2rem;
      }

      .hide-on-mob {
        display: none;
        @media ${device.mediaMinLarge} {
          display: inline-block;
        }
      }
    }
  }

  .panel-equal-column {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 2rem 2rem 2rem;
    text-align: center;
    z-index: 101;
    margin-bottom: 1rem;
    /* border-bottom: solid 1px white; */
    @media ${device.mediaMinLarge} {
      border-bottom: none;
      padding: 0 60px;
      margin-bottom: 0;
      display: block;
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
      padding: 0 120px;
    }

    &.reverse-on-mob {
      flex-direction: column-reverse;
    }

    .we-work-text-wrapper {
      position: relative;
      z-index: 100;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: auto;
    }
    
    h2 {
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
    p {
      font-weight: normal;
      line-height: 1.5rem;
      font-size: 1.275rem;
      &:last-child {
        margin-bottom: 2rem;
      }
      @media ${device.mediaMinLarge} {
        &:last-child {
          margin-bottom: 4rem;
        }
      }
    }
  }
`

const Work = React.forwardRef(({
  workSectionHeading,
  panelOneTitle,
  panelTwoTitle,
  panelThreeTitle,
  panelFourTitle,
  panelOneText,
  panelTwoText,
  panelThreeText,
  panelFourText
}, ref) => {

    useLayoutEffect(() => {
      let mm = gsap.matchMedia(ref);
    
      mm.add("(min-width: 900px)", () => {
        // gsap logic here
        let sections = gsap.utils.toArray('.panel');
        let imagesL = gsap.utils.toArray('.img-l');
        let imagesR = gsap.utils.toArray('.img-r');
        // let paragraphs = gsap.utils.toArray('.panel-paragraph');
    
        let scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
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
                      scrub: true
                    }
                  })
            )
          })
    
          imagesL.forEach(img => {
            return (
              gsap.from(img, {
                ease: "none",
                rotation: 5,
                scrollTrigger: {
                  trigger: img,
                  containerAnimation: scrollTween,
                  start: "left right",
                  end: "center center",
                  id: "2",
                  scrub: true
                }
              })
            )
          })
    
          imagesR.forEach(img => {
            return (
              gsap.from(img, {
                ease: "none",
                rotation: -5,
                scrollTrigger: {
                  trigger: img,
                  containerAnimation: scrollTween,
                  start: "left right",
                  end: "center center",
                  id: "3",
                  scrub: true
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
                  <StaticImage 
                    src="../../assets/we-work/joel-muniz-bJ2Dm9ZyeIY-unsplash-cropped.png"
                    alt="Man with microphone"
                    placeholder="blurred"
                    layout="fullWidth"
                    className='panel-1-img'
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
                  <div className="we-work-text-wrapper">
                    <h2>{panelOneTitle}</h2>
                    <BlockContent blocks={panelOneText} />
                  </div>
                  <StaticImage
                    src="../../assets/we-work/pexels-elina-araja.png"
                    alt="Microphone"
                    placeholder="blurred"
                    layout="fullWidth"
                    objectPosition="0 0"
                    className="img-l"
                    />
                </div>
                <div className="panel-equal-column reverse-on-mob">
                  <StaticImage
                    src="../../assets/we-work/pexels-los-muertos-crew.png"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    objectPosition="0 0"
                    className="img-r"
                    style={{maxWidth: '260px', margin: '0 auto 2rem auto'}}
                    />
                    <div className="we-work-text-wrapper">
                      <h2>{panelTwoTitle}</h2>
                      <BlockContent blocks={panelTwoText} />
                    </div>
                </div>
              </Panel>
              <Panel className="panel panel3">
                <div className="panel-equal-column">
                  <div className="we-work-text-wrapper">
                    <h2>{panelThreeTitle}</h2>
                    <BlockContent blocks={panelThreeText} />
                  </div>
                  <StaticImage
                    src="../../assets/we-work/pexels-jonathan-pham-12375133.jpg"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    aspectRatio={16/9}
                    objectPosition="0 0"
                    className="img-l"
                    />
                </div>
                <div className="panel-equal-column reverse-on-mob">
                  <StaticImage
                    src="../../assets/we-work/pexels-cottonbro-studio-6491797.png"
                    alt="Woman with magnifying glass"
                    placeholder="blurred"
                    layout="fullWidth"
                    objectPosition="0 0"
                    className="img-r"
                    style={{maxWidth: '260px', margin: '0 auto 2rem auto'}}
                    />
                    <div className="we-work-text-wrapper">
                      <h2>{panelFourTitle}</h2>
                      <BlockContent blocks={panelFourText} />
                    </div>
                </div>
              </Panel>
          </HorizontalContainer>
        </div>
    )
}
)

export default Work