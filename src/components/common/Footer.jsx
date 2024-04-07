import React from "react";

import { NAV_LINKS, SOCIAL_MEDIA_ACs, navLinks, socialMediaACs } from "../../statics/data";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container-lg">
        <div className="footer-wrapper">
          <h1 className="footer__logo uppercase">
            <a href="#">Manav.</a>
          </h1>
          <>
            <div className="footer__contact">
              {SOCIAL_MEDIA_ACs.map((currSocialMedia, index) => {
                return (
                  <a
                    href={currSocialMedia.link}
                    key={index}
                    className="footer__contact--link"
                  >
                    {currSocialMedia.icon}
                  </a>
                );
              })}
            </div>
            <div className="footer__nav">
              {NAV_LINKS.map((currNavLink, index) => {
                return (
                  <a
                    href={currNavLink.link}
                    key={index}
                    className="footer__nav--link uppercase"
                  >
                    {currNavLink.label}
                  </a>
                );
              })}
            </div>
          </>
        </div>
        <div>
          <p className="footer__copyright">
            © {currentYear} MANAV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
