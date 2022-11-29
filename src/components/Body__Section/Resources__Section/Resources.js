import { StyleResources } from "./Resources.styled";
import images from "../../../constants/images";

const Resources = () => {
  return (
    <StyleResources>
      <div className="Resources container">
        <div className="Resources-books imgs-container">
          <div className="img-container">
            <img src={images.Book1} alt="Resource-book" />
          </div>
          <div className="img-container">
            <img src={images.Book2} alt="Resource-book" />
          </div>
          <div className="img-container">
            <img src={images.Book3} alt="Resource-book" />
          </div>
          <div className="img-container">
            <img src={images.Book4} alt="Resource-book" />
          </div>
        </div>
        <div className="Resource-text-section">
          <div className="heading">
            Resources<span>Resources</span>
          </div>
          <div className="Resource-text-Desc">
            Access over $5000 worth of resources (ebooks, podcasts, videos) on
            Business, Digotal Technology, Monetization, Leaderhip, and Growth
            from experts across the globe.{" "}
          </div>
          <button>Free download</button>
        </div>
      </div>
    </StyleResources>
  );
};

export default Resources;
