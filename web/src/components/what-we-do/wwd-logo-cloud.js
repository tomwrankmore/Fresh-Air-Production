import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import { StaticImage } from "gatsby-plugin-image";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";

const WwdLogoCloudWrapper = styled.div` 
   padding: 2rem 2rem 0 2rem; 
   background-color: ${colors.FABlue};
   ul {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    grid-auto-rows: auto;
    grid-auto-flow: row dense;
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            .imgWrapper {
                max-width: 120px;
            }
        }
   }
`

const WwdLogoCloud = React.forwardRef((props, ref) => {
    return (
        <WwdLogoCloudWrapper ref={ref}>
            <ul>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
                <li>
                    <StaticImage
                        src="../../assets/company-logo-holder.png"
                        alt="Company logo"
                        placeholder="blurred"
                        objectFit="contain"
                        className="imgWrapper"
                    />
                </li>
            </ul>
        </WwdLogoCloudWrapper>
    )
})

export default WwdLogoCloud