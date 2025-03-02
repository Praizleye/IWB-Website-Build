import React from "react";

//? importing Styles
import { StyleHero } from "./Styles/Hero.Styled";
// import Nav from "./Nav/Nav";
import images from "../../constants/images";

import { motion } from "framer-motion";
import {
  animateText,
  animateText2,
  animateSvgPath,
  animateBtn,
  animateIlluminate,
} from "./Animate/heroAnimate";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Hero = () => {
  return (
    <div>
      {/* <Nav /> */}
      <StyleHero id="home">
        <div className="cta__text container">
          <motion.div initial="hidden" animate="visible" variants={animateText}>
            ...Building People{" "}
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={animateText}>
            Creating Solutions
          </motion.div>
          <div>
            <motion.svg
              width="337"
              height="40"
              viewBox="0 0 337 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                initial="hidden"
                animate="visible"
                variants={animateSvgPath}
                d="M15.6262 24.1414C136.561 4.35884 205.767 0.0767823 331.963 5.84925"
                stroke="#FFE600"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <motion.path
                initial="hidden"
                animate="visible"
                variants={animateSvgPath}
                d="M16.1812 24.2895C138.219 13.1758 207.553 13.8366 333.018 28.5879"
                stroke="#FFE600"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animateText2}
          >
            Connecting 500,000,000 Africans to Digital Solutions and
            Opportunities by 2030.
          </motion.div>
          <a
            href="https://whatsapp.com/channel/0029VaNQdGFLikg7MCCHRM0Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial="hidden"
              animate="visible"
              variants={animateBtn}
            >
              Join Channels
            </motion.button>
          </a>
        </div>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={animateIlluminate}
          className="illuminate"
          src={images.Light}
          alt="Illumination figure"
        />
        <LazyLoadImage
          className="heroImg"
          src={images.HeroImg}
          alt="Hero-section-figure"
          effect="blur"
        />
      </StyleHero>
    </div>
  );
};

export default Hero;
