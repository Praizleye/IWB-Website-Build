import React from "react";

//? importing Styles
import { StyleHero } from "./Styles/Hero.Styled";
import Nav from "./Nav/Nav";
import images from "../../constants/images";

const Hero = () => {
  return (
    <div>
      <Nav />
      <StyleHero>
        <div className="cta__text container">
          <div>...Building People </div>
          <div> Creating solutions</div>
          <div>
            <img src={images.Lineheader} alt="illustration" />
          </div>
          <div>
            Connecting 500,000,000 young Africans to digital solutions and
            opportunities in 2030.
          </div>
          <button>Get Started</button>
        </div>
        <img src={images.HeroImg} alt="Hero-section-figure" />
      </StyleHero>
    </div>
  );
};

export default Hero;
