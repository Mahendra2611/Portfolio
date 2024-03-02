import React from 'react'
import Github from "../img/github.png"
import Linkden from "../img/linkedin.png"
import Instagram from "../img/instagram.png"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Style/footer.scss"
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <h1>MAHENDRA PARATP VERMA</h1>
        <div className='media'>
       <a href='https://github.com/Mahendra2611'><img src={Github} alt='image'></img></a>
       <a href="https://www.linkedin.com/in/mahendra-pratap-verma-559b81257" target='_blank'><img src={Linkden} alt='image'/></a>
       <a href='https://www.instagram.com/mahendra_123.p'><img src={Instagram} alt='image'></img></a>
       {/* <a href='https://www.facebook.com/mahendra.pratapverma.395' className='fb' ><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a> */}
       </div>
       <h2>Mob No : +917355099285</h2>
       <h2>E-Mail : mahendrap2611@gmail.com</h2>
       <p>&copy;2024 Mahendra Pratap Verma. All Rights are reserved</p>
    </div>
  )
}

export default Footer
