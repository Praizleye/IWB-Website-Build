import React from "react";

import { StyleTestimonials, StylePartner } from "./Testimonials.styled";
import images from "../../../constants/images";

const Testimonials = () => {
  const style = {
    marginTop: "5rem",
    background: "rgba(0, 50, 124, 0.62)",
    width: " 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div style={style}>
      <StyleTestimonials>
        <div className="Testimonials__container">
          <div className="Testimonials__heading">
            What young people are saying about us...
          </div>
          <div className="Testimonials__body">
            <div className="Testimonial__hero-image">
              <img src={images.Test__Hero} alt="Testimonials-img-showcase" />
            </div>
            <div className="Testimonial__cards">
              <div className="Testimonial__card">
                <div className="Testimonial__card-image">
                  <img src={images.Testator__1} alt="first testifier img" />
                </div>
                <div className="Testimonial__card-text-container">
                  <div className="Testimonial__card-text-container-name">
                    Godman, Onahi
                  </div>
                  <div className="Testimonial__card-text-container-text">
                    IWB is at the centre of building young African minds to
                    provide Solutions to Local Problems. It is the place for
                    everyone with a great dream.
                  </div>
                  <div className="Testimonial__card-text-container-date">
                    November, 2022.
                  </div>
                </div>
              </div>
              <div className="Animatable1">
                <img
                  src={images.Animatable__Asset1}
                  alt="a small asset just for animation"
                />
              </div>
            </div>
          </div>
        </div>
      </StyleTestimonials>

      <StylePartner className="Partner__Section">
        <div className="Partner__heading">Partner with us</div>
        <div className="Partner__text">
          Individuals and Organizations around the globe are rooting for us, be
          a part of the future we are creating. Partner with us.
        </div>
        <button className="support">Support IWB </button>
        <div className="Animatable2">
          <img
            src={images.Animatable__Asset2}
            alt="a small asset just for animation"
          />
        </div>
        <div className="Animatable3">
          <img
            src={images.Animatable__Asset3}
            alt="a small asset just for animation"
          />
        </div>
      </StylePartner>
    </div>
  );
};

export default Testimonials;
