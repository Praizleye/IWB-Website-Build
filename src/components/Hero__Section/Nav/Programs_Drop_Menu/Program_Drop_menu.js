import { MenuWrapper } from "./Programs_Drop_Menu.styled";
import ProgramCollection from "./Program_Collection";
import { MdBusinessCenter } from "react-icons/md";
// import { GiArtificialIntelligence } from "react-icons/gi";
import { FaDatabase, FaCode, FaShapes, FaChevronRight } from "react-icons/fa";

import React from "react";

const ladder_programs = [
  {
    header: "business",
    programs: [{ title: `MiniMBA - Tekedia`, link: "#" }],
    Icon: MdBusinessCenter,
  },
  {
    header: "Programming/Development",
    programs: [
      {
        title: "Python Programming  - Kibo",
        link: "https://forms.gle/ezWyS7Ex9FwHMzz39",
      },
      {
        title: "Web Development   - Kibo",
        link: "https://forms.gle/ezWyS7Ex9FwHMzz39",
      },
    ],
    Icon: FaCode,
  },
  {
    header: "Data (coming soon)",
    programs: [
      { title: "Data Science", link: "#" },
      { title: "Data Analysis & Visualization", link: "#" },
    ],
    Icon: FaDatabase,
  },
  {
    header: "Products (coming soon)",
    programs: [
      { title: "Product Management", link: "#" },
      { title: "Product Engineering", link: "#" },
    ],
    Icon: FaShapes,
  },
];

//should be broken-down in the future, to make it more reuseable
export default function ProgramDropMenu({className = "" }) {
  return (
    <MenuWrapper className={"drop-menu-wrapper " + className}>
      <div className="main-container">
        <div className="header">
          <h6>
            <span>
              Ladder
            </span>
            <FaChevronRight />
          </h6>
          <MiniMenu>
            <div className="collection">
              <a
                className="program"
                href="https://forms.gle/jbWRnktXg6gt4sNc8"
                target="_blank"
                rel="noreferrer"
              >
                Become the next leader
                <br />
                in Business/Tech ( 8weeks )
              </a>
            </div>
          </MiniMenu>
        </div>
        <div className="header">
          <h6>
            <span>
              Bridge
            </span>
            <FaChevronRight />
          </h6>
          <MiniMenu>
            <div className="main-collection">
              {ladder_programs.map(({ header, programs, Icon }) => (
                <ProgramCollection
                  header={header}
                  programs={programs}
                  Icon={Icon}
                  key={header}
                />
              ))}
            </div>
          </MiniMenu>
        </div>
      </div>
      
    </MenuWrapper>
  );
}


const MiniMenu = ({children}) => {
  if(!children) return;
  return (
    <div className="mini-menu">
      {children}
    </div>
  )
}