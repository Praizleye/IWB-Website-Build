import React from "react";
import { motion } from "framer-motion";
import { StyleOurInterest } from "./OurInterest.styled";
import images from "../../../constants/images";

const OurInterest = () => {
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

  const highLight = () => {
    //first get all the heading class
    const getActive = document.querySelectorAll("div.subheading");
    const getActiveNav = document.querySelectorAll("div.Ourinterest-section");

    //destructure the headingclasses
    // getActive.forEach((el) => console.log(el.className));

    //loop through them individually
    for (let i = 0; i < getActive.length; i++) {
      setTimeout(() => {
        if (
          getActive[i].classList.contains("active") ||
          getActiveNav[i].classList.contains("active")
        ) {
          setTimeout(() => {
            getActive[i].classList.remove("active");
            getActiveNav[i].classList.remove("active");
            getActiveNav[i].style.borderLeft = "3px solid #b8b8b8";
          }, 3000);
          // console.log(getActive[i]);
        } else if (
          !getActive[i].classList.contains("active") ||
          !getActiveNav[i].classList.contains("active")
        ) {
          getActive[i].classList.add("active");
          getActiveNav[i].style.borderLeft = "3px solid #2f88ff";
          const getActiveTwo = document.querySelectorAll("div.subheading");
          const getActiveNavTwo = document.querySelectorAll(
            "div.Ourinterest-section"
          );

          if (
            getActiveTwo[i].classList.contains("active") ||
            getActiveNavTwo[i].classList.contains("active")
          ) {
            setTimeout(() => {
              getActiveTwo[i].classList.remove("active");
              getActiveNavTwo[i].classList.remove("active");
              getActiveNavTwo[i].style.borderLeft = "3px solid #b8b8b8";
            }, 3000);
          }
        }
      }, i * 3000);
    }
  };
  highLight();

  return (
    <StyleOurInterest id="ourInterests">
      <div className="heading">
        Our interests
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={animateHeading}
        >
          Our interests
        </motion.span>
      </div>

      <motion.div
        className="Ourinterest-body container"
        whileInView={highLight}
      >
        <div className="Ourinterest-img">
          <img src={images.Interests} alt="Ourinterst-fig" />
        </div>
        <div className="Ourinterests-sections container">
          <div className="Ourinterest-section active">
            <div className="section-1 subheading active">
              Business Development
            </div>
            <div className="section-1 textDesc">
              We build entrepreneurs in our community, our programs and
              resources help them grow their businesses for positive social
              impact.
            </div>
          </div>
          <div className="Ourinterest-section">
            <div className="section-2 subheading">Digital Technology</div>
            <div className="section-2 textDesc">
              We share explosive insights on Digital Productivity, Social
              Monetization, Marketing, Networking, and other emerging
              technologies.
            </div>
          </div>
          <div className="Ourinterest-section">
            <div className="section-3 subheading">Leadership Development</div>
            <div className="section-3 textDesc">
              We are building a community of Africa’s finest thought-leaders who
              are key players of positive change and nation progress.{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </StyleOurInterest>
  );
};

export default OurInterest;
