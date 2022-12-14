import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../styles/colors";

const PodcastsWrapper = styled.div` 
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    position: relative;

    div {
        flex: 1;
        /* min-height: 100vh; */

        &.leftCol {
            div {
                /* height: 65vh; */
            }
            h3 {
                text-align: center;
                font-weight: normal;
                background-color: ${colors.freshAirBlue};
                color: white;
                padding: 0.5rem 0;
                text-transform: uppercase;
            }
        }

        &.rightCol {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            position: sticky;
            top: 0;
            h2 {
                max-width: 65%;
                text-align: center;
                line-height: 3.5rem;
                font-size: 2.875rem;
            }
        }
    }
`

const Podcasts = (props) => {
    return (
        <PodcastsWrapper>
            <div className="leftCol">
                <div>
                    <StaticImage
                        src="../assets/hero-people.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="constrained"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                    />
                    <h3>podcast 1</h3>
                </div>
                <div>
                    <StaticImage
                        src="../assets/hero-people.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="constrained"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                    />
                    <h3>podcast 2</h3>
                </div>
                <div>
                    <StaticImage
                        src="../assets/hero-people.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="constrained"
                        className="podcastImgWrapper"
                        imgClassName="podcastImg"
                    />
                    <h3>podcast 3</h3>
                </div>
            </div>
            <div className="rightCol">
                <h2>We produce 100 podcasts listened to over 2 million times every month</h2>
            </div>
        </PodcastsWrapper>
    )
}

export default Podcasts