import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StyleOurInterest } from "./OurInterest.styled";
import images from "../../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurInterest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  const animateHeading = {
    hidden: {
      opacity: 0,
      x: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
        delay: 0.2,
      },
    },
  };

  return (
    <StyleOurInterest id="Scope">
      <div className="heading">
        Our scope
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={animateHeading}
        >
          Our scope
        </motion.span>
      </div>

      <motion.div className="Ourinterest-body container">
        <div className="Ourinterest-img">
          <LazyLoadImage
            src={images.Interests}
            alt="Ourinterst-fig"
            effect="blur"
            // height={"25rem"}
          />
        </div>
        <div className="Ourinterests-sections container">
          <div
            className={`Ourinterest-section ${
              activeIndex === 0 ? "active" : ""
            }`}
          >
            <div
              className={`section-1 subheading ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              Technology
            </div>
            <div className="section-1 textDesc">
              We help young Africans explore tech opportunities and build
              careers in tech.
            </div>
          </div>
          <div
            className={`Ourinterest-section ${
              activeIndex === 1 ? "active" : ""
            }`}
          >
            <div
              className={`section-2 subheading ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              Business
            </div>
            <div className="section-2 textDesc">
              We build entrepreneurs and grow the next generation of
              industry-leading startups.
            </div>
          </div>
          <div
            className={`Ourinterest-section ${
              activeIndex === 2 ? "active" : ""
            }`}
          >
            <div
              className={`section-3 subheading ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              Leadership
            </div>
            <div className="section-3 textDesc">
              We provide resourceful leadership content for young leaders and
              working professionals to thrive in the marketplace.
            </div>
          </div>
        </div>
      </motion.div>
    </StyleOurInterest>
  );
};

export default OurInterest;
