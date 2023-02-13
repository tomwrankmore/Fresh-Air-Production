import React from "react";
import { Link } from "gatsby";
import { colors } from "../styles/colors";
import styled from "styled-components";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Logo from "../assets/FA-logo.inline.svg"
import { StyledFooter, FooterWrapper, NavigationWrapper, SiteInfo, LinkList, Subscribe} from './footer.styled';

const rootStyles =  {
  boxShadow: 'none'
}

const btnStyles =  {
  color: '#ffffff',
  backgroundColor: colors.FADarkerBlue,
  textTransform: 'uppercase'
}

const Excerpt = styled.div` 
  margin-bottom: 1rem;
  p {
    line-height: 1.35rem;
  }
`

const Footer = ({ children }) => {
    return (
        <StyledFooter>
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
            <Typography className="mailing-list-title">SIGN UP TO OUR MAILING LIST</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Subscribe>
                <p>Subscribe to our newsletter for news on the best new podcasts</p>
                <form>
                  <input type="text" id="subscribe" name="sub" placeholder="Subscribe"/>
                  <button type="submit" className="submit-btn">Submit form</button>
                </form>
              </Subscribe> 
            </AccordionDetails>
          </Accordion>
          <FooterWrapper>
            <NavigationWrapper>
              <LinkList>
                <li><Link to='/who-we-are/'>Who we are</Link></li>
                <li><Link to='/what-we-do/'>What we do</Link></li>
                <li><Link to='/our-podcasts/'>Our Podcasts</Link></li>
              </LinkList>
              <LinkList>
                <li>Careers</li>
                <li>Fresh Ears</li>
                <li>Awards</li>
              </LinkList>
              <LinkList>
                <li>
                  <a href='https://open.spotify.com/show/0HF5T1BVjaUR6dMlAamdB5' target='_blank' rel='noreferrer'>Spotify</a>
                </li>
                
                <li>
                  <a href='https://podcasts.apple.com/gb/podcast/fresh-air/id214089682' target='_blank' rel='noreferrer'>Apple Podcasts</a>
                </li>
                
                <li>
                  <a href='https://podcasts.google.com/search/Fresh%20Air' target='_blank' rel='noreferrer'>Google Podcasts</a>
                </li>
              </LinkList>
              <LinkList>
                <li>
                  <a href='https://www.instagram.com/freshairproductionuk/' target='_blank' rel='noreferrer'>Instagram</a>
                </li>
                <li>
                  <a href='https://www.facebook.com/freshairprod/' target='_blank' rel='noreferrer'>Facebook</a>
                </li>
                <li>
                  <a href='https://www.youtube.com/@freshairproduction9627' target='_blank' rel='noreferrer'>YouTube</a>
                </li>
              </LinkList>
              {/* <Subscribe>
                <p>Subscribe to our newsletter for news on the best new podcasts</p>
                <form>
                  <input type="text" id="subscribe" name="sub" placeholder="Subscribe"/>
                </form>
              </Subscribe> */}
              <SiteInfo>
                <Logo className="footerLogo" />
                <p>© {new Date().getFullYear()}, Fresh Air Production</p>
              </SiteInfo>
            </NavigationWrapper>
          </FooterWrapper>
        </StyledFooter>
    )
  };
  
  export default Footer;
  