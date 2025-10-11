// components/NavBar.js
import React, { useState, useEffect } from "react";
import { BsChevronRight, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";
import images from "../../../constants/images";

/* ---------- helpers ---------- */
// const slug = (title = "") =>
//   title.toString().toLowerCase().trim().replace(/\s+/g, "-");

/* ---------- styled ---------- */
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  @media (max-width:768px) {
    padding: 1.5rem 2rem;
  }
  @media screen and (min-width: 1500px){
    padding-inline: calc((100% - 1300px) / 2);
  }
`;

const Logo = styled.div`
  img {
    height: 2.5rem;
    
    @media screen and (max-width: 768px){
      height:2rem;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    width: 100%;
    left: ${({ open }) => (open ? "0" : "120%")};
    background: #fff;
    padding: 0.5rem 2rem;
    height: 100vh;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 500ms;
  }
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0;
  }

  &:hover > div {
    display: block;
  }

  @media (min-width: 768px) {
    &:hover > a svg {
      transform: rotate(180deg);
    }
  }
`;

const NavLink = styled.a`
  display: flex;
  text-decoration:none;
  justify-content: space-between;
  align-items: center;
  gap:0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #0047af;
  border-bottom: ${({ active }) =>
    active ? "2px solid #0047af" : "2px solid transparent"};
  padding: 0.5rem 0;
  cursor: pointer;

  
  svg {
    transition: transform 300ms;
  }

  @media (max-width: 768px){
    svg{
      transform: ${({isOpen})=>!isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
  }

`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  min-width: 240px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);

  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 768px) {
    position: static;
    display: block;
    box-shadow: none;
    min-width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
`;

const DropdownItem = styled.a`
  display: block;
  text-decoration:none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 1px solid #f0f0f0;
  position: relative;

  &:hover {
    background: #f5f5f5;
    color: #0047af;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    border-bottom: none;
    padding: 0.5rem;
    font-size:1rem;
  }
`;

const SubDropdown = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1000;
  background: #fff;
  min-width: 240px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    background:transparent;
    position: static;
    display: block;
    box-shadow: none;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  ${DropdownItem}:hover & { display: block; }
`;

const Hamburger = styled.div`
  display: none;
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;
  @media (max-width:768px){
    display: flex;
  }
  flex-direction: column;
  justify-content: space-between;
`;

const Bar = styled.span`
  display: block;
  height: 4px;
  width: 100%;
  background-color: #0047af;
  border-radius: 2px;
  transition: all 0.3s ease;

  ${({ isOpen, index }) =>
    isOpen &&
    (index === 0
      ? `
        transform: rotate(45deg) translate(5px, 10px);
      `
      : index === 1
      ? `
        opacity: 0;
      `
      : `
        transform: rotate(-45deg) translate(5px, -10px);
      `)}
`;

/* ---------- data ---------- */
const navData = [
  { title: "About", href:"#About", items: [], isSection: true },
  {
    title: "Programs",
    href:"#Programs",
    items: [
      { label: "Bridge", href:"https://forms.gle/NJJdtB4AQrKxLTgy6" },
      {
        label: "Ladder",
        children: [
          { label: "MiniMBA - Tekedia", href:"https://docs.google.com/forms/d/e/1FAIpQLSd6Grndgwnkl88LGbiU3PYsGZXyu86DskbTmHnPCOF6yDErCw/viewform?usp=dialog" },
          { label: "MBA - Nexford", href:"http://blog.iwbafrica.org" },
          { label: "MS in Data Analytics - Nexford", href:"http://blog.iwbafrica.org"  },
          { label: "MS in Digital Transformation - Nexford", href:"http://blog.iwbafrica.org"  },
        ],
      },
      { label: "Build for Africa Fellowship", href:"https://forms.gle/AAdV8t75yW44tQGw7" },
    ],
  },
  { title: "Milestones", href:"#Milestones", items: []},
  { title: "Interests", href:"#Interests", items: []},
  {
    title: "Resources",
    items: [
      { label: "Insights", href:"http://blog.iwbafrica.org" },
      { label: "Stories", href:"http://blog.iwbafrica.org" },
      // { label: "Opportunities", href:"https://whatsapp.com/channel/0029VaNQdGFLikg7MCCHRM0Z" },
      { label: "Opportunities", href:"https://whatsapp.com/channel/0029VaNQdGFLikg7MCCHRM0Z" },
    ]
  },
  {
    title: "Events",
    items: [{ label: "MeetUps" }, { label: "Conferences" }],
  },
];

/* ---------- components ---------- */
const DropdownMenu = ({ title, items, active, setActive, openMenu, setOpenMenu, isSection, switchMenuTray, href }) => {
  const isMobile = window.innerWidth <= 768;
  const isOpen = openMenu === title;

  const [openSub, setOpenSub] = useState(null);

  const handleClick = (e) => {
    if (isMobile && items?.length > 0) {
      e.preventDefault();
      setOpenMenu(isOpen ? null : title);
    } else{
      switchMenuTray();
    }

    if (isSection && active !== title) setActive(title);
  };

  return (
    <NavItem>
      <NavLink href={href} active={active === title} isOpen={isOpen} onClick={handleClick}>
        <span>{title}</span>
        {items?.length > 0 && (<BsChevronUp />)}
      </NavLink>

      {items?.length > 0 && (
        <Dropdown isOpen={isOpen}>
          {items.map((item, i) =>
            item.children ? (
              <DropdownItem
                key={i}
                href={item.href}
                onClick={() =>
                  setOpenSub(openSub === item.label ? null : item.label)
                }
              >
                <span className="label">
                  {item.label}
                  {openSub === item.label ? <BsChevronUp /> : <BsChevronRight />}
                </span>
                <SubDropdown isOpen={openSub === item.label}>
                  {item.children.map((sub, subIndex) => (
                    <DropdownItem href={sub.href} key={subIndex}>{sub.label}</DropdownItem>
                  ))}
                </SubDropdown>
              </DropdownItem>
            ) : (
              <DropdownItem href={item.href} key={i}>{item.label}</DropdownItem>
            )
          )}
        </Dropdown>
      )}
    </NavItem>
  );
};

/* ---------- main ---------- */
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("About");
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const app = document.getElementById("App");
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActive(section.id);
        }
      });
    };

    if (app) {
      app.addEventListener("scroll", handleScroll);
      app.addEventListener("load", handleScroll);
    }
    handleScroll();

    return () => {
      if (app) {
        app.removeEventListener("scroll", handleScroll);
        app.removeEventListener("load", handleScroll);
      }
    };
  }, []);

  return (
    <NavContainer>
      <Logo>
        <img src={images.Logo} alt="My-Logo" />
      </Logo>

      <Hamburger onClick={() => setOpen((s) => !s)}>
        {[0, 1, 2].map((i) => (
          <Bar key={i} isOpen={open} index={i} />
        ))}
      </Hamburger>

      <NavMenu open={open}>
        {navData.map((nav, i) => (
          <DropdownMenu
            key={i}
            {...nav}
            title={nav.title}
            items={nav.items}
            active={active}
            setActive={setActive}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            switchMenuTray={()=>setOpen(!open)}
          />
        ))}
      </NavMenu>
    </NavContainer>
  );
}
