import React from "react";
import { StyleNewsletter } from "./Newsletter.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import { subscribeBtn } from "./animateNewsletter";

const Newsletter = () => {
  return (
    <StyleNewsletter>
      <div className="textContent">
        <div className="heading">
          The IWB Newsletter
          <span>
            Subscribe to the Blue Letters
            <img src={images.Line} alt="small underline " />
          </span>
        </div>
        <div className="textContent">
          Join thounsands of young creators and professionals in Tech, Business,
          Career and Leadership, keeping pace with valuable resources and
          content shared regularly on the Blue Letters
        </div>

        <div className="action">
          <input type="text" placeholder="Enter your email address here" />
          <motion.button whileInView="animate" variants={subscribeBtn}>
            Subscribe
          </motion.button>
        </div>
      </div>
      <div className="imgContent">
        <img src={images.Newsletter} alt="Newsletter figure" />
      </div>
    </StyleNewsletter>
  );
};

export default Newsletter;
