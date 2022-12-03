import React from "react";

//? importing Styles
import { StyleHero } from "./Styles/Hero.Styled";
import Nav from "./Nav/Nav";
import images from "../../constants/images";

import { motion } from "framer-motion";
import {
  animateText,
  animateText2,
  animateSvgPath,
  animateBtn,
  animateIlluminate,
} from "./Animate/heroAnimate";

const Hero = () => {
  return (
    <div>
      <Nav />
      <StyleHero>
        <div className="cta__text container">
          <motion.div initial="hidden" animate="visible" variants={animateText}>
            ...Building People{" "}
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={animateText}>
            Creating solutions
          </motion.div>
          <div>
            <svg
              width="337"
              height="40"
              viewBox="0 0 337 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial="hidden"
                animate="visible"
                variants={animateSvgPath}
                d="M15.6262 24.1414C136.561 4.35884 205.767 0.0767823 331.963 5.84925"
                stroke="#FFE600"
                stroke-width="6"
                stroke-linecap="round"
              />
              <motion.path
                initial="hidden"
                animate="visible"
                variants={animateSvgPath}
                d="M16.1812 24.2895C138.219 13.1758 207.553 13.8366 333.018 28.5879"
                stroke="#FFE600"
                stroke-width="6"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animateText2}
          >
            Connecting 500,000,000 young Africans to digital solutions and
            opportunities in 2030.
          </motion.div>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={animateBtn}
          >
            Get Started
          </motion.button>
        </div>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={animateIlluminate}
          className="illuminate"
          src={images.Light}
          alt="Illumination figure"
        />
        <img
          className="heroImg"
          src={images.HeroImg}
          alt="Hero-section-figure"
        />
      </StyleHero>
    </div>
  );
};

export default Hero;
