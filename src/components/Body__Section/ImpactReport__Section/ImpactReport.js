import React from "react";

// ? importing styles
import { StyleImpactReport } from "./ImpactReport.styled";
import images from "../../../constants/images";

const ImpactReport = () => {
  return (
    <StyleImpactReport>
      <div className="ImpactReport__heading">
        Impact Report
        <img src={images.Line} alt="text-underline" />
        <div>
          We are making great strides across digital and local communities
        </div>
      </div>

      <div className="sectionReport__1">
        <div className="subSectionReport__1">
          <div className="subSectionReport__icon">
            <img src={images.Handshake} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              <img
                src={images.PartnershipFig}
                alt="Scholarships via IWB by Tekedia "
              />
            </div>
          </div>
          <div className="subSectionReport__text">
            Over 130 young scholars in IWB Community have been sponsored to
            study Business Administration at Tekedia.
          </div>
        </div>

        <div className="subSectionReport__2">
          <div className="subSectionReport__icon">
            <img src={images.TrainingTalents} alt="descriptive figure" />
            <div className="subSectionReport__figure">Training Talents</div>
          </div>
          <div className="subSectionReport__text">
            Over 3000 young professionals trained on Business, Digital
            Monetization and Digital Technology.
          </div>
        </div>

        <div className="subSectionReport__3">
          <div className="subSectionReport__icon">
            <img src={images.Resources} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              Resources worth $10,000
            </div>
          </div>
          <div className="subSectionReport__text">
            Over $10,000 worth of resources and opportunties shared with members
            of IWB Community.
          </div>
        </div>
      </div>

      <div className="sectionReport__2">
        <div className="subSectionReport__1">
          <div className="subSectionReport__icon">
            <img src={images.Community} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              4,000<sup>+</sup> Community
            </div>
          </div>
          <div className="subSectionReport__text">
            Over 4000 community members actively discussing Ideas and solutions
            for global impact.
          </div>
        </div>

        <div className="subSectionReport__2">
          <div className="subSectionReport__icon">
            <img src={images.Volunteers} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              100<sup>+</sup> Volunteers
            </div>
          </div>
          <div className="subSectionReport__text">
            Over 100 Volunteers in Africa are part of our workstream
          </div>
        </div>

        <div className="subSectionReport__3">
          <div className="subSectionReport__icon">
            <img src={images.StartupProjects} alt="descriptive figure" />
            <div className="subSectionReport__figure">
              20<sup>+</sup> Startup Projects
            </div>
          </div>
          <div className="subSectionReport__text">
            20 Innovative startup projects profiled for seed funding on IWB
            Capital.
          </div>
        </div>
      </div>
    </StyleImpactReport>
  );
};

export default ImpactReport;
