import React from "react";

// ? importing styles
import { StyleImpactReport } from "./ImpactReport.styled";
import images from "../../../constants/images";

const ImpactReport = () => {
  return (
    <StyleImpactReport>
      <div className="ImpactReport__heading">Impact Report</div>

      <div className="sectionReport__1">
        <div className="subSectionReport__1">
          <div className="subSectionReport__icon">
            <img src={images.Dollar} alt="descriptive figure" />
          </div>
          <div className="subSectionReport__figure">$5,200</div>
          <div className="subSectionReport__text">
            Over 130 young scholars in IWB Community have been sponsored to
            study Business Administration at Tekedia.
          </div>
        </div>

        <div className="subSectionReport__2">
          <div className="subSectionReport__icon">
            <img src={images.PeopleTrained} alt="descriptive figure" />
          </div>
          <div className="subSectionReport__figure">3,000</div>
          <div className="subSectionReport__text">
            Over 3000 young professionals trained on Business, Digital
            Monetization and Digital Technology.
          </div>
        </div>

        <div className="subSectionReport__3">
          <div className="subSectionReport__icon">
            <img src={images.Resources} alt="descriptive figure" />
          </div>
          <div className="subSectionReport__figure">$10,000</div>
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
          </div>
          <div className="subSectionReport__figure">4,000+</div>
          <div className="subSectionReport__text">
            Over 4000 community members actively discussing Ideas and solutions
            for global impact.
          </div>
        </div>

        <div className="subSectionReport__2">
          <div className="subSectionReport__icon">
            <img src={images.Volunteers} alt="descriptive figure" />
          </div>
          <div className="subSectionReport__figure">100+</div>
          <div className="subSectionReport__text">
            Over 100 Volunteers in Africa are part of our workstream
          </div>
        </div>

        <div className="subSectionReport__3">
          <div className="subSectionReport__icon">
            <img src={images.Startups} alt="descriptive figure" />
          </div>
          <div className="subSectionReport__figure">20+</div>
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
