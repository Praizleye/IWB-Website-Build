import React from "react";

// ? import styles
import { StyleWhoWeAre } from "./WhoWeAre.styled";
import images from "../../../constants/images";

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
          <motion.img
            // initial="hidden"
            // whileInView="visible"
            // variants={animateImg}
            viewport={{ once: true }}
            src={images.WhoWeAre}
            alt="Who-we-are-logo"
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
            Ideas Worth Billions is Africa’s fastest growing Human Capacity
            Development Network. Brooding a thriving community of Africa’s
            finest thought leaders, creators, and technopreneurs imbued with
            positive values and in-demand skills for sheer excellence in career,
            leadership, business, tech and everything in-between.
          </div>
          <motion.button
            initial="hidden"
            whileInView="visible"
            variants={animateBtn}
            whileHover={{ scale: 1.1 }}
          >
            <a
              href="https://forms.gle/2uuebmvMV91kHZ6s7"
              target="_self"
              rel="noopener noreferrer"
            >
              Join Our Community
            </a>
          </motion.button>
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
          <motion.button
            initial="hidden"
            whileInView="visible"
            variants={animateBtn}
            className="partner-btn"
            whileHover={{ scale: 1.1 }}
          >
            Support IWB
          </motion.button>
        </div>
        <div className="WhoWeAre__img partner-img">
          <motion.img
            // initial="hidden"
            // whileInView="visible"
            // variants={animateImg2}
            // viewport={{ once: true }}
            src={images.PartnerUs}
            alt="PartnerUs-figure"
          />
        </div>
      </motion.div>
    </StyleWhoWeAre>
  );
};

export default WhoWeAre;
