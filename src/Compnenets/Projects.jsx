import React from 'react'
import ProjectCard from './ProjectCard'
import { Data } from '../data/ProjectData'
import "../Style/Project.scss"
const Projects = () => {
 
  return (
    <div className='project' id='project'>
      <h1><span>PRO</span>JECTS</h1>
      <div className='project-box'>{Data.map((data)=>(
        <ProjectCard key={data.id} {...data}/>
      ))}</div>
    </div>
  )
}

export default Projects
