import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const BlogGrid = styled.div` 
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 50vh 50vh;

    .imgWrapper {
        flex: 1
    }
`

const FeaturedBlogPost = styled.div` 
    grid-row: 1/-1;
    grid-column: 1/5;
    display: flex;
    flex-direction: column;
    padding: 1rem 0 0 1rem;
    h3 {
        line-height: 2rem;
    }
`

const BlogPost = styled.div` 
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0 1rem;
    h3 {
        line-height: 2rem;
        text-transform: uppercase;
        font-weight: normal;
    }
`

const Blog = (props) => {
    return (
        <div>
            <BlogGrid>
                <FeaturedBlogPost>
                    <StaticImage
                        src="../../assets/blog1.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        objectFit="cover"
                        className="imgWrapper"
                    />
                    <h3>Post Title</h3>
                </FeaturedBlogPost>
                <BlogPost>
                    <StaticImage
                        src="../../assets/blog2.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        objectFit="cover"
                        className="imgWrapper"
                    />
                    <h3>Post Title</h3>
                </BlogPost>
                <BlogPost>
                    <StaticImage
                        src="../../assets/blog3.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        objectFit="cover"
                        className="imgWrapper"
                    />
                    <h3>Post Title</h3>
                </BlogPost>
                <BlogPost>
                    <StaticImage
                        src="../../assets/blog4.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        objectFit="cover"
                        className="imgWrapper"
                    />
                    <h3>Post Title</h3>
                </BlogPost>
                <BlogPost>
                    <StaticImage
                        src="../../assets/blog1.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        objectFit="cover"
                        className="imgWrapper"
                    />
                    <h3>Post Title</h3>
                </BlogPost>
            </BlogGrid>
        </div>
    )
}

export default Blog