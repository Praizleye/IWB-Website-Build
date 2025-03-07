//? importing assets
import images from "../../../constants/images";
import { StyleOurPrograms } from "./OurPrograms.styled";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurPrograms = () => {
  // const animateHeading = {
  //   hidden: {
  //     opacity: 0,
  //     x: 15,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: "easeIn",
  //       delay: 0.2,
  //     },
  //   },
  // };

  const programs = [
    {
      header: "Bridge",
      subtitle: "Unlock  your Genius",
      body: "Learn in-demand skills to enhance your productivity and profitability.  Get upskilled to join the top 1% of creators and young professionals shaping the future. Become the next leader in Business Tech.",
      status: {
        title: "Register Now",
        link: "https://forms.gle/dgfcA8KkWKLbLp6w9",
        class: "",
      },
    },
    {
      header: "Ladder",
      subtitle: "Rise from 0-1 in Tech",
      body: "Ladder seeks to enhance digital literacy and upskill thousands of Talent for the future by providing tailored mentoring, resources and support to help you rise from 0-1 in tech.  (Dev, Design, Data, Products, Marketing etc.)",
      status: {
        title: "Join the next cohort",
        link: "https://forms.gle/RAzrkZuXBfSUgJ1F9",
        class: "",
      },
    },
    {
      header: "Innov8",
      subtitle: "Create the Future",
      body: "Innov8 is An unconventional, campus-led and out-of-the-box event designed to ignite innovation and showcase young innovators building models and projects for future Africa. Not just an event, Innov8 is a LEAP.",
      status: {
        title: "Coming soon",
        link: "",
        class: "comingSoon",
      },
    },
  ];

  return (
    <StyleOurPrograms id="Programs">
      <div className="heading" style={{ fontFamily: "Lunema" }}>
        Our Programs
        {/* <motion.span
          initial="hidden"
          whileInView="visible"
          variants={animateHeading}
        >
          Our programs
        </motion.span> */}
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
          {programs.map(({ header, subtitle, body, status }, index) => (
            <SplideSlide key={header}>
              <div className="card">
                <div className="card-img">
                  <LazyLoadImage
                    src={images[`Card${index + 1}`]}
                    alt="card-figure"
                    effect="blur"
                    height={"14rem"}
                    visibleByDefault={images[`Card${index + 1}`]}
                  />
                </div>
                <div className="card-subHeading">{header}</div>
                <div className="card-textDesc">
                  <span>{subtitle}</span>
                  {body}
                </div>
                <a
                  href={status.link}
                  target={index === programs.length - 1 ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  <button className={status.class}>{status.title}</button>
                </a>
              </div>
            </SplideSlide>
          ))}
          {/* <SplideSlide>
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
              <div className="card-subHeading">Digital Money Conference </div>
              <div className="card-textDesc">
                Learn from the best at one of Africa’s largest digital money
                summits. Explore opportunities on web3, tokenization,
                social-commerce, affiliate marketing and lots more. Understand
                the future of money and how to position yourself to earn it.
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
                  src={images.Card4}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">i-School</div>
              <div className="card-textDesc">
                School of the Internet. A monthly series where we bring in tech
                leaders to teach about emerging technologies, opportunities and
                tools available on the internet for productivity and profit.
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
                  src={images.Card7}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">Ladder</div>
              <div className="card-textDesc">
                Get mentored by experts in the industry with proven results in
                business, leadership or technology. Ladder is a six month,
                one-on-one mentoring program tailored to help you rise from 0-1.
              </div>
              <button className="comingSoon">Coming Soon</button>
            </div>
          </SplideSlide> */}

          {/* <SplideSlide>
            <div className="card">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card6}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">HighTech</div>
              <div className="card-textDesc">
                High School Tech Program, empowering thousands of high-school
                students with in-demand tech skills, making them ready for a
                technocentric society.
              </div>
              <button className="comingSoon">Starts this Summer</button>
            </div>
          </SplideSlide> */}

          {/* <SplideSlide>
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
                A 6-week Startup Nursery Program, where startups are admitted to
                learn the physics of business success in the 21st century. Top
                performing startups are profiled on the IWB Startup FundBox for
                potential seed funding.
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfSly942H83RvdsP5qY_BfGTCI6kmTYoNbl9IfYqU-GDoHi9g/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Sign Up</button>
              </a>
            </div>
          </SplideSlide> */}

          {/* <SplideSlide>
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
                IWB Capital invests in early-stage, technology-driven startups
                that have completed the IWB Startup Clinic program and have been
                expertly structured for industry success by our team.
              </div>
              <button className="comingSoon">Opens Soon</button>
            </div>
          </SplideSlide> */}

          {/* <SplideSlide>
            <div className="card">
              <div className="card-img">
                <LazyLoadImage
                  src={images.Card3}
                  alt="card-figure"
                  effect="blur"
                  height={"14rem"}
                />
              </div>
              <div className="card-subHeading">Acceler8t</div>
              <div className="card-textDesc">
                A campus business program where entrepreneurs in campuses are
                taught about business success. Event features pitching and
                exhibition of innovative projects. Top performing entrepreneurs
                are enlisted into the IWB Startup Clinic, which includes funding
                opportunities.
              </div>
              <button className="comingSoon">Starts Soon</button>
            </div>
          </SplideSlide> */}
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
