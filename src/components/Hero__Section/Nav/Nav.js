import React, { useState, useEffect } from "react";

// importing other dependencies
import { RiCloseFill } from "react-icons/ri";
import { RiMenu5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { NavMenuBar, NavStyle } from "./Nav.Styled";
import images from "../../../constants/images";
import ProgramDropMenu from "./Programs_Drop_Menu/Program_Drop_menu";

// import Logo from "../../assets/Logo.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { title: "About", link: "#About", target: "_self" },
    { title: "Achievements", link: "#Achievements", target: "_self" },
    { title: "Programs", link: "#Programs", target: "_self" },
    { title: "Scope", link: "#Scope", target: "_self" },
    // { title: "Blog", link: "#home", target: "_self" },
    // { title: "Store", link: "#home", target: "_blank" },
    {
      title: "Get Started",
      link: "https://forms.gle/KjYu3dMaEwZAKJVj8",
      target: "_blank",
    },
  ];

  const [activeSection, setActiveSection] = useState("#");

  ///track windows scroll and highlight the active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <NavStyle>
        <nav className="app__navbar">
          <div className="app__navbar-logo">
            <img src={images.Logo} alt="My-Logo" />
          </div>
          <ul className="app__navbar-links">
            {/* <div></div> */}
            {navLinks.map(({ link, title, target}, index) => (
              <li className="app__flex nav-link" key={index}  >
                <div />
                <a
                  href={link}
                  id="nav-link"
                  target={target}
                  className={
                    activeSection === title || link.includes(activeSection)
                      ? "active"
                      : "inactive"
                  }
                >
                  {" "}
                  {title}
                </a>

                {title === 'Programs' &&(<ProgramDropMenu />)}
              </li>
            ))}
          </ul>
        </nav>
      </NavStyle>

      <NavMenuBar isOpen={isMenuOpen}>
        <div className="app__navbar-menu">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? <RiMenu5Fill /> : <RiCloseFill />}
          </motion.div>

          <motion.div
            className="mobile-menu"
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
          >
            <button 
              className="close-button"
              onClick={() => setIsMenuOpen(false)}
            >
              <RiCloseFill />
            </button>
            <motion.ul>
              {navLinks.map(({ link, title, target }, index) => (
                <motion.li key={index} style={{ "--index": index }}>
                  <a
                    href={link}
                    target={target}
                    onClick={() => setIsMenuOpen(false)}
                    className={
                      activeSection === title || link.includes(activeSection)
                        ? "active"
                        : ""
                    }
                  >
                    {title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </NavMenuBar>
    </>
  );
}

export default Nav;
