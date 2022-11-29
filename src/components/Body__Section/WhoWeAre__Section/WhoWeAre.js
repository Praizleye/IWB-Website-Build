import React from "react";

// ? import styles
import { StyleWhoWeAre } from "./WhoWeAre.styled";
import images from "../../../constants/images";

const WhoWeAre = () => {
  return (
    <StyleWhoWeAre>
      <div className="heading">
        About us <span>About us</span>
      </div>
      <div className="About-body container">
        <div className="WhoWeAre__img">
          <img src={images.WhoWeAre} alt="Who-we-are-logo" />
          <div className="img-cover"></div>
        </div>
        <div className="About__text-content">
          <div className="sub-heading">Our Story</div>
          <div className="About__text-description">
            Ideas Worth Billions is Africa’s fastest growing Human Capacity
            Development Network. Brooding a thriving community of Africa’s
            finest thought leaders, creators, and technopreneurs imbued with
            positive values and in-demand skills for sheer excellence in career,
            leadership, business, tech and everything else.
          </div>
          <button>Join Our Community</button>
        </div>
      </div>

      <div className="About-body container">
        <div className="About__text-content partner">
          <div className="sub-heading ">Partner with IWB</div>
          <div className="About__text-description partner-description">
            Individuals and Organizations around the globe are rooting for us,
            be a part of the future we are creating. Partner with us.
          </div>
          <button>Support IWB</button>
        </div>
        <div className="WhoWeAre__img partner-img">
          <img src={images.PartnerUs} alt="PartnerUs-figure" />
        </div>
      </div>
    </StyleWhoWeAre>
  );
};

export default WhoWeAre;
