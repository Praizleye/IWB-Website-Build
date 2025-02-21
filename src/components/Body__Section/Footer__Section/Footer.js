import React from "react";
import { StyleFooter } from "./Footer.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import {
  animateHeading,
  animateSubheading,
  animateSubtext,
} from "./animateFooter";
import {  BsWhatsapp, BsTwitter} from "react-icons/bs";
import {
  // AiFillTwitterSquare,
  AiFillFacebook,
  // AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <StyleFooter id="footer">
      <motion.div
        className="heading"
        initial="hidden"
        whileInView="visible"
        variants={animateHeading}
      >
        <motion.span variants={animateSubheading} style={{fontFamily: 'Lunema'}}>Create .</motion.span>{" "}
        <motion.span variants={animateSubheading} style={{fontFamily: 'Lunema'}}>Connect . </motion.span>{" "}
        <motion.span variants={animateSubheading} style={{fontFamily: 'Lunema'}}>Thrive &#62;</motion.span>
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
        <motion.ul variants={animateHeading} >
          <span style={{fontFamily: 'Lunema'}}>Quick</span>
          <motion.li variants={animateSubheading}>
            <a href="#About">About us</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Programs">Bridge</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Programs">Ladder</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Achievements">Achievements</a>
          </motion.li>
          {/* <motion.li variants={animateSubheading}>
            <a href="#Resources">Resources</a>
          </motion.li> */}
          {/* <motion.li variants={animateSubheading}>
            <a href="#Testimonial">Testimonial</a>
          </motion.li> */}
          {/* <motion.li variants={animateSubheading}>
            <a
              href="https://www.linkedin.com/company/ideas-worth-billions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog(LinkedIn)
            </a>
          </motion.li> */}
          <motion.li variants={animateSubheading}>
            <a
              href="https://forms.gle/KjYu3dMaEwZAKJVj8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a
              href="https://whatsapp.com/channel/0029VaNQdGFLikg7MCCHRM0Z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Channels
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf43YuTt11OdiILbQHftQsxV8Gu7Fjb9lsAyBtLaDwFr5pyOg/viewform?usp=sf_link">
              Support
            </a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Blog">Blog</a>
          </motion.li>
          <motion.li variants={animateSubheading}>
            <a href="#Store">Store</a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
        <span style={{fontFamily: 'Lunema'}}>Contact</span>
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
            <a href="#number">+234 812 0611 858</a>
          </motion.li>
        </motion.ul>

        <motion.ul variants={animateHeading}>
          <span style={{fontFamily: 'Lunema'}}>Connect</span>
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
              <BsTwitter />
              <span>Twitter</span>
            </a>
          </motion.li>
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
              href="https://whatsapp.com/channel/0029VaNQdGFLikg7MCCHRM0Z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp />
              <span>Whatsapp</span>
            </a>
          </motion.li>
          {/* <motion.li variants={animateSubheading}>
            <a
              href="https://t.me/iwb_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelegram />
              <span>Telegram</span>
            </a>
          </motion.li> */}
          
          {/* <motion.li variants={animateSubheading}>
            <a
              href="https://www.youtube.com/@ideasworthbillions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
              <span>Youtube</span>
            </a>
          </motion.li> */}
          {/* <motion.li variants={animateSubheading}>
            <a
              href="https://anchor.fm/ideasworthbillions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSpotify />
              <span>Spotify</span>
            </a>
          </motion.li> */}
        </motion.ul>

        <motion.ul variants={animateHeading}>
          <span style={{fontFamily: 'Lunema'}}>Legal</span>
          <motion.li variants={animateSubheading}>
            <a href="#Programs">Terms of Service</a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </StyleFooter>
  );
};

export default Footer;
