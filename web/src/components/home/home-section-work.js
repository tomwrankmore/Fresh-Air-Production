import React, {useLayoutEffect} from "react";
import gsap from 'gsap'
import { StaticImage } from "gatsby-plugin-image";
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
    @media ${device.mediaMinMedium} {
      width: 300%;
      flex-wrap: nowrap;
      height: 100vh;
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
      @media ${device.mediaMinMedium} {
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
  @media ${device.mediaMinMedium} {
    flex-direction: row;
  }

  &.panel1 {
    padding-top: 4rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media ${device.mediaMinMedium} {
      flex-direction: row;
      padding-top: 0;
    }

    .panel-1-img {
      width: 100%; 
      margin: 2rem auto;
      @media ${device.mediaMinMedium} {
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
      @media ${device.mediaMinMedium} {
        flex: 5;
        padding: 0;
      }
      h1 {
        font-size: 4rem;
        text-transform: uppercase;
      }
    }

    .panel1-right-content {
      flex: auto;
      padding: 2rem 2rem 4rem 2rem;
      @media ${device.mediaMinMedium} {
        flex: 2;
        padding: 0;
      }
      text-align: center;
      padding-right: 2rem;
      h3, h4, h5 {
        font-family: 'Polysans';
      }
      h3 {
        line-height: 2.25rem;
        font-size: 1.75rem;
        text-transform: initial;
        font-weight: normal;
      }
      h4, h5 {
        margin-bottom: 2rem;
      }

      .hide-on-mob {
        display: none;
        @media ${device.mediaMinMedium} {
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
    margin-bottom: 3rem;
    border-bottom: solid 1px white;
    @media ${device.mediaMinMedium} {
      border-bottom: none;
      padding: 0 120px;
      margin-bottom: 0;
      display: block;
      .img {
        transform-origin: center center;
      }

      .img-r {
        transform: rotate(10deg);
        transform-origin: center center;
        @media ${device.mediaMinMedium} {
          margin-bottom: 2rem;
        }
      }

      .img-l {
          transform: rotate(-10deg);
          transform-origin: center center;
        }
    }

    &.reverse-on-mob {
      flex-direction: column-reverse;
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
      margin-bottom: 2rem;
      font-weight: normal;
      line-height: 1.5rem;
      font-size: 1.275rem;
      @media ${device.mediaMinMedium} {
        margin-bottom: 4rem;
      }
    }
  }
`

const Work = React.forwardRef((props, ref) => {

    useLayoutEffect(() => {
      let mm = gsap.matchMedia(ref);
    
      mm.add("(min-width: 600px)", () => {
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
            start: 'top top',
            pin: true,
            scrub: 0.1,
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
                    src="../../assets/we-work.png"
                    alt="Joel Muniz"
                    placeholder="blurred"
                    layout="fullWidth"
                    className='panel-1-img'
                  />
                  <h1>With You</h1>
                </div>
                <div className="panel1-right-content">
                  <BsArrowRight style={{fontSize: '3rem', marginBottom: '1rem'}}  className='hide-on-mob'/>
                  <h4 className='hide-on-mob'>Take a scroll with us</h4>
                  <h3>Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</h3>
                </div>
              </Panel>
              <Panel className="panel panel2">
                <SvgBg className="svg-bg" />
                <div className="panel-equal-column">
                  <div>
                    <h2>Creative Development</h2>
                    <p className="panel-paragraph">Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers. Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</p>
                  </div>
                  <StaticImage
                    src="../../assets/unnamed.jpg"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    objectPosition="0 0"
                    className="img-l"
                    />
                </div>
                <div className="panel-equal-column reverse-on-mob">
                  <StaticImage
                    src="../../assets/unnamed-2.jpg"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    aspectRatio={16/9}
                    // style={{maxWidth: '320px', margin: '0 auto 2rem auto'}}
                    objectPosition="0 0"
                    className="img-r"
                    />
                    <div>
                      <h2>Record and Produce</h2>
                      <p className="panel-paragraph">Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers. Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</p>
                    </div>
                </div>
              </Panel>
              <Panel className="panel panel3">
                <div className="panel-equal-column">
                  <div>
                    <h2>Advertise and Promote</h2>
                    <p className="panel-paragraph">Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers. Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</p>
                  </div>
                  <StaticImage
                    src="../../assets/unnamed-1.jpg"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    aspectRatio={16/9}
                    // style={{marginBottom: '2rem'}}
                    objectPosition="0 0"
                    className="img-l"
                    />
                </div>
                <div className="panel-equal-column reverse-on-mob">
                  <StaticImage
                    src="../../assets/unnamed-3.png"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    aspectRatio={16/9}
                    // style={{maxWidth: '320px', margin: '0 auto 2rem auto'}}
                    objectPosition="0 0"
                    className="img-r"
                    />
                    <div>
                      <h2>Analyse Your Data</h2>
                      <p className="panel-paragraph">Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers. Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</p>
                    </div>
                </div>
              </Panel>
          </HorizontalContainer>
        </div>
    )
}
)

export default Work