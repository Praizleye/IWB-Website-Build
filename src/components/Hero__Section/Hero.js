import React from "react";

//? importing Styles
import { StyleHero, OffsetCurve } from "./Styles/Hero.Styled";
import Nav from "./Nav/Nav";
import images from "../../constants/images";

const Hero = () => {
  return (
    <div>
      <Nav />
      <StyleHero>
        <img src={images.HeroImg} alt="Hero-section-figure" />
        <div className="cta__text container">
          <div>...Building People. creating solutions</div>
          <div>
            Connecting 500,000,000 young Africans to digital solutions and
            opportunities in 2030.
          </div>
          <button>Get Started</button>
        </div>
      </StyleHero>
      <OffsetCurve className="offset__curve"></OffsetCurve>
    </div>
  );
};

export default Hero;
