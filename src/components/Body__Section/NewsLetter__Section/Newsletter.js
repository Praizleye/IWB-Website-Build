import React from "react";
import { StyleNewsletter } from "./Newsletter.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import { subscribeBtn } from "./animateNewsletter";
import { IoIosNotifications } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/css"; // Default CSS for styling;
// import TalentsCollection from "../Talents_Collection/TalentsCollection";

const Newsletter = () => {
  const [userEmail, setUserEmail] = React.useState("");
  const handleSignUpForm = (e) => setUserEmail(e.target.value);

  return (
    <section id="newsletter">
      <StyleNewsletter>
        <div className="Content">
          <div className="heading" style={{ fontFamily: "Host Grotesk" }}>
            The IWB Newsletter
            <span>
              Subscribe to the Blue Letters
              <img src={images.Line} alt="small underline" />
            </span>
          </div>
          <div className="textContent">
            Join thousands of young creators and professionals in Tech,
            Business, Career and Leadership, keeping pace with valuable
            resources and content shared regularly on the Blue Letters.
          </div>
          <div className="email-input-wrapper">
            <input
              type="email"
              onChange={handleSignUpForm}
              value={userEmail}
              placeholder="Enter your email address here"
            />
            <a
              href="https://mailchi.mp/e975b61c4013/subscribe-to-our-newsletter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileInView="animate"
                variants={subscribeBtn}
                type="submit"
                // onClick={handleSignUpForm}
              >
                <IoIosNotifications />
                {"        "}
                {"        "}
                Subscribe
              </motion.button>
            </a>
          </div>
        </div>
        <div className="imgContent">
          <LazyLoadImage
            src={images.Newsletter}
            alt="Newsletter figure"
            effect="blur"
            width={images.height}
            height={images.width}
          />
        </div>
      </StyleNewsletter>
    </section>
  );
};

export default Newsletter;
