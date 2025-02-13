import { MenuWrapper } from "./Programs_Drop_Menu.styled";
import ProgramCollection from "./Program_Collection";
import { MdBusinessCenter } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { 
    FaDatabase,
    FaPenNib,
    FaCode,
    FaShapes
} from "react-icons/fa";

import React from 'react'

const ladder_programs = [
    {
        header : 'business',
        programs: [
            {title: `MiniMBA in Business Innovation - Tekedia`, link: '#'}
        ],
        Icon: MdBusinessCenter,
    },
    {
        header : 'Programming/Development',
        programs: [
            {title: 'Python Programming  - Kibo', link: '#'}, {title: 'Web Development   - Kibo', link: '#'}
        ],
        Icon: FaCode 
    },
    {
        header : 'Data (coming soon)',
        programs: [
            {title: 'Data Science', link: '#'}, {title: 'Data Analysis & Visualization', link: '#'}
        ],
        Icon: FaDatabase,
    },
    {
        header : 'Products (coming soon)',
        programs: [
            {title: 'Product Management', link: '#'}, {title: 'Product Engineering', link: '#'}
        ],
        Icon: FaShapes,
    },
    {
        header : 'Design (coming soon)',
        programs: [
            {title: 'Product Design', link: '#'}, {title: 'Graphics Design', link: '#'}
        ],
        Icon: FaPenNib
    },
    {
        header : 'Artificial Intelligence (coming soon)',
        programs: [
            {title: 'AI/Machine Learning', link: '#'}, {title: 'Deep Learning', link: '#'}
        ],
        Icon:GiArtificialIntelligence
    }
]

export default function ProgramDropMenu() {
  return (
    <MenuWrapper className="drop-menu-wrapper">
        <div className="collection">
            <h6>
                Bridge
            </h6>
            <p>
                Become the next leader  
                <br />
                in Business/Tech ( 8weeks )
            </p>
        </div>

        <div className="collection">
            <h6>
                Ladder
            </h6>
            <div className="main-collection">
                {
                    ladder_programs.map(({header, programs, Icon})=>(
                        <ProgramCollection header={header} programs={programs} Icon={Icon}>
                        </ProgramCollection>
                    ))
                }
            </div>
        </div>
    </MenuWrapper>
  )
}
