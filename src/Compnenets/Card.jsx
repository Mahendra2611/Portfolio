import React from 'react'
import "../Style/Card.scss"
import Hat from "../img/hat.jpg"
const Card = ({year,degree,collage}) => {
 
    return (
        <div className='card-box'>
        <div className='line'>
        <span> <img src={Hat}/></span>
         <div className='ln'></div>   
        </div>
    <div className='card'>
      <span>{year}</span>
      <h1>{degree}</h1>
      <h2>{collage}</h2>
    </div>
        </div>
  )
}

export default Card
