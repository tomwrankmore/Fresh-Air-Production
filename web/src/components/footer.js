import React from "react";
import { Link } from "gatsby";
import Logo from "../assets/FA-logo.inline.svg"
import { StyledFooter, FooterWrapper, NavigationWrapper, SiteInfo, LinkList, Subscribe} from './footer.styled';

const Footer = ({ children }) => {
    return (
        <StyledFooter>
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
                      <Link to='https://open.spotify.com/show/0HF5T1BVjaUR6dMlAamdB5' target='_blank' rel='noreferrer'>Spotify</Link>
                    </li>
                    
                    <li>
                      <Link to='https://podcasts.apple.com/gb/podcast/fresh-air/id214089682' target='_blank' rel='noreferrer'>Apple Podcasts</Link>
                    </li>
                    
                    <li>
                      <Link to='https://podcasts.google.com/search/Fresh%20Air' target='_blank' rel='noreferrer'>Google Podcasts</Link>
                    </li>
                    
                </LinkList>
                <LinkList>
                    <li>
                      <Link to='https://www.instagram.com/freshairproductionuk/' target='_blank' rel='noreferrer'>Instagram</Link>
                    </li>
                    <li>
                      <Link to='https://www.facebook.com/freshairprod/' target='_blank' rel='noreferrer'>Facebook</Link>
                    </li>
                    <li>
                      <Link to='https://www.youtube.com/@freshairproduction9627' target='_blank' rel='noreferrer'>YouTube</Link>
                    </li>
                </LinkList>
                <Subscribe>
                    <p>Subscribe to our newsletter for news on the best new podcasts</p>
                    <form>
                        <input type="text" id="subscribe" name="sub" />
                    </form>
                </Subscribe>
            </NavigationWrapper>
            <SiteInfo>
                <Logo className="footerLogo" />
                <p>© {new Date().getFullYear()}, Fresh Air Productions</p>
            </SiteInfo>
          </FooterWrapper>
        </StyledFooter>
    )
  };
  
  export default Footer;
  