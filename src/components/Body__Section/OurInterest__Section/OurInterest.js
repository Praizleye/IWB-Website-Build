import React from "react";

import { StyleOurInterest } from "./OurInterest.styled";
import images from "../../../constants/images";

const OurInterest = () => {
  return (
    <StyleOurInterest>
      <div className="heading">
        Our interest<span>Our interest</span>
      </div>

      <div className="Ourinterest-body container">
        <div className="Ourinterest-img">
          <img src={images.Interests} alt="Ourinterst-fig" />
        </div>
        <div className="Ourinterests-sections container">
          <div className="Ourinterest-section active">
            <div className="section-1 subheading active">
              Business Development
            </div>
            <div className="section-1 textDesc">
              We build entrepreneurs in our community, our programs and
              resources help them grow their businesses for positive social
              impact.
            </div>
          </div>
          <div className="Ourinterest-section">
            <div className="section-2 subheading">Digital Technology</div>
            <div className="section-2 textDesc">
              Digital Productivity, Social Monetization, Marketing, Networking,
              and other emerging technologies are our key interest.{" "}
            </div>
          </div>
          <div className="Ourinterest-section">
            <div className="section-3 subheading">Leadership Development</div>
            <div className="section-3 textDesc">
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
