import React from 'react'
import { TalentCardWrapper } from './TalentsCollection.styled'

export default function TalentCard({img, name, role}) {
  return (
    <TalentCardWrapper>
        <img src={img} alt={`${name}'s picture`} />
        <div className='talent-info'>
            <h6>
                {name}
            </h6>
            <p>
                {role}
            </p>
        </div>
    </TalentCardWrapper>
  )
}
