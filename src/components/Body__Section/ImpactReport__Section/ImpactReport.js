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
        <span>Achievements</span>
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
            <div className="subSectionReport__figure">$10,000 Scholarships</div>
            {/* <div className="subSectionReport__figure">
              <img
                src={images.PartnershipFig}
                alt="Scholarships via IWB by Tekedia "
              />
            </div> */}
          </div>
          <div className="subSectionReport__text">
            Through Ladder by IWB, over 210 scholars across Africa have been
            funded to study Business Innovation at Tekedia.
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
            <div className="subSectionReport__figure">
              5000<sup>+</sup> Talent
            </div>
          </div>
          <div className="subSectionReport__text">
            Our community programs have impacted and provided opportunities for
            over 5000 African Talent.
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
            <div className="subSectionReport__figure">$25,000 Resources</div>
          </div>
          <div className="subSectionReport__text">
            Over $25,000 worth of resources have been shared with our audience
            via Channels.
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
            Over 3000 subscribers available on our mailing-list, looking forward
            to finding the right offers in business and tech
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
            Over 120 youths across Africa have been actively part of our
            workstream as volunteers.
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
              200<sup>+</sup> Bridge Alums
            </div>
          </div>
          <div className="subSectionReport__text">
            Our Bridge Program has upskilled over 200 learners who are shaping
            the future and steering innovation in Business/Tech.
          </div>
        </motion.div>
      </div>
    </StyleImpactReport>
  );
};

export default ImpactReport;
