import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";

const EditorialsTitleWrapper = styled.div` 
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-weight: normal;
    }
`

const EditorialsWrapper = styled.div` 
    display: flex;
    position: relative;
    padding: 0.5rem;
    flex-direction: column;

    @media ${device.mediaMinMedium} {
        flex-direction: row;
    }

    .editorials-link {
        text-decoration: none;
        color: black;
        &:hover {
            background-color: ${colors.FABlue};
            color: white;
        }
    }

    .titleWrapper {
        width: 100%;
        padding: 0 0.5rem;
        flex: 1;
        h3 {
            font-family: 'Polysans';
            font-weight: normal;
            text-transform: uppercase;
            text-align: left;
            padding: 0 0rem 0.875rem 0rem;
            @media ${device.mediaMinMedium} {
                padding: 0.875rem 0rem;
            }
        }
    }

    .editorials-left-col, 
    .editorials-right-col {
        @media ${device.mediaMinMedium} {
            flex: 1;
        }
    }

    .editorials-left-col {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0.5rem;
        @media ${device.mediaMinMedium} {
            height: 100vh;
            position: sticky;
            top: 0;
            justify-content: flex-start;
        }
    }

    .editorials-right-col {

    }

    .editorials-right-grid {
        display: grid;
        grid-template-columns: 1fr;
        @media ${device.mediaMinMedium} {
            grid-template-columns: 1fr 1fr;
        }

        .post {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            height: auto;
            padding: 0.5rem 0.5rem 0 0.5rem;
            flex-direction: row;
            .imgWrapper {
                flex: 1;
            }
            @media ${device.mediaMinMedium} {
                /* height: 450px; */
                flex-direction: column;
                align-items: center;
            }
        }
    }
`

const Editorials = (props) => {
    return (
        <>
            <EditorialsTitleWrapper>
                <h1>Editorials</h1>
                <p>View all Editorials</p>
                
            </EditorialsTitleWrapper>
            <EditorialsWrapper className="editorials-wrapper">
                {/* <Link to="/" className="editorials-link"> */}
                    <div className="editorials-left-col">
                        <StaticImage
                            src="../assets/blog1.png"
                            alt="Smiling people"
                            placeholder="blurred"
                            objectFit="cover"
                            className="imgWrapper"
                        />
                        <div className="titleWrapper">
                            <h3>Unearthed with Kew Gardens launches, exploring the relationship with food production and how it's made</h3>
                        </div>
                    </div>
                {/* </Link> */}
                <div className="editorials-right-col">
                    <div className="editorials-right-grid">
                        <Link to="/" className="editorials-link">
                            <div className="post">
                                <StaticImage
                                    src="../assets/blog2.png"
                                    alt="Smiling people"
                                    placeholder="blurred"
                                    objectFit="cover"
                                    className="imgWrapper"
                                />
                                <div className="titleWrapper">
                                    <h3>Six ways to grow a podcast</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="editorials-link">
                            <div className="post">
                                <StaticImage
                                    src="../assets/blog3.png"
                                    alt="Smiling people"
                                    placeholder="blurred"
                                    objectFit="cover"
                                    className="imgWrapper"
                                />
                                <div className="titleWrapper">
                                    <h3>We talk to the winner of our Stopping to Notice competition</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="editorials-link">
                            <div className="post">
                                <StaticImage
                                    src="../assets/blog1.png"
                                    alt="Smiling people"
                                    placeholder="blurred"
                                    objectFit="cover"
                                    className="imgWrapper"
                                />
                                <div className="titleWrapper">
                                    <h3>Fresh Air win Best Corporate Story Tellers 2022 award</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="editorials-link">
                            <div className="post">
                                <StaticImage
                                    src="../assets/blog2.png"
                                    alt="Smiling people"
                                    placeholder="blurred"
                                    objectFit="cover"
                                    className="imgWrapper"
                                />
                                <div className="titleWrapper">
                                    <h3>Behind the scenes of making a podcast </h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="editorials-link">
                            <div className="post">
                                <StaticImage
                                    src="../assets/blog3.png"
                                    alt="Smiling people"
                                    placeholder="blurred"
                                    objectFit="cover"
                                    className="imgWrapper"
                                />
                                <div className="titleWrapper">
                                    <h3>Post Title 5</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="editorials-link">
                            <div className="post">
                                <StaticImage
                                    src="../assets/blog1.png"
                                    alt="Smiling people"
                                    placeholder="blurred"
                                    objectFit="cover"
                                    className="imgWrapper"
                                />
                                <div className="titleWrapper">
                                    <h3>Post Title 6</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="editorials-link">
                            <div className="post">
                                <StaticImage
                                    src="../assets/blog2.png"
                                    alt="Smiling people"
                                    placeholder="blurred"
                                    objectFit="cover"
                                    className="imgWrapper"
                                />
                                <div className="titleWrapper">
                                    <h3>Six ways to grow a podcast</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="editorials-link">
                            <div className="post">
                                <StaticImage
                                    src="../assets/blog3.png"
                                    alt="Smiling people"
                                    placeholder="blurred"
                                    objectFit="cover"
                                    className="imgWrapper"
                                />
                                <div className="titleWrapper">
                                    <h3>We talk to the winner of our Stopping to Notice competition</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </EditorialsWrapper>
        </>
    )
}

export default Editorials