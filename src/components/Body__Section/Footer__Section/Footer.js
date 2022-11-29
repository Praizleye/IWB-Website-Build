import React from "react";
import { StyleFooter } from "./Footer.styled";
import images from "../../../constants/images";

const Footer = () => {
  return (
    <StyleFooter>
      <div className="heading">
        Create . Connect . Thrive &#62;
        <div>
          We are building a new generation of young professionals leveraging on
          the new economy.
        </div>
        <button>Get involved</button>
      </div>
      <div className="links">
        <img src={images.FooterLogo} alt="iwb-white-logo" />
        <ul>
          Quick links
          <li>
            <a href="#About us">About us</a>
          </li>
          <li>
            <a href="#Impact report">Impact report</a>
          </li>
          <li>
            <a href="#Resources">Resources</a>
          </li>
          <li>
            <a href="#Testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Community">Community</a>
          </li>
        </ul>

        <ul>
          Contact
          <li>
            <a href="#email">connect.iwb@gmail.com</a>
          </li>
          <li>
            <a href="#number">+234 812 0611 858</a>
          </li>
        </ul>

        <ul>
          Connect
          <li>
            <a href="#About us">LinkedIn</a>
          </li>
          <li>
            <a href="#Impact report">Facebook</a>
          </li>
          <li>
            <a href="#Resources">Telegram</a>
          </li>
          <li>
            <a href="#Testimonial">Twitter</a>
          </li>
          <li>
            <a href="#Blog">Youtube</a>
          </li>
          <li>
            <a href="#Community">Spotify</a>
          </li>
        </ul>

        <ul>
          Legal
          <li>Terms of Service</li>
        </ul>
      </div>
    </StyleFooter>
  );
};

export default Footer;
