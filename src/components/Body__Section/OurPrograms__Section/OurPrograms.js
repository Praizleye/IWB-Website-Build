//? importing assets
import images from "../../../constants/images";
import { StyleOurPrograms } from "./OurPrograms.styled";

const OurPrograms = () => {
  return (
    <StyleOurPrograms>
      <div className="heading">
        Our programs<span>Our programs</span>
      </div>
      <div className="Ourprograms container cards">
        <div className="card">
          <div className="card-img">
            <img src={images.Card1} alt="card-figure" />
          </div>
          <div className="card-subHeading">Digital Monetization </div>
          <div className="card-textDesc">
            One of the largest Digital Money Summit in Africa. Bringing together
            industry veterans, exposing secrets on web3, tokenization,
            metaverse, affiliate marketing, social commerce, social monetization
            and lots more.
          </div>
          <button>Register Now</button>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={images.Card2} alt="card-figure" />
          </div>
          <div className="card-subHeading">Startup Clinic</div>
          <div className="card-textDesc">
            A 6weeks course curated for entrepreneurs and intrapreneurs.
            Startups are taught by industry experts on business technology,
            formalization, product launching and seed funding.
          </div>
          <button>Register Now</button>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={images.Card3} alt="card-figure" />
          </div>
          <div className="card-subHeading">Acceleration conference</div>
          <div className="card-textDesc">
            Exposing young professionals to digital enterpreneurship
            monetization. Event features exhibition of projects and more.{" "}
          </div>
          <button>Register Now</button>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={images.Card4} alt="card-figure" />
          </div>
          <div className="card-subHeading">Acceleration conference</div>
          <div className="card-textDesc">
            For High School Students, CapCon exposes them to Digital
            Productivity,Social Monetization and Digital Entrepreneurship.{" "}
          </div>
          <button>Register Now</button>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={images.Card5} alt="card-figure" />
          </div>
          <div className="card-subHeading">Acceleration conference</div>
          <div className="card-textDesc">
            For High School Students, CapCon exposes them to Digital
            Productivity,Social Monetization and Digital Entrepreneurship.{" "}
          </div>
          <button>Register Now</button>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={images.Card6} alt="card-figure" />
          </div>
          <div className="card-subHeading">Acceleration conference</div>
          <div className="card-textDesc"></div>
          <button>Register Now</button>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={images.Card7} alt="card-figure" />
          </div>
          <div className="card-subHeading">Acceleration conference</div>
          <div className="card-textDesc">
            For High School Students, CapCon exposes them to Digital
            Productivity,Social Monetization and Digital Entrepreneurship.{" "}
          </div>
          <button>Register Now</button>
        </div>
      </div>
    </StyleOurPrograms>
  );
};

export default OurPrograms;
