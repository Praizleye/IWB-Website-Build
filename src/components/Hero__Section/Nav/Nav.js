import React, { useState, useEffect } from "react";

// importing other dependencies
import { RiCloseFill } from "react-icons/ri";
// import { RiMenu5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { NavMenuBar, NavStyle } from "./Nav.Styled";
import images from "../../../constants/images";
import { FaBars } from "react-icons/fa";
import NavLink from "./Nav_links/NavLink";
import ProgramDropMenu from "./Programs_Drop_Menu/Program_Drop_menu";

// import Logo from "../../assets/Logo.svg";

function Nav({ appRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { title: "About", link: "#About", target: "_self" },
    { title: "Bridge", link: "#Bridge", children: "bridge" },
    { title: "Ladder", link: "#ladder", children: "ladder" },
    { title: "Achievements", link: "#Achievements", target: "_self" },
    // { title: "Programs", link: "#Programs", target: "_self" },
    // { title: "Programs", link: "#Programs", target: "_self" },
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
  const [progMenu, setProgMenu] = useState(null);

  const handleMobileNavLink = (children) => {
    if (children) {
      setProgMenu((o) => {
        if (o === children) return null;
        else return children;
      });
    } else {
      setIsMenuOpen(false);
    }
  };

  const handleMobileNavClose = () => {
    if (progMenu !== null) setProgMenu(null);
    else setIsMenuOpen(false);
  };

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

    appRef.current.addEventListener("scroll", handleScroll);
    appRef.current.addEventListener("load", handleScroll);
    handleScroll();

    return () => {
      appRef.current.removeEventListener("scroll", handleScroll);
      appRef.current.removeEventListener("load", handleScroll);
    };
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
            {navLinks.map((navInfo, index) => (
              <NavLink
                {...navInfo}
                key={index}
                func={() => setActiveSection(navInfo.title)}
                className={
                  activeSection === navInfo.title ||
                  navInfo.link.includes(activeSection)
                    ? "active"
                    : "inactive"
                }
              />

              // <li className="app__flex nav-link" key={index}  >
              //   <div />
              //   <a
              //     href={link}
              //     id="nav-link"
              //     target={target}
              //     className={
              //       activeSection === title || link.includes(activeSection)
              //         ? "active"
              //         : "inactive"
              //     }
              //   >
              //     {" "}
              //     {title}
              //   </a>

              //   {title === 'Programs' &&(<ProgramDropMenu />)}
              // </li>
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
            <FaBars />
            {/* {!isMenuOpen ? <FaBars /> : <RiCloseFill />} */}
          </motion.div>

          <motion.div
            className="mobile-menu"
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
          >
            <button className="close-button" onClick={handleMobileNavClose}>
              <RiCloseFill />
            </button>
            <motion.ul>
              {navLinks.map((navInfo, index) => (
                <NavLink
                  {...navInfo}
                  key={index}
                  style={{ "--index": index }}
                  className={
                    activeSection === navInfo.title ||
                    navInfo.link.includes(activeSection)
                      ? "active"
                      : "inactive"
                  }
                  mobile
                  func={() => handleMobileNavLink(navInfo.children)}
                />
              ))}

              {/* {navLinks.map(({ link, title, target }, index) => (
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
              ))} */}
            </motion.ul>
            <ProgramDropMenu
              children="bridge"
              className={progMenu === "bridge" && "active"}
            />
            <ProgramDropMenu
              children="ladder"
              className={progMenu === "ladder" && "active"}
            />
          </motion.div>
        </div>
      </NavMenuBar>
    </>
  );
}

export default Nav;
