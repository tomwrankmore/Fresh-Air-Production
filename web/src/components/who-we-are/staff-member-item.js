import React, { useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import BlockContent from "../block-content";

import { FaSpotify, FaPodcast, FaAmazon, FaArrowRight } from 'react-icons/fa';
import { SiIheartradio } from "react-icons/si";
import { BsFillPlayFill } from "react-icons/bs";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

  const rootStyles =  {
    boxShadow: 'none'
  }

  const btnStyles =  {
    color: '#ffffff',
    backgroundColor: colors.FAGrey
  }

  const Bio = styled.div` 
    padding-top: 1rem;
    p {
      line-height: initial;
      color: pink;
    }
  `

  const StaffItem = ({staffMember}) => {
    useEffect(() => {
      
    }, [])
    return (
      <li>
        <GatsbyImage
            image={staffMember.image.asset.gatsbyImageData}
            alt="Richard Blakem"
            placeholder="blurred"
            layout="fullWidth"
            objectPosition="0 0"
            className="wwaSectionImg"
            imgClassName=''
        />
        <h3>{staffMember.name}</h3>
        <Accordion 
            disableGutters={true}
            sx={rootStyles}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={btnStyles}
          >
          <Typography>{staffMember.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Bio>
              <BlockContent blocks={staffMember._rawBio} />
            </Bio>
          </AccordionDetails>
        </Accordion>
      </li>
    )
  }

export default StaffItem