import React from "react";
import { StyleNewsletter, StyleCompany } from "./Newsletter.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import { subscribeBtn } from "./animateNewsletter";
import { IoIosNotifications } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default CSS for styling

const Newsletter = () => {
  const [userEmail, setUserEmail] = React.useState("");
  const handleSignUpForm = (e) => setUserEmail(e.target.value);
  const companies = [
    {title : 'google', image:images.Google },
    {title: 'microsoft', image: images.Microsoft },
    {title: 'apple', image: images.Apple },
    {title: 'stripe', image: images.Stripe },
    {title: 'flutterwave', image: images.Flutterwave },
    {title: 'andela', image: images.Andela },
    {title: 'paystack', image: images.Paystack },
    {title: 'meta', image: images.Meta },
    {title: 'amazon', image: images.Amazon }
  ]

  return (
    <section id="newsletter">
      <StyleCompany >
        <h3 className="header">
          Our talents are top picks for leading companies and organizations around the globe.
        </h3>
        <Splide
          options={{
            type: "loop",
            autoplay:true,
            width:'100%',
            perPage: 3, // Show 3 slides at a time
            gap: "5rem", // Space between slides
            arrows: false,
            perMove: 1, // Moves 1 slide at a time
            interval: 3000,     // Delay between transitions (in ms)
            speed: 1000,     
            pagination: false,
            breakpoints: {
              768: { perPage: 2, gap:"2rem" }, // Show 1 slide on smaller screens
            },
          }}
        >
          {
            companies.map(company =>(
              <SplideSlide>
                <img src={company.image} alt={`${company.title}`} key={company.title} />
              </SplideSlide>
            ))
          }
        </Splide>
      </StyleCompany>
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
          <div className="email-input-wrapper">
            <input type="email" onChange={handleSignUpForm} value={userEmail} placeholder="Enter your email address here" />
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
