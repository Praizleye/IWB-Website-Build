import React, { useState } from "react";

// importing other dependencies
import { RiCloseFill } from "react-icons/ri";
import { RiMenu5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { NavMenuBar, NavStyle } from "./Nav.Styled";
import images from "../../../constants/images";
// import Logo from "../../assets/Logo.svg";

function Nav() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <NavStyle>
        <nav className="app__navbar">
          <div className="app__navbar-logo">
            <img src={images.Logo} alt="My-Logo" />
          </div>
          <ul className="app__navbar-links">
            {/* <div></div> */}
            {[
              "About",
              "Impact report",
              "Our programs",
              "Resources",
              "Blog",
              "Free downloads",
              "Join community",
            ].map((item, index) => (
              <li className="app__flex" key={index}>
                <div />
                <a href={`#${item}`}> {item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </NavStyle>

      <NavMenuBar>
        <div className="app__navbar-menu">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <RiMenu5Fill /> : <RiCloseFill />}
          </motion.div>
          {/* this div is for the nav menu bar .... */}

          <motion.div>
            {toggle ? (
              ""
            ) : (
              <motion.ul className="app__navbar-links">
                {[
                  "About",
                  "Impact report",
                  "Our programs",
                  "Resources",
                  "Blog",
                  "Free downloads",
                  "Join community",
                ].map((item, index) => (
                  <li
                    className="app__navbar-link"
                    key={`menu-${index}`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <div />
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        </div>
      </NavMenuBar>
    </>
  );
}

export default Nav;
