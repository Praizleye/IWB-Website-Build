import React from "react";
import { StyleFooter, StyleFooterLinks } from "./Footer.styled";
import images from "../../../constants/images";

const Footer = () => {
  return (
    <div>
      <StyleFooter>
        <div className="Footer__container">
          <div className="Footer__heading">Companies that trust us</div>
          <div className="companies__container">
            <div className="companies__logo">
              <img
                src={images.FooterImg1}
                alt="An img of company that we partner with"
              />
            </div>
            <div className="companies__logo">
              <img
                src={images.FooterImg2}
                alt="An img of company that we partner with"
              />
            </div>
            <div className="companies__logo">
              <img
                src={images.FooterImg3}
                alt="An img of company that we partner with"
              />
            </div>
          </div>
        </div>
      </StyleFooter>

      <StyleFooterLinks>
        <div className="FooterLinks__contact-us">
          <img src={images.Logo} alt="iwb-logo" />
          <div className="company-name">Ideas Worth Billions</div>
          <div className="company-email">connect.iwb@gmail.com</div>
          <div className="company-number">+234(0)8120611858</div>
          <button>Get Started</button>
        </div>
        <ul className="FooterLinks__quick-links">
          <div className="heading">Quick Links</div>
          <li className="about__link">
            <a href="https://praizdcoder.netlify.app/">About</a>
          </li>
          <li className="impact-report__link">
            <a href="https://praizdcoder.netlify.app/">Impact Report</a>
          </li>
          <li className="resources__link">
            <a href="https://praizdcoder.netlify.app/">Resources</a>
          </li>
          <li className="testimonials__link">
            <a href="https://praizdcoder.netlify.app/">Testimonials</a>
          </li>
          <li className="blog__link">
            <a href="https://praizdcoder.netlify.app/">Blog</a>
          </li>
          <li className="community__link">
            <a href="https://praizdcoder.netlify.app/">Community</a>
          </li>
        </ul>
        <ul className="FooterLinks__social-links">
          <div className="heading">Connect with us</div>
          <li className="linkedin__social">
            <a href="https://praizdcoder.netlify.app/" id="linkedin">
              LinkedIn
            </a>
          </li>
          <li className="facebook__social">
            <a href="https://praizdcoder.netlify.app/" id="linkedin">
              Facebook
            </a>
          </li>
          <li className="twitter__social">
            <a href="https://praizdcoder.netlify.app/" id="linkedin">
              Twitter
            </a>
          </li>
          <li className="telegram__social">
            <a href="https://praizdcoder.netlify.app/" id="linkedin">
              Telegram
            </a>
          </li>
          <li className="youtube__social">
            <a href="https://praizdcoder.netlify.app/" id="linkedin">
              Youtube
            </a>
          </li>
          <li className="spotify__social">
            <a href="https://praizdcoder.netlify.app/" id="linkedin">
              Spotify
            </a>
          </li>
        </ul>
        <div className="FooterLinks__back-to-top">
          <img src={images.BackToTop} alt="go-back-to-the-top-icon" />
        </div>
      </StyleFooterLinks>
      <div
        style={{ textAlign: "center", fontWeight: "bold", margin: "0.5rem 0" }}
      >
        &#169; Ideas Worth Billions @2022
      </div>
    </div>
  );
};

export default Footer;
