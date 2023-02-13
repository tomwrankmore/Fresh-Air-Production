import React, {useLayoutEffect, useRef} from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import gsap from "gsap";
import BlockContent from "../block-content";
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
                /* height: 50vh;
                @media ${device.mediaMinMedium} {
                    height: 50vh;
                } */
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
                font-size: 2.25rem;
                @media ${device.mediaMinMedium} {
                    max-width: 85%;
                    line-height: 3.5rem;
                    font-size: 2.875rem;
                    /* font-size: clamp(1.875rem, 3rem, 4rem); */
                }
                @media ${device.mediaMinLarge} {
                    font-size: 3rem;
                }
            }
        }
    }
`

const Podcast = styled.div` 
    position: relative;
    display: flex;
    flex-direction: column;
    h3 {
        text-transform: uppercase;
    }
`

const Podcasts = React.forwardRef(({tl, podcastHeading, homePodcasts}, ref) => {

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
              {homePodcasts && homePodcasts.map(podcast => {
                return (
                  <Podcast>
                    <Link to={`/podcast/${podcast.slug.current}`}>
                      <GatsbyImage
                          image={podcast.heroImage.asset.gatsbyImageData}
                          alt={podcast.heroImage.alt}
                          placeholder="blurred"
                          layout="fullWidth"
                          className="podcastImgWrapper"
                          imgClassName="podcastImg"
                      />
                    </Link>
                  </Podcast>
                )
              })}
            </div>
            <div className="rightCol">
                <h2 className="podcastHeading">{podcastHeading}</h2>
            </div>
        </PodcastsWrapper>
    )
}
)

export default Podcasts