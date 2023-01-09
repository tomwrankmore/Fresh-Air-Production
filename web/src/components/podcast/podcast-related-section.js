import React from "react";
import {colors} from "../../styles/colors"
import styled from "styled-components";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FaSpotify, FaPodcast, FaAmazon, FaArrowRight } from 'react-icons/fa';
import { SiIheartradio } from "react-icons/si";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RelatedPodcastsWrapper = styled.div` 
    padding: 0 2rem 2rem 2rem;
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

const PodcastGrid = styled.ul`
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
    a {
      display: block;
      color: ${colors.FAGrey};
      &:hover {
        color: ${colors.FAGrey};
        transform: translateY(-2px) scale(1.2);
        transition: transform 0.25s;
      }
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

const PodcastRelatedSection = React.forwardRef(({podcast}, ref) => {

  return (
    <RelatedPodcastsWrapper>
      <PodcastGrid>
        {podcast.relatedProjects && 
          podcast.relatedProjects.map(node => (
            <li key={node._id}>
              <Link to={`/podcast/${node.slug.current}`} >
                <GatsbyImage
                    image={node.previewImage.asset.gatsbyImageData}
                    alt={node.previewImage.alt}
                    placeholder="blurred"
                    layout="fullWidth"
                    objectPosition="0 0"
                    className="wwaSectionImg"
                    imgClassName=''
                />
              </Link>
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
                      {node.podcastLink && (<li><a href={node.podcastLink} target="_blank" rel="noreferrer"><FaPodcast/></a></li>)}
                      {node.spotifyLink && (<li><a href={node.spotifyLink} target="_blank" rel="noreferrer"><FaSpotify/></a></li>)}
                      {node.amazonLink && (<li><a href={node.amazonLink} target="_blank" rel="noreferrer"><FaAmazon/></a></li>)}
                      {node.iHeartRadioLink && (<li><a href={node.iHeartRadioLink} target="_blank" rel="noreferrer"><SiIheartradio/></a></li>)}
                    </IconList>
                    </LinkContent>
                    <Link to={`/podcast/${node.slug.current}`} className="read-more-link"><FaArrowRight/> Read more about this podcast</Link>
                  </AccordionDetails>
              </Accordion>
            </li>
          ))
        }
      </PodcastGrid>
    </RelatedPodcastsWrapper>
  )
}
)

export default PodcastRelatedSection