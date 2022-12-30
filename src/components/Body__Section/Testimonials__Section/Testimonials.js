import React from "react";
import { StyleTestimonials } from "./Testimonials.styled";
import images from "../../../constants/images";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { animateStars, animateStar } from "./animateTestimonial";

const Testimonials = () => {
  return (
    <StyleTestimonials id="Testimonial">
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
          type: "loop",
          gap: "1rem",
          pagination: true,
          width: "100vw",
          fixedWidth: true,
          fixedHeight: true,
          padding: { left: "1rem", right: "5rem" },
          autoplay: true,
          resetProgress: true,
          easing: "cubic-bezier(.44,.65,.07,1.01)",
          hasAutoplayProgress: true,
          interval: 4000,
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="card">
              <img src={images.Testator__1} alt="testator-pofile" />
              <div className="card-name">Godman, Onahi</div>
              <div className="card-date">November, 2022.</div>
              <motion.div
                className="card-star"
                initial="hidden"
                whileInView="visible"
                variants={animateStars}
              >
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
              </motion.div>
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
              <motion.div
                className="card-star"
                initial="hidden"
                whileInView="visible"
                variants={animateStars}
              >
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
              </motion.div>
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
              <motion.div
                className="card-star"
                initial="hidden"
                whileInView="visible"
                variants={animateStars}
              >
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
              </motion.div>
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
              <motion.div
                className="card-star"
                initial="hidden"
                whileInView="visible"
                variants={animateStars}
              >
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
                <motion.img
                  src={images.Star}
                  alt="ratings"
                  variants={animateStar}
                />
              </motion.div>
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
