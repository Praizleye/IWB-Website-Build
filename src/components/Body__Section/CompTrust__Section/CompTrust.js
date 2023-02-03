import images from "../../../constants/images";
import { StyleCompTrust } from "./CompTrust.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CompTrust = () => {
  return (
    <StyleCompTrust>
      <div className="Footer__heading">
        Companies <span>that trust us</span>
      </div>
      <div></div>
      <div className="companies__logo">
        <LazyLoadImage
          src={images.Mintyn}
          alt="An img of company that we partner with"
          effect="blur"
        />
      </div>
      <div></div>
      <div className="companies__logo">
        <LazyLoadImage
          src={images.Tekedia}
          alt="An img of company that we partner with"
          effect="blur"
        />
      </div>
      <div></div>
      <div className="companies__logo">
        <LazyLoadImage
          src={images.Playbooq}
          alt="An img of company that we partner with"
          effect="blur"
        />
      </div>
    </StyleCompTrust>
  );
};

export default CompTrust;
