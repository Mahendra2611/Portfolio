import React from 'react'
import "../Style/intro.scss"
import Github from "../img/github.png"
import Linkden from "../img/linkedin.png"
import Instagram from "../img/instagram.png"
import Profile from "../img/profile.jpg"
const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className='content'>
        <h1>Hii!! I Am</h1>
        <h1 className='name'>Mahendra Pratap Verma</h1>
        <p>As a second-year B.Tech student, I am passionate about front-end development and data structures algorithms. Eager to transform my coding skills into innovative solutions. </p>
        <button id='btn'>Hire Me</button>
       <div className='social'>
       
       </div>
       
      </div>
      <div className='img'>
        <img src={Profile} alt='image' />
      </div>
    </div>
  )
}

export default Intro
