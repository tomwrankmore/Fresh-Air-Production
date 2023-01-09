import React from "react";
import { graphql, Link } from "gatsby";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import CentralLogo from "../components/central-logo"
import GraphQLErrorList from "../components/graphql-error-list";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";
import { FaSpotify, FaPodcast, FaAmazon, FaArrowRight } from 'react-icons/fa';
import { SiIheartradio } from "react-icons/si";
import { BsFillPlayFill } from "react-icons/bs";

import PodcastGrid from "../components/our-podcasts/podcast-preview-grid";

// Material UI
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";

export const query = graphql`
  query OurPodcastsPageQuery {
    projects: allSanityPodcast(
      limit: 12
      sort: {publishedAt: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
              gatsbyImageData(
                layout: FULL_WIDTH, 
                fit: FILLMAX,
                placeholder: BLURRED,
                formats: AUTO
                )
            }
            alt
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

const OurPodcastsWrapper = styled.div` 
    padding: 120px 2rem 2rem;
    position: relative;
    .read-more-link {
        flex: 1;
        text-decoration: none;
        font-weight: bold;
        color: ${colors.FAGrey};
        display: flex;
        gap: 6px;
        &:hover {
            text-decoration: underline;
        }
         &:visited {
          color: ${colors.FAGrey};
        }
    }
    .css-6bxxch-MuiPaper-root-MuiAccordion-root.Mui-expanded {
        margin: 0  !important;
    }
`

const FeaturedPodcasts = styled.ul` 
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
    @media ${device.mediaMinMedium} {
        flex-direction: row;
    }
    /* padding: 120px 2rem 0 2rem */
    li {
        flex: 1;
        h3 {
            background-color: ${colors.FABlue};
            padding: 1rem;
            color: white;
        }
        .MuiAccordionDetails-root p {
            margin-bottom: 1rem;
        }

        .wwaSectionImg {
            max-height: 420px;
        }
    }
`

const LinkContent = styled.div` 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
`

const IconList = styled.ul` 
    display: flex;
    gap: 6px;
    li {
        flex: 0;
    }
`

const rootStyles =  {
   boxShadow: 'none'
}

const btnStyles =  {
    color: '#ffffff',
    backgroundColor: colors.FABlue,
    textTransform: 'uppercase'
}

const OurPodcasts = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const podcastNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs);

  console.log('podcastNodes podcastNodes podcastNodes:', podcastNodes)

    return (
        <Layout>
            <SEO title="What We Do" />
            <CentralLogo />
            <OurPodcastsWrapper className="our-podcasts-wrapper">
                {/* <FeaturedPodcasts>
                    <li>
                        <div>
                            <StaticImage
                                src="../assets/podcast-1.png"
                                alt="Founder"
                                placeholder="blurred"
                                layout="fullWidth"
                                aspectRatio={1/1}
                                objectPosition="0 0"
                                className="podcastsSectionImg"
                                imgClassName=''
                            />
                            <Accordion 
                                disableGutters={true}
                                sx={rootStyles}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{color: '#ffffff'}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={btnStyles}
                                >
                                    <Typography>Find out more</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Our Living Planet Report 2022 finds that global wildlife population sizes have plummeted by 69% on average since 1970.</Typography>
                                    <Typography>Join podcast host Cel Spellman on a whistle-stop tour around the world to find out about the health of our planet - and what nature desperately needs from us right now.</Typography>
                                    <LinkContent>
                                        <Link to="/" className="read-more-link"><BsFillPlayFill/>Play extract</Link>
                                        <IconList>
                                            <li><FaPodcast/></li>
                                            <li><FaSpotify/></li>
                                            <li><FaAmazon/></li>
                                            <li><SiIheartradio/></li>
                                        </IconList>
                                    </LinkContent>
                                    <Link to="/" className="read-more-link"><FaArrowRight/> Read more about this podcast</Link>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>
                    <li>
                        <div>
                            <StaticImage
                                src="../assets/podcast-2.png"
                                alt="Founder"
                                placeholder="blurred"
                                layout="fullWidth"
                                objectPosition="0 0"
                                className="podcastsSectionImg"
                                imgClassName=''
                            />
                            <Accordion 
                                disableGutters={true}
                                sx={rootStyles}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{color: '#ffffff'}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={btnStyles}
                                >
                                    <Typography>Find out more</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Our Living Planet Report 2022 finds that global wildlife population sizes have plummeted by 69% on average since 1970.</Typography>
                                    <Typography>Join podcast host Cel Spellman on a whistle-stop tour around the world to find out about the health of our planet - and what nature desperately needs from us right now.</Typography>
                                    <LinkContent>
                                        <Link to="/" className="read-more-link"><BsFillPlayFill/>Play extract</Link>
                                        <IconList>
                                            <li><FaPodcast/></li>
                                            <li><FaSpotify/></li>
                                            <li><FaAmazon/></li>
                                            <li><SiIheartradio/></li>
                                        </IconList>
                                    </LinkContent>
                                    <Link to="/" className="read-more-link"><FaArrowRight/> Read more about this podcast</Link>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>
                    <li>
                        <div>
                            <StaticImage
                                src="../assets/podcast-3.png"
                                alt="Founder"
                                placeholder="blurred"
                                layout="fullWidth"
                                objectPosition="0 0"
                                className="podcastsSectionImg"
                                imgClassName=''
                            />
                            <Accordion 
                                disableGutters={true}
                                sx={rootStyles}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{color: '#ffffff'}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={btnStyles}
                                >
                                    <Typography>Find out more</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Our Living Planet Report 2022 finds that global wildlife population sizes have plummeted by 69% on average since 1970.</Typography>
                                    <Typography>Join podcast host Cel Spellman on a whistle-stop tour around the world to find out about the health of our planet - and what nature desperately needs from us right now.</Typography>
                                    <LinkContent>
                                        <Link to="/" className="read-more-link"><BsFillPlayFill/>Play extract</Link>
                                        <IconList>
                                            <li><FaPodcast/></li>
                                            <li><FaSpotify/></li>
                                            <li><FaAmazon/></li>
                                            <li><SiIheartradio/></li>
                                        </IconList>
                                    </LinkContent>
                                    <Link to="/" className="read-more-link"><FaArrowRight/> Read more about this podcast</Link>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>
                </FeaturedPodcasts> */}
                {podcastNodes && podcastNodes.length > 0 && <PodcastGrid nodes={podcastNodes} />}
            </OurPodcastsWrapper>
        </Layout>

    )
}

export default OurPodcasts
