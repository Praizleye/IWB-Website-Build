import React from 'react'
import { TalentCollectionWrapper } from './TalentsCollection.styled'
import TalentCard from './TalentCard';
import images from '../../../constants/images';
import { motion } from 'framer-motion';

const talents =  [
    {
        img:images.Knimi,
        name: 'Knimi',
        role: 'Network Engineer'
    },
    {
        img:images.Timi,
        name: 'Timi',
        role: 'Product Manager'
    },
    {
        img:images.Hope,
        name: 'Hope',
        role: 'Digital/Content Marketer'
    },
    {
        img:images.Onyinye,
        name: 'Onyinye',
        role: 'Linguist'
    },
    {
        img:images.Gracefield,
        name: 'Gracefield',
        role: 'Community Manager'
    },
    {
        img:images.Ethelberth,
        name: 'Ethelberth',
        role: 'Energy Engineer'
    },
    {
        img:images.Victoria,
        name: 'Victoria',
        role: 'Digital Creator'
    },
    {
        img:images.Benjamin,
        name: 'Benjamin',
        role: 'Project Manager/Data Analyst'
    },
]

export default function TalentsCollection() {
  return (
    <TalentCollectionWrapper>
        <motion.div 
            initial={{opacity: 0, y: -30}}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeIn",
                },
              }}
            className='content'
        >
            {talents.map(({img, name, role})=>(
                <TalentCard img={img} name={name} role={role} />
            ))}

        </motion.div>
        <a className='hire-btn' href='#'>
            Hire Our Talents
        </a>
    </TalentCollectionWrapper>
  )
}
