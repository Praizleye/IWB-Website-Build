import React from "react";

//? importing assets
import images from "../../../constants/images";
import { StyleOurPrograms, StyleResource } from "./OurPrograms.styled";

const OurPrograms = () => {
  return (
    <div>
      <StyleOurPrograms>
        <div className="heading">Our Programs</div>
        <div className="slider__container">
          <div className="slide">
            <div className="slide__image">
              <img src={images.OurPrograms__image1} alt="slider-figure-1" />
            </div>
            <div className="slideText__heading">Acceleration Conference</div>
            <div className="slideText">
              Exposing young professionals to digital entrepreneurship and
              monetization. Event features exhibition of projects and more.
            </div>
          </div>
          <div className="slide">
            <div className="slide__image">
              <img src={images.OurPrograms__image2} alt="slider-figure-2" />
            </div>
            <div className="slideText__heading">StartUp Clinic</div>
            <div className="slideText">
              A 6weeks course curated for entrepreneurs and intrapreneurs,
              startups are taught by industry experts on business technology.
            </div>
          </div>
          <div className="slide">
            <div className="slide__image">
              <img src={images.OurPrograms__image3} alt="slider-figure-3" />
            </div>
            <div className="slideText__heading">School of Champions</div>
            <div className="slideText">
              A monthly edition where we talk about emerging technologies
              digital monetization and social productivity.{" "}
            </div>
          </div>
        </div>
        <div className="AnimatableObj1">
          <img src={images.AnimatableObj1} alt="background-objects" />
        </div>
        <div className="AnimatableObj2">
          <img src={images.AnimatableObj2} alt="background-objects" />
        </div>
      </StyleOurPrograms>

      <StyleResource>
        <div className="resource__container">
          <div className="resource__image">
            <img src={images.Resource__Image} alt="resource-img" />
          </div>
          <div className="resource__figures">
            <div className="resource__text-heading">Resources</div>
            <div className="resource__text">
              Access over $5000 worth of resources (ebooks, podcasts, videos) on
              Business, Digotal Technology, Monetization, Leaderhip, and Growth
              from experts across the globe.{" "}
            </div>
            <button className="resource__btn">Free Download</button>
          </div>
        </div>
      </StyleResource>
    </div>
  );
};

export default OurPrograms;
