import React from "react";
import { StyleTestimonials } from "./Testimonials.styled";
import images from "../../../constants/images";

const Testimonials = () => {
  return (
    <StyleTestimonials>
      <div className="heading">
        Testimonials
        <span>What young people are saying</span>
        <img src={images.Line} alt="text-underline" />
      </div>

      <div className="testimonial-cards__container">
        <div className="card">
          <img src={images.Testator__1} alt="testator-pofile" />
          <div className="card-name">Godman, Onahi</div>
          <div className="card-date">November, 2022.</div>
          <div className="card-star">
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
          </div>
          <div className="card-textContent">
            IWB is at the centre of building young African minds to provide
            Solutions to Local Problems. It is the place for everyone with a
            great dream.
          </div>
        </div>
        <div className="card">
          <img src={images.Testator__1} alt="testator-pofile" />
          <div className="card-name">Godman, Onahi</div>
          <div className="card-date">November, 2022.</div>
          <div className="card-star">
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
          </div>
          <div className="card-textContent">
            IWB is at the centre of building young African minds to provide
            Solutions to Local Problems. It is the place for everyone with a
            great dream.
          </div>
        </div>
        <div className="card">
          <img src={images.Testator__1} alt="testator-pofile" />
          <div className="card-name">Godman, Onahi</div>
          <div className="card-date">November, 2022.</div>
          <div className="card-star">
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
          </div>
          <div className="card-textContent">
            IWB is at the centre of building young African minds to provide
            Solutions to Local Problems. It is the place for everyone with a
            great dream.
          </div>
        </div>
        <div className="card">
          <img src={images.Testator__1} alt="testator-pofile" />
          <div className="card-name">Godman, Onahi</div>
          <div className="card-date">November, 2022.</div>
          <div className="card-star">
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
            <img src={images.Star} alt="ratings" />
          </div>
          <div className="card-textContent">
            IWB is at the centre of building young African minds to provide
            Solutions to Local Problems. It is the place for everyone with a
            great dream.
          </div>
        </div>
      </div>
    </StyleTestimonials>
  );
};

export default Testimonials;
