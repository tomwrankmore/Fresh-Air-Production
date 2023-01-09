import React from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { cn, buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import { device } from "../../styles/mediaQueries";
import clientConfig from "../../../client-config";
import BlockContent from "../block-content";

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

const LinkContent = styled.div` 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    padding-top: 1rem;
`

const IconList = styled.ul` 
    display: flex;
    gap: 6px;
    li {
        flex: 0;
    }
`

const Excerpt = styled.div` 
  margin-bottom: 1rem;
`

const rootStyles =  {
  boxShadow: 'none'
}

const btnStyles =  {
   color: '#ffffff',
   backgroundColor: colors.FABlue,
   textTransform: 'uppercase'
}

const PodcastPreview = ({node}) => {

  const imageData = node.previewImage.asset.gatsbyImageData

  return (
    <>
      <GatsbyImage
        image={imageData}
        alt={node.alt}
        aspectRatio={1/1}
        placeholder="blurred"
        layout="fullWidth"
        objectPosition="0 0"
        className="podcastsSectionImg"
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
          {node._rawExcerpt && (
            <Excerpt>
              <BlockContent blocks={node._rawExcerpt} />
            </Excerpt>
          )}
          <LinkContent>
              <Link to="/" className="read-more-link"><BsFillPlayFill/>Play extract</Link>
              <IconList>
                  <li><FaPodcast/></li>
                  <li><FaSpotify/></li>
                  <li><FaAmazon/></li>
                  <li><SiIheartradio/></li>
              </IconList>
          </LinkContent>
          <Link to={`/podcast/${node.slug.current}`} className="read-more-link"><FaArrowRight/> Read more about this podcast</Link>
          </AccordionDetails>
      </Accordion>
    </>
  )
}

export default PodcastPreview