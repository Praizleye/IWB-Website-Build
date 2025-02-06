import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StyleOurInterest } from "./OurInterest.styled";
import images from "../../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurInterest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const interests = [
    {label:"Business Development", body:"We empower entrepreneurs in our community by providing programs and resources that help them scale their businesses and develop impactful products, driving positive social change." },
    {label:"Digital Technology", body:"Our talents are exposed to emerging technologies and digital trends, they are adept at navigating the new frontier and leveraging cutting-edge technologies for profitability in an ever evolving digital landscape." },
    {label:"Leadership Development", body:"Our community is home to some of the finest thought leaders  and  change makers in the continent, who are steering innovation and shaping the future." },
  ]

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  // const animateHeading = {
  //   hidden: {
  //     opacity: 0,
  //     x: 15,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: "easeIn",
  //       delay: 0.2,
  //     },
  //   },
  // };

  return (
    <StyleOurInterest id="Scope">
      <div className="heading-wrapper">
        <div className="heading" style={{fontFamily: 'Lunema'}}>
          Our Scope
          {/* <motion.span
            initial="hidden"
            whileInView="visible"
            variants={animateHeading}
          >
            Our scope
          </motion.span> */}
        </div>
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
          {interests.map(({label, body}, index) =>(<div
            className={`Ourinterest-section ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className={`section-1 subheading ${
                activeIndex === index ? "active" : ""
              }`}
              style={{fontFamily: 'Lunema'}}
            >
              {label}
            </div>
            <div className={`section-1 textDesc ${
                activeIndex === index ? "active" : ""
              }`}>
              {body}
            </div>
          </div>))}
          {/* <div
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
          </div> */}
        </div>
      </motion.div>
    </StyleOurInterest>
  );
};

export default OurInterest;
