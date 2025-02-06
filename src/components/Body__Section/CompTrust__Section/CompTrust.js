import images from "../../../constants/images";
import { StyleCompTrust } from "./CompTrust.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CompTrust = () => {

  const companies = [
    images.kidoSchool,
    images.Tekedia,
    images.Playbooq,
    images.julieth
  ];

  return (
    <StyleCompTrust id="home">
      <div className="Footer__heading">
        Companies <span>that trust us</span>
      </div>
      <div></div>
      {
        companies.map((company, index) => (
          <>
            <div className="companies__logo">
              <LazyLoadImage
                src={company}
                alt="An img of company that we partner with"
                effect="blur"
              />
            </div>
            {/* does not render divider for last company */}
            {index < companies.length -1 && <div className="divider"></div>}
          </>
        ))
      }
      
    </StyleCompTrust>
  );
};

export default CompTrust;
