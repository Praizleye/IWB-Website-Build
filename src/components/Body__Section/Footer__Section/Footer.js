import React from "react";
import { StyleFooter } from "./Footer.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import {
  animateHeading,
  animateSubheading,
  animateSubtext,
} from "./animateFooter";
import { BsTelegram, BsSpotify } from "react-icons/bs";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <StyleFooter>
      <motion.div
        className="heading"
        initial="hidden"
        whileInView="visible"
        variants={animateHeading}
      >
        <motion.span variants={animateSubheading}>Create .</motion.span>{" "}
        <motion.span variants={animateSubheading}>Connect . </motion.span>{" "}
        <motion.span variants={animateSubheading}>Thrive &#62;</motion.span>
        <motion.div variants={animateSubtext}>
          We are building a new generation of young professionals leveraging on
          the new economy.
        </motion.div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf43YuTt11OdiILbQHftQsxV8Gu7Fjb9lsAyBtLaDwFr5pyOg/viewform?usp=sf_link"
          target="_blanK"
          rel="noopener noreferrer"
        >
          <button>Get Involved</button>
        </a>
      </motion.div>
      <motion.div
        className="links"
        initial="hidden"
        whileInView="visible"
        variants={animateHeading}
      >
        <motion.img
          src={images.FooterLogo}
          alt="iwb-white-logo"
          variants={animateHeading}
        />
        <motion.ul variants={animateHeading}>
          Quick
          <motion.li variants={animateSubheading}>
            <a href="#About">About us</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Impact report">Impact report</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Resources">Resources</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Testimonial">Testimonial</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="https://www.linkedin.com/company/ideas-worth-billions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog(LinkedIn)
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9jK0Q30ugk64JYEhPBqa36xHi4Y42XFYcsSNixihUR1mabg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community
            </a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          Contact
          <motion.li variants={animateSubheading}>
            <a
              href="mailto:connect.iwb@gmail.com?subject=Mail from our Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              connect.iwb@gmail.com
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#number">+234 812 0611 858</a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          Connect
          <motion.li variants={animateSubheading}>
            <a
              href="https://www.linkedin.com/company/ideas-worth-billions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
              <span>LinkedIn</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="https://web.facebook.com/iwb.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
              <span>Facebook</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="https://t.me/iwb_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelegram />
              <span>Telegram</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="https://twitter.com/iwb_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterSquare />
              <span>Twitter</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="https://www.youtube.com/@ideasworthbillions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
              <span>Youtube</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="https://anchor.fm/ideasworthbillions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSpotify />
              <span>Spotify</span>
            </a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          Legal
          <motion.li variants={animateSubheading}>
            <a href="#nothing">Terms of Service</a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </StyleFooter>
  );
};

export default Footer;
