import React from 'react'
import IMG from "../img/musicapp.png"
import IMG3 from "../img/project-3.png"
import IMG4 from "../img/project-4.png"
import IMG5 from "../img/project-5.png"
import IMG6 from "../img/project-6.png"
import "../Style/ProjectCard.scss"
const ProjectCard = ({name,lang,weblink,gitlink,id}) => {
  const img = [IMG3,IMG4,IMG5,IMG6];
  return (
    <div className='projectCard'>
     <div className='visible'>
      <button className='click'>Click For More Details</button>
     <img src={img[id]}/>
     <h1>{name}</h1>
     </div>
     <div className='hidden'>
        <h1>Language Used <br></br> {lang.join(" , ")}</h1>
        <a className='a' href={weblink} target='_blank'>Website Link</a>
        <a className='a' href={gitlink} target='_blank'>GitHub Link</a>
     </div>
    </div>
  )
}
export default ProjectCard
