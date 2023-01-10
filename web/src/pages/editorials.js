import React from "react";
import { Link } from "gatsby";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import CentralLogo from "../components/central-logo"
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import Layout from "../containers/layout";

// export const query = graphql`
//   query EditorialTemplateQuery($id: String!) {
//     editoriala: sanityEditorial {
//       allSanityEditorial {
//         edges {
//             node {
//               id
//               publishedAt
//               slug {
//                 current
//               }
//               isFeaturedPost
//             }
//           }
//         }
      
//     }
//   }
// `;

const EditorialsWrapper = styled.div`
    padding: 120px 0 0;
`

const EditorialsGrid = styled.div` 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    @media ${device.mediaMinMedium} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 50vh;
    }

    .editorials-link {
        text-decoration: none;
        color: black;
        @media ${device.mediaMinMedium} {
            &.featured-post {
                grid-row: span 2;
                grid-column: span 2;
                max-height: 100vh;
                height: 100%;
                .post {
                    max-height: 100%;
                }
            }
        }
        /* &.featured-post-left {
            grid-column: 1/3;
        }
        &.featured-post-right {
            grid-column: 3/5;
        } */
        &:hover {
            background-color: ${colors.FABlue};
            color: white;
        }

        .post {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            height: auto;
            padding: 0.5rem 0.5rem 0 0.5rem;
            flex-direction: row;
            max-height: 50vh;
            .imgWrapper {
                flex: 1;
                /* max-height: 400px; */
            }
            @media ${device.mediaMinMedium} {
                /* height: 450px; */
                flex-direction: column;
                align-items: center;
            }
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
`

const Editorials = () => {
    return (
        <Layout>
          <SEO title="Our Podcasts" />
          <CentralLogo />
          <EditorialsWrapper>
            <EditorialsGrid>
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
                            src="../assets/blog2.png"
                            alt="Smiling people"
                            placeholder="blurred"
                            objectFit="cover"
                            className="imgWrapper"
                            // aspectRatio={6/9}
                        />
                        <div className="titleWrapper">
                            <h3>Six ways to grow a podcast</h3>
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
                            // aspectRatio={6/9}
                        />
                        <div className="titleWrapper">
                            <h3>Six ways to grow a podcast</h3>
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
                            // aspectRatio={6/9}
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
                            // aspectRatio={6/9}
                        />
                        <div className="titleWrapper">
                            <h3>We talk to the winner of our Stopping to Notice competition</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/" className="editorials-link featured-post featured-post-left">
                    <div className="post">
                        <StaticImage
                            src="../assets/blog1.png"
                            alt="Smiling people"
                            placeholder="blurred"
                            objectFit="cover"
                            className="imgWrapper"
                            // aspectRatio={6/9}
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
                            // aspectRatio={6/9}
                        />
                        <div className="titleWrapper">
                            <h3>Six ways to grow a podcast</h3>
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
                            // aspectRatio={6/9}
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
                            // aspectRatio={6/9}
                        />
                        <div className="titleWrapper">
                            <h3>Post Title 5</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/" className="editorials-link featured-post featured-post-right"> 
                    <div className="post">
                        <StaticImage
                            src="../assets/blog1.png"
                            alt="Smiling people"
                            placeholder="blurred"
                            objectFit="cover"
                            className="imgWrapper"
                            aspectRatio={6/9}
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
                            aspectRatio={6/9}
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
                            aspectRatio={6/9}
                        />
                        <div className="titleWrapper">
                            <h3>We talk to the winner of our Stopping to Notice competition</h3>
                        </div>
                    </div>
                </Link>
            </EditorialsGrid>
          </EditorialsWrapper>
        </Layout>
    )
}

export default Editorials