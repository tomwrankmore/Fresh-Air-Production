import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import BlockContent from "../block-content";
import { GatsbyImage } from "gatsby-plugin-image";
import {SectionParagraph} from "../../styles/typography"
import {HeroWrapper, Column} from "./wwd.styled"
import styled from "styled-components";

const WwdSectionOne = React.forwardRef(({tl, text, image}, ref) => {
    
    gsap.registerPlugin(SplitText);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

        gsap.utils.toArray(".text_reveal").forEach(function(elem, idx) {
            const innerSplit = new SplitText(elem, {
                type: "lines",
                linesClass: "split_inner"
              });
            const outerSplit = new SplitText(elem, {
                type: "lines",
                linesClass: "split_outer"
            });
           
            const splitTimeline = gsap.timeline(
                {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 100%",
                    end: "bottom 0%",
                },
                onComplete: () => {
                    outerSplit.revert()
                    innerSplit.revert()        
                }
                });
            
            splitTimeline.from(innerSplit.lines, {
                duration: 1,
                yPercent: 101,
                ease: "back",
                stagger: 0.15,
                opacity: 0,
                // delay: idx / 10
            });
        })

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.clipped',
                start: "top 100%",
                // end: "bottom 0%",
                toggleActions: 'play none none reverse'
            },
        })
        .to('.clipped', {
            duration: 1,
            "--clip": '0% 0% 0% 0%'
        })

        }, ref);
        return () => ctx.revert()
    }, [])

    return (
        <HeroWrapper ref={ref}>
            <Column className="text">
              <BlockContent blocks={text}/>

              {/* <SectionParagraph className="text_reveal">
                  Fresh Air grew out of years making shows for national radio, with a mission to bring broadcast quality production values into podcasting.
              </SectionParagraph>

              <SectionParagraph className="text_reveal">
                  We help brands to create podcasts which people genuinely want to listen to, harnessing the power of audio to achieve measurable success with an intimate, in-depth medium that grabs and holds listeners' attention for over 20 minutes at a time.
              </SectionParagraph>

              <SectionParagraph className="text_reveal">
                  We're a team of passionate audio Producers, and we've worked for some of the world's biggest brands. We're also  storytellers, journalists, finance specialists, science experts, comedy producers, fashion lovers, and much more
              </SectionParagraph>

              <SectionParagraph className="text_reveal">We take the essence of a brand and bring it to life in audio.</SectionParagraph> */}
            </Column>
            <Column className="clipped">
              <GatsbyImage
                image={image.asset.gatsbyImageData}
                alt={image.alt}
                placeholder="blurred"
                layout="fullWidth"
                objectPosition="0 0"
                className="wwdSectionImg"
                imgClassName=''
              />
            </Column>
        </HeroWrapper>
    )
})

export default WwdSectionOne;