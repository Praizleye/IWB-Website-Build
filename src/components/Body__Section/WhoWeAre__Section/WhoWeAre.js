import React from "react";

// ? import styles
import { StyleWhoWeAre } from "./WhoWeAre.styled";
import images from "../../../constants/images";

import { motion } from "framer-motion";
import {
  animateHeading,
  animateImg,
  animateImg2,
  animateText,
  animateBtn,
  animateText2,
} from "./animateAbout";

const WhoWeAre = () => {
  return (
    <StyleWhoWeAre>
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
            initial="hidden"
            whileInView="visible"
            variants={animateImg}
            src={images.WhoWeAre}
            alt="Who-we-are-logo"
          />
          <div className="img-cover"></div>
        </motion.div>
        <div className="About__text-content">
          <div className="sub-heading">Our Story</div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animateText}
            className="About__text-description"
          >
            Ideas Worth Billions is Africa’s fastest growing Human Capacity
            Development Network. Brooding a thriving community of Africa’s
            finest thought leaders, creators, and technopreneurs imbued with
            positive values and in-demand skills for sheer excellence in career,
            leadership, business, tech and everything else.
          </motion.div>
          <motion.button
            initial="hidden"
            whileInView="visible"
            variants={animateBtn}
          >
            Join Our Community
          </motion.button>
        </div>
      </div>

      <div className="About-body container" style={{ marginTop: "1.5rem" }}>
        <div className="About__text-content partner">
          <div className="sub-heading ">Partner with IWB</div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animateText2}
            className="About__text-description partner-description"
          >
            Individuals and Organizations around the globe are rooting for us,
            be a part of the future we are creating. Partner with us.
          </motion.div>
          <motion.button
            initial="hidden"
            whileInView="visible"
            variants={animateBtn}
          >
            Support IWB
          </motion.button>
        </div>
        <div className="WhoWeAre__img partner-img">
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={animateImg2}
            src={images.PartnerUs}
            alt="PartnerUs-figure"
          />
        </div>
      </div>
    </StyleWhoWeAre>
  );
};

export default WhoWeAre;
