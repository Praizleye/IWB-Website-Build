import React from "react";

// ? import styles
import { StyleWhoWeAre } from "./WhoWeAre.styled";
import images from "../../../constants/images";

const WhoWeAre = () => {
  return (
    <StyleWhoWeAre>
      <div className="WhoWeAre__text">
        <div className="heading">Who we are...</div>
        <div>
          Ideas Worth Billions is Africa’s fastest growing Human Capacity
          Development Network. Brooding a thriving community of Africa’s finest
          thought leaders, creators, and technopreneurs imbued with positive
          values and in-demand skills for sheer excellence in career,
          leadership, business, tech and everything else.{" "}
        </div>
      </div>
      <div className=" WhoWeAre__img">
        <img src={images.WhoWeAre} alt="Who-we-are-logo" />
      </div>
    </StyleWhoWeAre>
  );
};

export default WhoWeAre;
