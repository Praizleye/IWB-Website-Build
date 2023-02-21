import React from "react";
import { StyleNewsletter } from "./Newsletter.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import { subscribeBtn } from "./animateNewsletter";
import { IoIosNotifications } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Newsletter = () => {
  // const [signUpForm, setSignUpForm] = React.useState({ content: "" });

  // const handleSignUpForm = () => {
  //   console.log(setSignUpForm({ content: "Hello" }));
  // };

  return (
    <StyleNewsletter>
      <div className="Content">
        <div className="heading">
          The IWB Newsletter
          <span>
            Subscribe to the Blue Letters
            <img src={images.Line} alt="small underline" />
          </span>
        </div>
        <div className="textContent">
          Join thounsands of young creators and professionals in Tech, Business,
          Career and Leadership, keeping pace with valuable resources and
          content shared regularly on the Blue Letters
        </div>
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
        {/* <SignUpForm /> */}
        {/* <form
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
        </form> */}
      </div>
      <div className="imgContent">
        <LazyLoadImage
          src={images.Newsletter}
          alt="Newsletter figure"
          effect="blur"
        />
      </div>
    </StyleNewsletter>
  );
};

export default Newsletter;
