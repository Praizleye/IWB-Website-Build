import React, { useState } from "react";
import { StyleNewsletter } from "./Newsletter.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import { subscribeBtn } from "./animateNewsletter";

const Newsletter = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
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

        <form
          className="action"
          onSubmit={handleSubmit}
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <input
            type="email"
            placeholder="Enter your email address..."
            id="member_email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <motion.button
            whileInView="animate"
            variants={subscribeBtn}
            type="submit"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
      <div className="imgContent">
        <img src={images.Newsletter} alt="Newsletter figure" />
      </div>
    </StyleNewsletter>
  );
};

export default Newsletter;
