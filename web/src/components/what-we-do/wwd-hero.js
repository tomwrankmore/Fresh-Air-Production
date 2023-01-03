import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
// import { convertToBgImage } from "gbimage-bridge"
// import BackgroundImage from 'gatsby-background-image'

const HeroWrapper = styled.div`
  background-color: ${colors.FABlue};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media ${device.mediaMinMedium} {
    flex-direction: row;
  }
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  .heroTitle {
    visibility: hidden;
    color: ${colors.streetEasyYellow};
    font-size: 1.875rem;
    margin-bottom: 1.875rem;
    font-family: 'Druk-Wide-Bold';
    @media ${device.mediaMinMedium} {
      font-size: 2.4rem;
    }
    @media ${device.mediaMinLarge} {
      font-size: 3rem;
    }
  }

  /* .heroTitle,
  .heroText {
    visibility: hidden;
  } */

  @media ${device.mediaMinMedium} {
    width: 50%;
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
    visibility: hidden;
    @media ${device.mediaMinMedium} {
        padding: 4rem;
        text-align: left;
    }
    position: relative;
    z-index: 1000;
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

const WwdHero = React.forwardRef((props, ref) => {

    // const { heroBackgroundImage } = useStaticQuery(
    //     graphql`
    //       query {
    //         heroBackgroundImage: file(relativePath: { eq: "wwd-hero.png" }) {
    //           childImageSharp {
    //             gatsbyImageData(
    //               width: 2000
    //               quality: 50
    //               webpOptions: { quality: 70 }
    //             )
    //           }
    //         }
    //       }
    //     `
    //   );

    // const pluginImage = getImage(heroBackgroundImage);
    // const bgImage = convertToBgImage(pluginImage);

    return (
        <HeroWrapper ref={ref}>
            {/* <Column className='clipped'>
                <BgImage image={pluginImage} className="background-image" Tag="section"/>
            </Column>
            <Column>
                <div className="heroText">
                    <h1 className="heroTitle">A new venue in the heart of exmouth market.</h1>
                    <div className="smaller-text-wrapper">
                        <p className="smallPrint heroText">
                            Your friendly neighbourhood bringer of vibes and flavour!!
                        </p>
                    </div>
                </div>
            </Column> */}
            <h1>col 1</h1>
            <h1>col 2</h1>
        </HeroWrapper>
    )
})

export default WwdHero