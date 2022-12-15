import React from "react";
import { StyledFooter, FooterWrapper, NavigationWrapper, SiteInfo, LinkList, Subscribe} from './footer.styled';

const Footer = ({ children }) => {
    return (
        <StyledFooter>
          <FooterWrapper>
            <NavigationWrapper>
                <LinkList>
                    <li>Who we are</li>
                    <li>What we do</li>
                    <li>Our Podcasts</li>
                </LinkList>
                <LinkList>
                    <li>Careers</li>
                    <li>Fresh Ears</li>
                    <li>Awards</li>
                </LinkList>
                <LinkList>
                    <li>Spotify</li>
                    <li>Apple Podcasts</li>
                    <li>Google Podcasts</li>
                </LinkList>
                <LinkList>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>YouTube</li>
                </LinkList>
                <Subscribe>
                    <p>Subscribe to our newsletter for news on the best new podcasts</p>
                    <form>
                        <input type="text" id="subscribe" name="sub" />
                    </form>
                </Subscribe>
            </NavigationWrapper>
            <SiteInfo>
              © {new Date().getFullYear()}, Fresh Air Productions
            </SiteInfo>
          </FooterWrapper>
        </StyledFooter>
    )
  };
  
  export default Footer;
  