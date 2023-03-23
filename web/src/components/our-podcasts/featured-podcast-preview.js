import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import BlockContent from "../block-content";
import { FaGoogle, FaSpotify, FaPodcast, FaAmazon, FaArrowRight } from 'react-icons/fa';
import { SiIheartradio } from "react-icons/si";
import { BsFillPlayFill } from "react-icons/bs";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        a {
          color: ${colors.FAGrey};
          display: block;
          &:hover {
            color: ${colors.FAGrey};
            transform: translateY(-2px) scale(1.2);
            transition: transform 0.25s;
          }
          &:visited {
            color: ${colors.FAGrey};
          }
          svg {
            font-size: 1.5rem;
          }
        }
    }
`

const Excerpt = styled.div` 
  margin-bottom: 1rem;
  p {
    line-height: 1.35rem;
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

const FeaturedPodcastPreview = ({node}) => {

  return (
    <div>
      <Link to={`/podcast/${node.slug.current}`}>
        <GatsbyImage
          image={node.previewImage.asset.gatsbyImageData}
          alt={node.previewImage.alt}
          // aspectRatio={1/1}
          placeholder="blurred"
          layout="fullWidth"
          objectPosition="0 0"
          className="podcastsSectionImg"
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
          <Typography>Tell me more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {node._rawExcerpt && (
            <Excerpt>
              <BlockContent blocks={node._rawExcerpt} />
            </Excerpt>
          )}
          <LinkContent>
              {/* <Link to={`/podcast/${node.slug.current}`} className="read-more-link"><BsFillPlayFill/>Play</Link> */}
              {!!node.omnyWidget ?
                <a href={`https://omny.fm/shows/${node.omnyWidget}`} target="_blank" rel="noreferrer" className="read-more-link"><BsFillPlayFill/> Play</a> 
                : null
              }
              <IconList>
                {node.podcastLink && (<li><a href={node.podcastLink} target="_blank" rel="noreferrer"><FaPodcast/></a></li>)}
                {node.spotifyLink && (<li><a href={node.spotifyLink} target="_blank" rel="noreferrer"><FaSpotify/></a></li>)}
                {node.amazonLink && (<li><a href={node.amazonLink} target="_blank" rel="noreferrer"><FaGoogle/></a></li>)}
                {node.googleLink && (<li><a href={node.amazonLink} target="_blank" rel="noreferrer"><FaAmazon/></a></li>)}
                {node.iHeartRadioLink && (<li><a href={node.iHeartRadioLink} target="_blank" rel="noreferrer"><SiIheartradio/></a></li>)}
              </IconList>
          </LinkContent>
          <Link to={`/podcast/${node.slug.current}`} className="read-more-link"><FaArrowRight/> Read more about this podcast</Link>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FeaturedPodcastPreview