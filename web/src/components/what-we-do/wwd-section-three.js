import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { StaticImage } from "gatsby-plugin-image";
import {SectionParagraph} from "../../styles/typography"
import {HeroWrapper, Column} from "./wwd.styled"

const WwdSectionThree = React.forwardRef(({tl}, ref) => {
    
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
                <SectionParagraph className="text_reveal">
                    At Fresh Air we're not playing at this. We make podcasts, radio ads, and radio programmes.
                </SectionParagraph>

                <SectionParagraph className="text_reveal">
                    We are industry-leading experts in what we do. We're building a business out of podcasts, and we don't apologise for wanting to make money. Because we make money, we pay people properly and treat people properly. We're proud of what we do. 
                </SectionParagraph>

                <SectionParagraph className="text_reveal">
                    We make work that we're proud of, and we work with people we like. Our clients like us back, and value our expertise. If we need the right kit, we buy the right kit.
                </SectionParagraph>

                <SectionParagraph className="text_reveal">
                    We care about what our clients care about, and we give them what they want… even if they're being difficult. We're not precious and we don't do arty strops. We respect our competitors, and we don't begrudge them work. There's plenty to go round. 
                </SectionParagraph>
            </Column>
            <Column className="clipped">
                <StaticImage
                    src="../../assets/wwd-section-3.png"
                    alt="What we do"
                    placeholder="blurred"
                    layout="fullWidth"
                    objectPosition="0 0"
                    className="wwdSectionImg"
                    imgClassName=''
                    // style={{height: '100%'}}
                />
            </Column>
        </HeroWrapper>
    )
})

export default WwdSectionThree;