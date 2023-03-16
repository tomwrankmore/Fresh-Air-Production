import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import BlockContent from "../block-content";

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

  }
`

const textContentStyles = {
  // position: 'absolute',
  // backgroundColor: 'white',
  // zIndex: '101'
}

const ManagementItem = ({manager}) => {
  return (
    <li>
      <div>
          <GatsbyImage
              image={manager.image.asset.gatsbyImageData}
              alt={manager.image.alt}
              placeholder="blurred"
              layout="fullWidth"
              objectPosition="0 0"
              className="wwaSectionImg"
              imgClassName=''
          />
          <h3>{manager.name}</h3>
          <Accordion 
              disableGutters={true}
              sx={rootStyles}>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={btnStyles}
              >
              <Typography>{manager.title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={textContentStyles}>
                <Bio>
                  <BlockContent blocks={manager._rawBio} />
                </Bio>
              </AccordionDetails>
          </Accordion>
      </div>
    </li>
  )
}

export default ManagementItem