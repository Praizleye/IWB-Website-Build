import React from "react";
import { StyleTestimonials } from "./Testimonials.styled";
import images from "../../../constants/images";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { animateStars, animateStar } from "./animateTestimonial";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
              <LazyLoadImage
                src={images.Testator__1}
                alt="testator-pofile"
                effect="blur"
              />
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
                solutions to local problems. It is the place for everyone with a
                great dream.
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <LazyLoadImage
                src={images.Testator__2}
                alt="testator-pofile"
                effect="blur"
              />
              <div className="card-name">Patience, Ukange</div>
              <div className="card-date">March, 2022.</div>
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
                Ideas Worth Billions is known for brooding Africa’s finest
                talents, creators and technopreneurs by equipping them with the
                requisite tools for exploits in the marketplace. IWB is the
                perfect place to learn, grow and explore.
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <LazyLoadImage
                src={images.Testator__3}
                alt="testator-pofile"
                effect="blur"
              />
              <div className="card-name">Chidera, Nweze</div>
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
                IWB channels her resources for self development, and exploring
                potentials. You have the liberty to set up your platform, and
                dominate. She is a priceless medium for valuable networking,
                growth, and achievement.
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <LazyLoadImage
                src={images.Testator__4}
                alt="testator-pofile"
                effect="blur"
              />
              <div className="card-name">Precita, Ejiroghene</div>
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
                IWB has been a great platform for me because it has helped me
                stay relevant in my Organization through the strategies
                highlighted on how thrive within one's workspace.
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
