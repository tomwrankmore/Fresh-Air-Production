import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import BlockContent from "../block-content";
import { GatsbyImage } from "gatsby-plugin-image";
import {SectionParagraph} from "../../styles/typography"
import {HeroWrapper, Column} from "./wwd.styled"

const WwdSectionThree = React.forwardRef(({tl, text, image}, ref) => {
    
    gsap.registerPlugin(SplitText);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

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

export default WwdSectionThree;