import React, {useRef} from "react";
import { graphql, Link } from "gatsby";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import CentralLogo from "../components/central-logo"
import GraphQLErrorList from "../components/graphql-error-list";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Marquee from "../components/marquee"
import { FaSpotify, FaPodcast, FaAmazon, FaArrowRight } from 'react-icons/fa';
import { SiIheartradio } from "react-icons/si";
import { BsFillPlayFill } from "react-icons/bs";

// Material UI
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";

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

const PodcastGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    gap: 4px;
    h3 {
        background-color: ${colors.FABlue};
        padding: 1rem;
        color: white;
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

const OurPodcasts = () => {
    return (
        <Layout>
            <SEO title="What We Do" />
            <CentralLogo />
            <OurPodcastsWrapper className="our-podcasts-wrapper">
                <FeaturedPodcasts>
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
                </FeaturedPodcasts>
                <PodcastGrid>
                    <div>
                        <StaticImage
                            src="../assets/podcast-4.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
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
                            <Typography>Find Our More</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
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
                    <div>
                        <StaticImage
                            src="../assets/podcast-5.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
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
                            <Typography>Find Our More</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
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
                    <div>
                        <StaticImage
                            src="../assets/podcast-6.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
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
                            <Typography>Find Our More</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
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
                    <div>
                        <StaticImage
                            src="../assets/podcast-7.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
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
                            <Typography>Find Our More</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
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
                    <div>
                        <StaticImage
                            src="../assets/podcast-4.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
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
                            <Typography>Find Our More</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
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
                    <div>
                        <StaticImage
                            src="../assets/podcast-5.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
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
                            <Typography>Find Our More</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
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
                    <div>
                        <StaticImage
                            src="../assets/podcast-6.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
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
                            <Typography>Find Our More</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
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
                    <div>
                        <StaticImage
                            src="../assets/podcast-7.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
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
                            <Typography>Find Our More</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
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
                </PodcastGrid>
            </OurPodcastsWrapper>
        </Layout>

    )
}

export default OurPodcasts
