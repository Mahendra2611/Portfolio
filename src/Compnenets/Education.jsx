import React from 'react'
import Card from './Card'
import { Edu } from '../data/EduData'
import "../Style/Education.scss"
const Education = () => {
  
  return (
    <div className='edu'>
      <h1><span>EDU</span>CATION</h1>
      <div className='cards'>
        {Edu.map((edu)=>(
             <Card key={edu.id}  {...edu}/>
        ))}
      </div>
    </div>
  )
}

export default Education
