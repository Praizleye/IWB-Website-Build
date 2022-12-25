import React from "react";
import { StyleFooter } from "./Footer.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import {
  animateHeading,
  animateSubheading,
  animateSubtext,
} from "./animateFooter";
import { BsLinkedin, BsTelegram, BsSpotify } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiOutlineYoutube,
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
        <button>Get Involved</button>
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
            <a href="#About us">About us</a>
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
            <a href="#Blog">Blog</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Community">Community</a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          Contact
          <motion.li variants={animateSubheading}>
            <a href="#email">connect.iwb@gmail.com</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#number">+234 812 0611 858</a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          Connect
          <motion.li variants={animateSubheading}>
            <a href="#About us">
              <BsLinkedin />
              <span>LinkedIn</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Impact report">
              <AiFillFacebook />
              <span>Facebook</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Resources">
              <BsTelegram />
              <span>Telegram</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Testimonial">
              <AiFillTwitterCircle />
              <span>Twitter</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Blog">
              <AiOutlineYoutube />
              <span>Youtube</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Community">
              <BsSpotify />
              <span>Spotify</span>
            </a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          Legal
          <motion.li variants={animateSubheading}>Terms of Service</motion.li>
        </motion.ul>
      </motion.div>
    </StyleFooter>
  );
};

export default Footer;
