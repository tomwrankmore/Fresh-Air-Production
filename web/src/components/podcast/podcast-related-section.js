import React, {useLayoutEffect, useRef} from "react";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
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

const RelatedPodcastsWrapper = styled.div` 
    padding: 2rem;
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

const PodcastRelatedSection = React.forwardRef(({tl}, ref) => {
  return (
    <RelatedPodcastsWrapper>
      <PodcastGrid>
        <div>
          <StaticImage
              src="../../assets/podcast-4.png"
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
              src="../../assets/podcast-5.png"
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
              src="../../assets/podcast-6.png"
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
              src="../../assets/podcast-7.png"
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
    </RelatedPodcastsWrapper>
  )
}
)

export default PodcastRelatedSection