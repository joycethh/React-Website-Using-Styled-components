import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksWarp,
  FooterLinksContainer,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  FooterWarp,
  SocialMeida,
  SocialMediaWarp,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
} from "./FooterElement";
export const FooterSection = () => {
  return (
    <>
      <FooterContainer>
        <FooterWarp>
          <FooterLinksContainer>
            <FooterLinksWarp>
              <FooterLinkItem>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItem>

              <FooterLinkItem>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItem>
            </FooterLinksWarp>

            <FooterLinksWarp>
              <FooterLinkItem>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItem>

              <FooterLinkItem>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItem>
            </FooterLinksWarp>
          </FooterLinksContainer>
          <SocialMeida>
            <SocialMediaWarp>
              <SocialLogo to="/">Tang</SocialLogo>
              <WebsiteRights>
                {" "}
                Tang Ⓒ {new Date().getFullYear()}
                All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  arial-label="Instragram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                  <FaTwitter />
                  <SocialIconLink
                    href="https://www.linkedin.com/in/joycethh/"
                    target="_blank"
                    arial-label="LinkIn"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWarp>
          </SocialMeida>
        </FooterWarp>
      </FooterContainer>
    </>
  );
};
