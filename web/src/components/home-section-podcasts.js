import React, {useLayoutEffect} from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../styles/colors";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const PodcastsWrapper = styled.div` 
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    position: relative;

    div {
        flex: 1;
        /* min-height: 100vh; */

        &.leftCol {
            div {
                height: 100vh;
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
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            position: sticky;
            top: 0;
            h2 {
                max-width: 65%;
                text-align: center;
                line-height: 3.5rem;
                font-size: 2.875rem;
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

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
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
        }, ref);
        return () => ctx.revert()
      }, [])    

    return (
        <PodcastsWrapper ref={ref}>
            <div className="leftCol">
                <Podcast>
                    <StaticImage
                        src="../assets/unnamed-1.jpg"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="fullWidth"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                        // aspectRatio={16/9}
                        // objectPosition="0 0"
                    />
                    <h3>What makes us stronger</h3>
                </Podcast>
                <Podcast>
                    <StaticImage
                        src="../assets/unnamed-2.jpg"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="fullWidth"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                        // aspectRatio={16/9}
                        // objectPosition="0 0"
                    />
                    <h3>The beauty podcast with sali hughes for avon</h3>
                </Podcast>
                <Podcast>
                    <StaticImage
                        src="../assets/unnamed.jpg"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="fullWidth"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                        // aspectRatio={16/9}
                        // objectPosition="0 0"
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