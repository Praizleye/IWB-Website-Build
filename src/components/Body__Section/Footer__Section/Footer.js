import React from "react";
import { StyleFooter } from "./Footer.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import {
  animateHeading,
  animateSubheading,
  //animateSubtext,
} from "./animateFooter";
import {BsX} from "react-icons/bs";
import {
  // AiFillTwitterSquare,
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <StyleFooter id="footer">
      {/* <motion.div
        className="heading"
        initial="hidden"
        whileInView="visible"
        variants={animateHeading}
      >
        <motion.span variants={animateSubheading} style={{fontFamily: "Host Grotesk"}}>Create .</motion.span>{" "}
        <motion.span variants={animateSubheading} style={{fontFamily: "Host Grotesk"}}>Connect . </motion.span>{" "}
        <motion.span variants={animateSubheading} style={{fontFamily: "Host Grotesk"}}>Thrive &#62;</motion.span>
        <motion.div variants={animateSubtext}>
          We are building a vibrant community of emerging leaders who are driving innovation and shaping the future.
        </motion.div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf43YuTt11OdiILbQHftQsxV8Gu7Fjb9lsAyBtLaDwFr5pyOg/viewform?usp=sf_link"
          target="_blanK"
          rel="noopener noreferrer"
        >
          <button>Get Involved</button>
        </a>
      </motion.div> */}
      <motion.div
        className="links"
        initial="hidden"
        whileInView="visible"
        variants={animateHeading}
      >
        <motion.img
          src={images.Logo}
          alt="iwb-white-logo"
          variants={animateHeading}
        />
        <motion.ul variants={animateHeading} >
          <span style={{fontFamily: "Host Grotesk"}}>Quick</span>
          <motion.li variants={animateSubheading}>
            <a href="#About">About</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Programs">Bridge</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Programs">Ladder</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Programs">Fellowship</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Achievements">Events</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Blog">Blog</a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          <span style={{fontFamily: "Host Grotesk"}}>Legal</span>
          <motion.li variants={animateSubheading}>
            <a href="#Programs">Privacy Policy</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Programs">Terms of use</a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
        <span style={{fontFamily: "Host Grotesk"}}>Contact</span>
          <motion.li variants={animateSubheading}>
            <a href="#number">+234 812 0611 858</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="mailto:hello@iwbafrica.org?subject=Mail from our Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@iwbafrica.org
            </a>
          </motion.li>
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
            <a
              href={window.location}
              rel="noopener noreferrer"
            >
             Gwarinpa, Abuja, Nigeria
            </a>
          </motion.li>
          {/* SOCIAL MEDIA LINKS */}
        <motion.li variants={animateHeading} className="socials">
          <motion.div variants={animateSubheading} className="social-icon">
            <a
              href="https://www.facebook.com/iwbafrica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
          </motion.div>
            <motion.div variants={animateSubheading} className="social-icon">
              <a
                href="https://www.linkedin.com/company/ideas-worth-billions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </motion.div>
            <motion.div variants={animateSubheading} className="social-icon">
              <a
                href="https://x.com/IWBAfrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsX />
              </a>
            </motion.div>
            <motion.div variants={animateSubheading} className="social-icon">
              <a
                href="https://www.youtube.com/@ideasworthbillions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </motion.div>
          </motion.li>
        </motion.ul>

        {/* <motion.ul variants={animateHeading}>
          <span style={{fontFamily: "Host Grotesk"}}>Connect</span>
          <motion.li variants={animateSubheading}>
            <a
              href="https://www.facebook.com/iwbafrica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
              <span>Facebook</span>
            </a>
          </motion.li>
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
              href="https://x.com/IWBAfrica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsX />
              <span>X</span>
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
          
        </motion.ul> */}
      </motion.div>
    </StyleFooter>
  );
};

export default Footer;
