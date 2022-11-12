import React, { useState } from "react";

// importing other dependencies
import { RiMenuFoldLine, RiCloseFill } from "react-icons/ri";
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
            <img src={images.Logo} alt="My-Logo" height="2rem" width="auto" />
          </div>
          <ul className="app__navbar-links">
            {/* <div></div> */}
            {[
              "about",
              "impact report",
              "our programs",
              "resources",
              "blog",
              "join community",
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
            {toggle ? <RiMenuFoldLine /> : <RiCloseFill />}
          </motion.div>
          {/* this div is for the nav menu bar .... */}

          <motion.div>
            {toggle ? (
              ""
            ) : (
              <motion.ul className="app__navbar-links">
                {[
                  "about",
                  "impact report",
                  "our programs",
                  "resources",
                  "blog",
                  "join community",
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
