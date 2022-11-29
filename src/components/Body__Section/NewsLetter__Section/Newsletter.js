import React from "react";
import { StyleNewsletter } from "./Newsletter.styled";

const Newsletter = () => {
  return (
    <StyleNewsletter>
      <div className="heading">
        The IWB Newsletter
        <span>Subscribe to the Blue Letters</span>
      </div>
      <div className="textContent">
        Join thounsands of young creators and professionals in Tech, Business,
        Career and Leadership, keeping pace with valuable resources and content
        shared regularly on the Blue Letters
      </div>

      <div className="action">
        <input type="text" placeholder="Enter your email address here" />
        <button>Subscribe</button>
      </div>
    </StyleNewsletter>
  );
};

export default Newsletter;
