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
import SubscribeForm from "../components/subscribe-form"
import Logo from "../assets/FA-logo.inline.svg"
import { StyledFooter, FooterWrapper, NavigationWrapper, SiteInfo, LinkList, Subscribe} from './footer.styled';

const rootStyles =  {
  boxShadow: 'none',
  backgroundColor: '#27D7FE'
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
            <Typography className="mailing-list-title">SIGN UP TO PODCAST RECOMMENDS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Subscribe>
                <p>Get the latest podcast news, recommends, insights and nonsense in your inbox every Friday.</p>
                <SubscribeForm />
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
                <li><Link to='/terms/'>Terms</Link></li>
                <li><Link to='/privacy-policy/'>Privacy Policy</Link></li>
                <li><Link to='/modern-slavery-statement/'>Modern Slavery Statement</Link></li>
                <li><Link to='/acceptable-use/'>Acceptable Use</Link></li>
              </LinkList>
              <LinkList>
                <li>
                  <a href='https://open.spotify.com/show/48BxMP3zf9wkQkFyUmb1W5?si=11bbf25b73e94894' target='_blank' rel='noreferrer'>Spotify</a>
                </li>
                
                <li>
                  <a href='https://podcasts.apple.com/gb/podcast/fresh-ears/id1519422034' target='_blank' rel='noreferrer'>Apple Podcasts</a>
                </li>
                
                <li>
                  <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9vbW55LmZtL3Nob3dzL2ZyZXNoLWFpci1zaGFyZWQtZmlsZXMvcGxheWxpc3RzL3BvZGNhc3QucnNz?sa=X&ved=0CAMQ4aUDahcKEwjwk8nt5qj9AhUAAAAAHQAAAAAQFw' target='_blank' rel='noreferrer'>Google Podcasts</a>
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
              {/* <SiteInfo>
                
              </SiteInfo> */}
                <Logo className="footerLogo" />
                <p className="copyright">© {new Date().getFullYear()}</p>
            </NavigationWrapper>
          </FooterWrapper>
        </StyledFooter>
    )
  };
  
  export default Footer;
  