//? importing assets
import images from "../../../constants/images";
import { StyleOurPrograms } from "./OurPrograms.styled";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurPrograms = () => {
  const animateHeading = {
    hidden: {
      opacity: 0,
      x: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
        delay: 0.2,
      },
    },
  };

  return (
    <StyleOurPrograms id="Our programs">
      <div className="heading">
        Our programs
        <motion.span
          initial="hidden"
          n
          whileInView="visible"
          variants={animateHeading}
        >
          Our programs
        </motion.span>
      </div>

      <Splide
        hasTrack={false}
        aria-label="Our Programs Carousel"
        className="Ourprograms container cards"
        options={{
          type: "loop",
          gap: "1rem",
          pagination: true,
          width: "100%",
          fixedWidth: true,
          fixedHeight: true,
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
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card1}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                  visibleByDefault={images.Card1}
                />
              </div>
              <div className="card-subHeading">Digital Monetization </div>
              <div className="card-textDesc">
                One of the largest Digital Money Summit in Africa. Bringing
                together industry veterans, exposing secrets on web3,
                tokenization, metaverse, affiliate marketing, social commerce,
                social monetization and lots more.
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfdyd-FHTcHou2wHEuaCTD6BDQlJat00C_1UNm_sFk7YfHa7w/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Register Now</button>
              </a>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card2}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">Startup Clinic</div>
              <div className="card-textDesc">
                A 6 weeks course curated for entrepreneurs and intrapreneurs.
                Startups are taught by industry experts on business technology,
                formalization, product launching and seed funding.
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfSly942H83RvdsP5qY_BfGTCI6kmTYoNbl9IfYqU-GDoHi9g/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Register Now</button>
              </a>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card4}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">School of Champions</div>
              <div className="card-textDesc">
                A monthly edition where we talk about emerging technologies,
                personal development, and financial growth.
              </div>
              <a
                href="https://t.me/iwb_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Enter Classroom</button>
              </a>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card3}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">Acceleration Conference</div>
              <div className="card-textDesc">
                Exposing young professionals to digital enterpreneurship and
                monetization. Event features exhibition of projects and more.{" "}
              </div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <button className="comingSoon">Coming Soon</button>
              </a>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card5}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">Startup Fundbox</div>
              <div className="card-textDesc">
                The IWB Capital, supporting innovative and viable startup
                businesses. The Fundbox exists to help businesses scale.
              </div>
              <button className="comingSoon">Coming Soon</button>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card6}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">Capacity Conference</div>
              <div className="card-textDesc">
                For High School Students, CapCon exposes them to Digital
                Productivity, Social Monetization and Digital Entrepreneurship.
              </div>
              <button className="comingSoon">Coming Soon</button>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card7}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">Mentor-Me Compass</div>
              <div className="card-textDesc">
                Tailored mentoring provided by industry leaders accepted into
                the IWB Coaches Council. The compass is a one-one guide for
                youngsters.
              </div>
              <button className="comingSoon">Coming Soon</button>
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
    </StyleOurPrograms>
  );
};

export default OurPrograms;
