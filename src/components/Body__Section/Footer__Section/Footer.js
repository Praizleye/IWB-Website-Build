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
        <button>
          <a href="https://forms.gle/2uuebmvMV91kHZ6s7">Get Involved</a>
        </button>
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
            <a href="#Blog">Blog</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="https://forms.gle/2uuebmvMV91kHZ6s7">Community</a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          Contact
          <motion.li variants={animateSubheading}>
            <a href="mailto:connect.iwb@gmail.com?subject=Mail from our Website">
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
            <a href="https://www.linkedin.com/company/ideas-worth-billions/">
              <AiFillLinkedin />
              <span>LinkedIn</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="https://web.facebook.com/iwb.official/">
              <AiFillFacebook />
              <span>Facebook</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="https://t.me/iwb_official">
              <BsTelegram />
              <span>Telegram</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="https://twitter.com/iwb_official">
              <AiFillTwitterSquare />
              <span>Twitter</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="https://www.youtube.com/@ideasworthbillions">
              <AiFillYoutube />
              <span>Youtube</span>
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="https://anchor.fm/ideasworthbillions">
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
