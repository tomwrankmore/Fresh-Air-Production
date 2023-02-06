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
            We say yes, then we work out how to do it. We're proud of how we do it. We work together on pitches and brainstorms, no matter whose project it ends up being. We get noticed for our work. We win awards. Colleagues and clients will send emails at weird times - weekends and evenings. That doesn't mean you're expected to do the same or respond unless it's desperate. Holidays are for turning off.
          </SectionParagraph>
          
          <SectionParagraph className="text_reveal">
            We don't wallow in mistakes. No-one dies, and there are no witch hunts. We make something, so we can change it.
          </SectionParagraph>
          
          <SectionParagraph className="text_reveal">
            We laugh. Our clients want brilliant work that delivers. We give them brilliant work that delivers. And an experience that means they come back for more.
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