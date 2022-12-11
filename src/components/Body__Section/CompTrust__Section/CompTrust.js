import images from "../../../constants/images";
import { StyleCompTrust } from "./CompTrust.styled";

const CompTrust = () => {
  return (
    <StyleCompTrust>
      <div className="Footer__heading">
        Companies <span>that trust us</span>
      </div>
      <div></div>
      <div className="companies__logo">
        <img src={images.Mintyn} alt="An img of company that we partner with" />
      </div>
      <div></div>
      <div className="companies__logo">
        <img
          src={images.Tekedia}
          alt="An img of company that we partner with"
        />
      </div>
      <div></div>
      <div className="companies__logo">
        <img
          src={images.Playbooq}
          alt="An img of company that we partner with"
        />
      </div>
    </StyleCompTrust>
  );
};

export default CompTrust;
