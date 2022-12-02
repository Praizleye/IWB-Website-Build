import React from "react";
import { StyleTestimonials } from "./Testimonials.styled";
import images from "../../../constants/images";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Testimonials = () => {
  return (
    <StyleTestimonials>
      <div className="heading">
        Testimonials
        <span>
          What young people are saying
          <img src={images.Line} alt="text-underline" />
        </span>
      </div>

      <Splide
        hasTrack={false}
        aria-label="Testimonial Carousel"
        className="testimonial-cards__container"
        options={{
          // rewind: true,
          gap: "1rem",
          pagination: false,
          width: "100vw",
          fixedWidth: true,
          fixedHeight: true,
          padding: { left: "1rem", right: "5rem" },
        }}
      >
        <SplideTrack>
          <SplideSlide>
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
          </SplideSlide>
          <SplideSlide>
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
          </SplideSlide>

          <SplideSlide>
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
          </SplideSlide>
          <SplideSlide>
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
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <BsArrowLeftShort />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <BsArrowRightShort />
          </button>
        </div>
      </Splide>
    </StyleTestimonials>
  );
};

export default Testimonials;
