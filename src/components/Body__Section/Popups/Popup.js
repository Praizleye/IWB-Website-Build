import React from "react";
import { StylePopup } from "./Popup.styled";
import images from "../../../constants/images";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiFillCloseCircle } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Popup = () => {
  const closePopup = () => {
    document.getElementById("Popup").style.display = "none";
  };

  // const getHeight = () => {
  //   var Height = window.innerHeight;
  //   console.log(`${Height}px`);
  // };
  // getHeight();
  return (
    <StylePopup id="Popup">
      <div className="close" onClick={closePopup}>
        Close
        <AiFillCloseCircle />
      </div>
      <Splide
        hasTrack={false}
        aria-label="Our Programs Carousel"
        className="Ourprograms container cards"
        options={{
          // type: "loop",
          gap: "1rem",
          // pagination: true,
          width: "28rem",
          // autoplay: true,
          arrows:false,
          resetProgress: true,
          easing: "cubic-bezier(.44,.65,.07,1.01)",
          hasAutoplayProgress: true,
          interval: 4000,
          perPage: 1,
          breakpoints: {
            530: {
              width: "24rem",
            },
            460: {
              width: "22rem",
            },
            380: {
              width: "20rem",
            },
            360: {
              width: "19rem",
            },
          },
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="card" id="Community">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Popup1}
                  alt="card-figure"
                  effect="blur"
                />
              </div>
              <div className="card-subHeading">
                Join Our{" "}
                <span style={{ color: "#FFE401" }}>
                  Community{" "}
                  <LazyLoadImage src={images.Stroke1} alt="stroke-1" />
                </span>{" "}
              </div>
              <div className="card-textDesc">
                Find the right opportunities in tech, stay ahead in the industry
                with insightful content we share, and connect closely with other
                youngsters and professionals doing exceptionally in today’s
                world.
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9jK0Q30ugk64JYEhPBqa36xHi4Y42XFYcsSNixihUR1mabg/viewform?usp=sf_link"
                target="_self"
                rel="noopener noreferrer"
              >
                <button>Sign Up</button>
              </a>
            </div>
          </SplideSlide>

          {/* <SplideSlide>
            <div className="card card2">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Popup2}
                  alt="card-figure"
                  effect="blur"
                />
              </div>
              <div className="card-subHeading">
                i-
                <span style={{ color: "#FFE401" }}>
                  School <LazyLoadImage src={images.Stroke1} alt="stroke-1" />
                </span>
              </div>
              <div className="card-textDesc">
                School of the Internet. A monthly series where we bring in tech
                leaders to teach about emerging technologies, opportunities and
                tools available on the internet for productivity and profit.
              </div>
              <button>Enter Classroom</button>
            </div>
          </SplideSlide> */}
          {/* <SplideSlide>
            <div className="card card2">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Popup2}
                  alt="card-figure"
                  effect="blur"
                />
              </div>
              <div className="card-subHeading">
                Startup{" "}
                <span style={{ color: "#FFE401" }}>
                  Clinic <LazyLoadImage src={images.Stroke1} alt="stroke-1" />
                </span>
              </div>
              <div className="card-textDesc">
                A 6 weeks course curated for entrepreneurs and intrapreneurs.
                Startups are taught by industry experts on business technology,
                formalization, product launching and seed funding.
              </div>
              <button>Register Now</button>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card card3">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Popup3}
                  alt="card-figure"
                  effect="blur"
                />
              </div>
              <div className="card-subHeading">
                Digital
                <span style={{ color: "#0047af" }}>
                  {" "}
                  Monetization{" "}
                  <LazyLoadImage src={images.Stroke2} alt="stroke-2" />{" "}
                </span>{" "}
                Conference
              </div>
              <div className="card-textDesc">
                Learn from the best at one of Africa's largest Digital Money
                Summits. Unravelling the secrets behind money in a digital age
                and the future. Explore opportunities on Web3, tokenization,
                social commerce, affiliate marketing, metaverse and lots more.{" "}
              </div>
              <button>Register Now</button>
            </div>
          </SplideSlide> */}
        </SplideTrack>
      </Splide>
    </StylePopup>
  );
};

export default Popup;
