import React from "react";
import { StyleCompany } from "../NewsLetter__Section/Newsletter.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default CSS for styling;
import TalentsCollection from "../Talents_Collection/TalentsCollection";
import images from "../../../constants/images";

const companies = [
  { title: "google", image: images.Google },
  { title: "microsoft", image: images.Microsoft },
  { title: "apple", image: images.Apple },
  { title: "stripe", image: images.Stripe },
  { title: "flutterwave", image: images.Flutterwave },
  { title: "andela", image: images.Andela },
  { title: "paystack", image: images.Paystack },
  { title: "meta", image: images.Meta },
  { title: "amazon", image: images.Amazon },
];

export default function OurTalent() {
  return (
    <StyleCompany>
      <h3 className="header" style={{ fontFamily: "Lunema" }}>
        Our Talent are top picks for leading companies and organizations around
        the globe.
      </h3>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          width: "100%",
          perPage: 3, // Show 3 slides at a time
          gap: "5rem", // Space between slides
          arrows: false,
          perMove: 1, // Moves 1 slide at a time
          interval: 3000, // Delay between transitions (in ms)
          speed: 1000,
          pagination: false,
          breakpoints: {
            768: { perPage: 2, gap: "2rem" }, // Show 1 slide on smaller screens
          },
        }}
      >
        {companies.map((company) => (
          <SplideSlide key={company.title}>
            <img src={company.image} alt={`${company.title}`} />
          </SplideSlide>
        ))}
      </Splide>

      <TalentsCollection />
    </StyleCompany>
  );
}
