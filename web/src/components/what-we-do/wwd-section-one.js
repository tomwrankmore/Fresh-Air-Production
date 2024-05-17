import React, {useEffect} from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import BlockContent from "../block-content";
import { GatsbyImage } from "gatsby-plugin-image";
import {HeroWrapper, Column} from "./wwd.styled"

const WwdSectionOne = React.forwardRef(({tl, text, image}, ref) => {
    
    gsap.registerPlugin(SplitText);

    useEffect(() => {
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