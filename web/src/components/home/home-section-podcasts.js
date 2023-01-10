import React, {useLayoutEffect, useRef} from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { device } from "../../styles/mediaQueries"

const PodcastsWrapper = styled.div` 
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    position: relative;
    flex-direction: column-reverse;

    @media ${device.mediaMinMedium} {
        flex-direction: row;
    }

    div {
        flex: 1;
        /* min-height: 100vh; */

        &.leftCol {
            div {
                height: 35vh;
                @media ${device.mediaMinMedium} {
                    height: 100vh;
                }
            }
            h3 {
                text-align: center;
                font-weight: normal;
                background-color: ${colors.FABlue};
                color: white;
                padding: 0.5rem 0;
            }
        }

        &.rightCol {
            min-height: 35vh;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;
            @media ${device.mediaMinMedium} {
                min-height: 100vh;
                position: sticky;
                top: 0;
                padding: 0;
            }
            h2 {
                max-width: 100%;
                text-align: center;
                line-height: inherit;
                font-size: 1.5;
                @media ${device.mediaMinMedium} {
                    max-width: 65%;
                    line-height: 3.5rem;
                    /* font-size: 2.875rem; */
                    font-size: clamp(1.875rem, 2rem, 3rem);
                }
            }
        }
    }
`

const Podcast = styled.div` 
    position: relative;
    display: flex;
    flex-direction: column;
    /* height: 50px; */
    h3 {
        text-transform: uppercase;
    }
`

const Podcasts = React.forwardRef(({tl}, ref) => {

    const root = useRef();

    gsap.registerPlugin(ScrollTrigger, SplitText);

      useLayoutEffect(() => {
        let mm = gsap.matchMedia(root);
    
        mm.add("(min-width: 675px)", () => {
          
            const childLines = new SplitText('.podcastHeading', {
                type: 'lines',
                linesClass: 'lineChild',
            });
        
            const parentLines = new SplitText('.podcastHeading', {
              type: 'lines',
              linesClass: 'lineParent',
            });
        
            const { lines } = childLines;
        
            tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ref.current,
                  start: "top 50%",
                //   end: "center 75%",
                  toggleActions: "play none none reverse"
                },
              })
            .from(lines, {
              yPercent: 100, 
              autoAlpha: 0,
              ease: 'back',
              stagger: {
                amount: 0.25,
              }
            })
    
          // when the matchMedia doesn't match anymore, make sure we revert the text
          return () => {
            childLines.revert();
            parentLines.revert();
          };
        });
    
        return () => mm.revert();
      }, []);

    return (
        <PodcastsWrapper ref={root}>
            <div className="leftCol">
                <Podcast>
                    <StaticImage
                        src="../../assets/we-produce/we-produce-1.jpeg"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="fullWidth"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                    />
                    <h3>What makes us stronger</h3>
                </Podcast>
                <Podcast>
                    <StaticImage
                        src="../../assets/we-produce/we-produce-2.jpeg"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="fullWidth"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                    />
                    <h3>The beauty podcast with sali hughes for avon</h3>
                </Podcast>
                <Podcast>
                    <StaticImage
                        src="../../assets/we-produce/we-produce-3.jpeg"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="fullWidth"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                    />
                    <h3>Call of The Wild - WWF</h3>
                </Podcast>
                <Podcast>
                    <StaticImage
                        src="../../assets/we-produce/we-produce-4.jpg"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="fullWidth"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                    />
                    <h3>Call of The Wild - WWF</h3>
                </Podcast>
            </div>
            <div className="rightCol">
                <h2 className="podcastHeading">We produce 100 podcasts listened to over 2 million times every month</h2>
            </div>
        </PodcastsWrapper>
    )
}
)

export default Podcasts