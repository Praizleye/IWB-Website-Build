import { StyleResources } from "./Resources.styled";
import images from "../../../constants/images";
import { motion } from "framer-motion";
import {
  animateImg1,
  animateImg2,
  animateImg3,
  animateImg4,
  animateText,
} from "./animateResource";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Resources = () => {
  return (
    <StyleResources id="Resources">
      <div className="Resources container">
        <div className="Resources-books imgs-container">
          <div className="img-container">
            <motion.img
              src={images.Book1}
              alt="Resource-book"
              initial="initialPos"
              whileInView="normalPos"
              variants={animateImg1}
            />
          </div>
          <div className="img-container">
            <motion.img
              src={images.Book2}
              alt="Resource-book"
              initial="initialPos"
              whileInView="normalPos"
              variants={animateImg2}
            />
          </div>
          <div className="img-container">
            <motion.img
              src={images.Book3}
              alt="Resource-book"
              initial="initialPos"
              whileInView="normalPos"
              variants={animateImg3}
            />
          </div>
          <div className="img-container">
            <motion.img
              src={images.Book4}
              alt="Resource-book"
              initial="initialPos"
              whileInView="normalPos"
              variants={animateImg4}
            />
          </div>
        </div>
        <motion.div
          className="Resource-text-section"
          initial="hidden"
          whileInView="visible"
          variants={animateText}
        >
          <div className="heading" id="Free downloads">
            Resources<span>Resources</span>
          </div>
          <div className="Resource-text-Desc">
            Access over $5000 worth of resources (ebooks, podcasts, videos) on
            Business, Digotal Technology, Monetization, Leaderhip, and Growth
            from experts across the globe.{" "}
          </div>
          <button>
            {" "}
            <FaCloudDownloadAlt />
            <a href="https://t.me/iwb_official">Free downloads</a>
          </button>
        </motion.div>
      </div>
    </StyleResources>
  );
};

export default Resources;
