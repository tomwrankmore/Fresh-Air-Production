import React, {useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from "../block-content";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'

const AwardsSectionWrapper = styled.div`
  background-color: white;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${device.mediaMinLarge} {
    flex-direction: row;
  }
`;

const Column = styled.div`
  /* width: 100%; */
  flex: 1;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  &.awards-sticky {
    position: relative;
    display: none;
    @media ${device.mediaMinLarge} {
      position: sticky;
      display: block;
      top: 0;
      min-height: 100vh;
      height: 100%;
    }
  }

  &.column-awards-list {
    padding: 1rem;
  }

  @media ${device.mediaMinLarge} {
    /* width: 50%; */
  }

  .title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${colors.FAGrey};
    @media ${device.mediaMinMedium} {
      font-size: 1.875rem;
    }
    @media ${device.mediaMinLarge} {
      font-size: 2rem;
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
  ul {
    li.heroText {
    padding: 2rem;
    text-align: center;
      @media ${device.mediaMinMedium} {
          padding: 4rem;
          text-align: left;
      }
      position: relative;
    }
  }
  

  p.smallPrint {
    font-size: 0.875rem;
    display: block;
    margin-top: 1rem;
  }

  &.clipped {
    --clip: 0 100% 0 0;
    clip-path: inset(var(--clip));
  }
`;

  const AwardsList = styled.ul` 
    li {
      margin-bottom: 1rem;
      p {
        margin-bottom: 1rem;
        &:hover {
          color: ${colors.FABlue}
        }
      }
    }
    li:not(:last-child) {
        margin-bottom: 2rem;
    }
`

const WwdAwardsSection = React.forwardRef(({tl, nodes}, ref) => {

  const [bgImageIndex, setBgImageIndex] = useState(0)
  const [nodeBg, setNodeBg] = useState('white')

    // const { heroBackgroundImage } = useStaticQuery(
    //   graphql`
    //     query {
    //       heroBackgroundImage: file(relativePath: { eq: "wwd-section-4.png" }) {
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

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        tl.current = gsap.timeline()
        .to('.clipped', {
          duration: 2,
          ease: "power4.out",
          "--clip": '0% 0% 0% 0%',
          delay: 0.5
        })
      }, ref);
      return () => ctx.revert()
    }, [])

    return (
      <AwardsSectionWrapper ref={ref}>
          <Column className='awards-sticky clipped'>
            <BgImage 
              image={nodes[bgImageIndex].awardLeftImage.asset.localFile.childImageSharp.gatsbyImageData}
              className="background-image" 
            />
            {/* <GatsbyImage
              image={nodes[bgImageIndex].awardLeftImage.asset.gatsbyImageData}
              alt="What we do"
              placeholder="blurred"
              layout="fullWidth"
              objectPosition="0 0"
              className="wwdSectionImg"
              imgClassName=''
              // style={{height: '100%'}}
            /> */}
          </Column>
          <Column className="column-awards-list">
            <AwardsList>
              {nodes && nodes.map((node, idx) => {
                return (
                  <li key={node.id} onMouseEnter={() => setBgImageIndex(idx)} >
                      {/* <GatsbyImage
                        image={node.awardLogo.asset.gatsbyImageData}
                        alt={node.awardLogo.alt}
                        aspectRatio={1/1}
                        placeholder="blurred"
                        layout="fullWidth"
                        objectPosition="0 0"
                        className="podcastsSectionImg"
                      /> */}
                      
                     <h3 className="title">{node.title}</h3>
                     <BlockContent blocks={node._rawBody} />
                  </li>
                )
              })}
            </AwardsList>
          </Column>
      </AwardsSectionWrapper>
    )
})

export default WwdAwardsSection