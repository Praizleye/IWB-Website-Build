import React from "react";

import { StyleOurInterest } from "./OurInterest.styled";
import images from "../../../constants/images";

const OurInterest = () => {
  return (
    <StyleOurInterest>
      <div className="OurInterest__container">
        <div className="OurInterest__heading">Our Interest</div>
        <div className="OurInterest__container-cards">
          <div className="OurInterest__card">
            <div className="OurInterest__figure-icon">
              <img src={images.BusDev} alt="card-logo" />
            </div>
            <div className="OurInterest__card-heading">
              Business Development
            </div>
            <div className="OurInterest__card-text">
              We build entrepreneurs in our community, our programs and
              resources help them grow their businesses for positive social
              impact.
            </div>
          </div>

          <div className="OurInterest__card">
            <div className="OurInterest__figure-icon">
              <img src={images.DigitalTech} alt="card-logo" />
            </div>
            <div className="OurInterest__card-heading">Digital Technology</div>
            <div className="OurInterest__card-text">
              Digital Productivity, Social Monetization, Marketing, Networking,
              and other emerging technologies are our key interest.{" "}
            </div>
          </div>

          <div className="OurInterest__card">
            <div className="OurInterest__figure-icon">
              <img src={images.LeadershipDev} alt="card-logo" />
            </div>
            <div className="OurInterest__card-heading">
              Leadership Development
            </div>
            <div className="OurInterest__card-text">
              We are building a community of Africa’s finest thought-leaders who
              are key players of positive change and nation progress.{" "}
            </div>
          </div>
        </div>
      </div>
    </StyleOurInterest>
  );
};

export default OurInterest;
