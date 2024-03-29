import React from "react";

// ? import styles
import { StyleWhoWeAre } from "./WhoWeAre.styled";
import images from "../../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import {
  animateHeading,
  // animateImg,
  // animateImg2,
  // animateText,
  animateBtn,
  // animateText2,
} from "./animateAbout";

const WhoWeAre = () => {
  return (
    <StyleWhoWeAre id="About">
      <div className="heading">
        About us{" "}
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={animateHeading}
        >
          About us
        </motion.span>
      </div>
      <div className="About-body container">
        <motion.div className="WhoWeAre__img">
          <LazyLoadImage
            // initial="hidden"
            // whileInView="visible"
            // variants={animateImg}
            // viewport={{ once: true }}
            src={images.WhoWeAre}
            alt="Who-we-are-logo"
            effect="blur"
          />
          <div className="img-cover"></div>
        </motion.div>
        <motion.div
          className="About__text-content"
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={animateText}
          id="Join community"
        >
          <div className="sub-heading">Our Story</div>
          <div className="About__text-description">
            Ideas Worth Billions is Africa's leading Human Capacity Development
            Network. Raising a new crop of young Africans and Professionals
            imbued with value and in-demand skills for global excellence in
            Business, Technology and Leadership. IWB envisions to connect 500m
            youths in Africa to Digital Solutions and Opportunities in 2030.
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc9jK0Q30ugk64JYEhPBqa36xHi4Y42XFYcsSNixihUR1mabg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial="hidden"
              whileInView="visible"
              variants={animateBtn}
              whileHover={{ scale: 1.1 }}
            >
              Sign Up
            </motion.button>{" "}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="About-body container"
        style={{ marginTop: "1.5rem" }}
        // initial="hidden"
        // whileInView="visible"
        // variants={animateText}
        // viewport={{ once: true }}
      >
        <div className="About__text-content partner">
          <div className="sub-heading ">Partner with IWB</div>
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // variants={animateText2}
            // viewport={{ once: true }}
            className="About__text-description partner-description"
          >
            Individuals and Organizations around the globe are rooting for us,
            be a part of the future we are creating. Partner with us.
          </motion.div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf43YuTt11OdiILbQHftQsxV8Gu7Fjb9lsAyBtLaDwFr5pyOg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial="hidden"
              whileInView="visible"
              variants={animateBtn}
              className="partner-btn"
              whileHover={{ scale: 1.1 }}
            >
              Support IWB
            </motion.button>
          </a>
        </div>
        <div className="WhoWeAre__img partner-img">
          <LazyLoadImage
            src={images.PartnerUs}
            alt="PartnerUs-figure"
            effect="blur"
          />
        </div>
      </motion.div>
    </StyleWhoWeAre>
  );
};

export default WhoWeAre;
