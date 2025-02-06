import React, { useState, useEffect } from "react";

// importing other dependencies
import { RiCloseFill } from "react-icons/ri";
import { RiMenu5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { NavMenuBar, NavStyle } from "./Nav.Styled";
import images from "../../../constants/images";

// import Logo from "../../assets/Logo.svg";

function Nav() {
  const [toggle, setToggle] = useState(true);
  const navLinks =[
    {title:"About", link:"#About", target:"_self"},
    {title:"Achievements", link:"#Achievements", target:"_self"},
    {title:"Programs", link:"#Programs", target:"_self"},
    {title:"Scope", link:"#Scope", target:"_self"},
    {title:"blog", link:"#home", target:"_self"},
    {title:"Store", link:"#home", target:"_blank"},
    {title:"Get Started", link:"https://forms.gle/KjYu3dMaEwZAKJVj8", target:"_blank"},
    
  ]

  const [activeSection, setActiveSection] = useState('#');


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
    window.addEventListener("load", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // const handleBlogClick = (event) => {
  //   // event.preventDefault();
  //   const navLink = document.querySelectorAll("#nav-link");

  //   if (event.target === navLink[4]) {
  //     const blogNav = navLink[4];
  //     console.log(blogNav);
  //     console.log(event.target.innerHTML);
  //     window.open(
  //       "https://www.linkedin.com/company/ideas-worth-billions/",
  //       "_blank",
  //       "noopener,noreferrer"
  //     );

  //     blogNav.innerHTML = "LinkedIn";
  //     return false;
  //   }
  // };
  // const handleBlogClickMobile = (event) => {
  //   // event.preventDefault();
  //   const navLink = document.querySelectorAll("#nav-link-mobile");

  //   if (event.target === navLink[4]) {
  //     const blogNav = navLink[4];
  //     console.log(blogNav);
  //     console.log(event.target.innerHTML);
  //     window.open(
  //       "https://www.linkedin.com/company/ideas-worth-billions/",
  //       "_blank",
  //       "noopener,noreferrer"
  //     );

  //     blogNav.innerHTML = "Blog";
  //     return false;
  //   }
  // };

  return (
    <>
      <NavStyle>
        <nav className="app__navbar">
          <div className="app__navbar-logo">
            <img src={images.Logo} alt="My-Logo" />
          </div>
          <ul className="app__navbar-links">
            {/* <div></div> */}
            {navLinks.map(({link, title, target}, index) => (
              <li className="app__flex" key={index}>
                <div />
                <a href={link} id="nav-link" target={target}
                  className={activeSection === title || link.includes(activeSection) ? "active" : "inactive"}
                >
                  {" "}
                  {title}
                </a>
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
                  "Programs",
                  "Scope",
                  "Resources",
                  "Sign Up",
                ].map((item, index) => (
                  <li
                    className="app__navbar-link"
                    key={`menu-${index}`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <div />
                    <a href={`#${item}`} id="nav-link-mobile">
                      {" "}
                      {item}
                    </a>
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
