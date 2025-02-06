import React from "react";

// ? importing styles
import { StyleImpactReport } from "./ImpactReport.styled";
import images from "../../../constants/images";

import { motion } from "framer-motion";
import { animateCards } from "./animateImpact";

const ImpactReport = () => {
  return (
    <StyleImpactReport id="Achievements">
      <div className="ImpactReport__heading">
        Achievements
        <img src={images.Line} alt="text-underline" />
        <div>
          We are making great strides across spaces and communities in Africa.
        </div>
      </div>

      <div className="sectionReport__1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animateCards}
          className="subSectionReport__1"
        >
          <div className="subSectionReport__icon">
            <img src={images.Handshake} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              $10,000 Scholarships
            </div>
            {/* <div className="subSectionReport__figure">
              <img
                src={images.PartnershipFig}
                alt="Scholarships via IWB by Tekedia "
              />
            </div> */}
          </div>
          <div className="subSectionReport__text">
          Through Ladder by IWB, over 210 scholars across the globe have been funded to study Business Innovation at Tekedia.
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animateCards}
          className="subSectionReport__2"
        >
          <div className="subSectionReport__icon">
            <img src={images.TrainingTalents} alt="descriptive figure" />
            <div className="subSectionReport__figure">5000<sup>+</sup> Talents</div>
          </div>
          <div className="subSectionReport__text">
            Our community programs have impacted over 5000 talents in Africa, covering digital technology, leadership and business innovation.
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animateCards}
          className="subSectionReport__3"
        >
          <div className="subSectionReport__icon">
            <img src={images.Resources} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              $25,000 Resources
            </div>
          </div>
          <div className="subSectionReport__text">
            Over $25,000 worth of  resources have been shared with our audience via Channels.
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animateCards}
          className="subSectionReport__4"
        >
          <div className="subSectionReport__icon">
            <img src={images.Community} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              3,000<sup>+</sup> Reach
            </div>
          </div>
          <div className="subSectionReport__text">
            Over 3000 subscribers available on our mail-list, looking forward to finding the right offers and updates in business and tech.
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animateCards}
          className="subSectionReport__5"
        >
          <div className="subSectionReport__icon">
            <img src={images.Volunteers} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              100<sup>+</sup> Volunteers
            </div>
          </div>
          <div className="subSectionReport__text">
            Over 120 youths across Africa have been actively part of our workstream as volunteers.
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animateCards}
          className="subSectionReport__6"
        >
          <div className="subSectionReport__icon">
            <img src={images.StartupProjects} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              150<sup>+</sup> Bridge Alums
            </div>
          </div>
          <div className="subSectionReport__text">
            Our Bridge Program has upskilled over 150 learners who are shaping the future and steering innovation in Business/Tech.
          </div>
        </motion.div>
      </div>
    </StyleImpactReport>
  );
};

export default ImpactReport;
