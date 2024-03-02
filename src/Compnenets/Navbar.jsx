import React, { useState } from 'react';
import menu from '../img/menu.jpg'; // Make sure to provide the correct path

const Navbar = () => {
  const [isCheck, setCheck] = useState(false);

  return (
    <div className='navbar'>
      <h1 className='logo'><span>Mah</span>endra</h1>
      
      <input type="checkbox" class="check" checked={isCheck}></input>
      <img
        className='icon'
        src={menu}
        onClick={() => {
          setCheck(!isCheck);
        }}
        alt="Menu Icon"
      />
      <ul>
        <li ><a href='home'> Home</a></li>
        <li><a href='#intro'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#footer'>Contact Me</a></li>
      </ul>
    </div>
  );
};


export default Navbar
