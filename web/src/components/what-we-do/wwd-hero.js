import React, {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import BlockContent from "../block-content";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'

const HeroWrapper = styled.div`
  background-color: ${colors.FABlue};
  width: 100%;
  height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
  a {
    color: white!important;
  }
  @media ${device.mediaMinMedium} {
    flex-direction: row;
  }
`;

const Column = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  flex: 1;

  h3 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 1.875rem;
    color: white;
    @media ${device.mediaMinMedium} {
      font-size: 2rem;
      line-height: 2.4rem;
    }
  }

  .background-image {
    width: 100%;
    min-height: 50vh;
    @media ${device.mediaMinMedium} {
      min-height: 100vh;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.heroText {
    padding: 2rem;
    text-align: center;
    @media ${device.mediaMinMedium} {
        padding: 4rem;
        /* text-align: left; */
    }
    position: relative;
  }

  p.smallPrint {
    font-size: 0.875rem;
    display: block;
    margin-top: 1rem;
  }

  &.clipped {
    --clip: 0 100% 0 0;
    clip-path: inset(var(--clip));
    justify-content: flex-start;
  }
`;

const WwdHero = React.forwardRef(({tl, heroImg, heroCopy}, ref) => {

    // const { heroBackgroundImage } = useStaticQuery(
    //   graphql`
    //     query {
    //       heroBackgroundImage: file(relativePath: { eq: "wwd-hero.png" }) {
    //         childImageSharp {
    //           gatsbyImageData(
    //             width: 2000
    //             quality: 50
    //             placeholder: BLURRED
    //             formats: [AUTO, WEBP, AVIF]
    //           )
    //         }
    //       }
    //     }
    //   `
    // )
    // const pluginImage = getImage(heroBackgroundImage);
    // const bgImage = convertToBgImage(pluginImage);

    const heroBgImage = heroImg.asset.localFile.childImageSharp.gatsbyImageData

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        tl.current = gsap.timeline()
        .to('.clipped', {
          duration: 2,
          ease: "power4.out",
          "--clip": '0% 0% 0% 0%',
          delay: 0.5
        })
        .fromTo('.heroText', {
          yPercent: 20,
          stagger: 0.75,
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          yPercent: 0,
          stagger: 0.25
        }, '<+=0.5')
      }, ref);
      return () => ctx.revert()
    }, [])

    return (
      <HeroWrapper ref={ref}>
          <Column className='clipped'>
            <BgImage 
              image={heroBgImage}
              className="background-image" 
            />
          </Column>
          <Column>
              <div className="heroText">
                <BlockContent blocks={heroCopy} />
              </div>
          </Column>
      </HeroWrapper>
    )
})

export default WwdHero