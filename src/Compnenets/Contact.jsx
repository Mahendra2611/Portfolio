import React from 'react'
import "../Style/contact.scss"
const Contact = () => {
  return (
    <div className='form'>
        <h1><span>Share </span>your Suggestion</h1>
      <fieldset>
        <legend><span>Contact</span> Me</legend>
      <form>
       <div className='box'>
       <label htmlFor="name">Name : </label>
        <input type='text' id='name' placeholder='Enter your name'/>
       </div>
       <div className='box'>
       <label htmlFor="e-mail">Email : </label>
        <input type='text' id='e-mail' placeholder='Enter your E-Mail'/>
        </div>
       <div className='box'>
       <label htmlFor="contact">Contact : </label>
      
      <input type='text' id='contact' placeholder='Enter your Number'/>
       </div>
        
        <div className='box'> 
        <label htmlFor="msg">Message : </label>
      <textarea placeholder='Enter your message' id='msg'  />
        </div>
        <div >
       <label htmlFor="submit"> </label>
      
      <input type='submit' className='btn'  placeholder='Enter your Number'/>
       </div>
      </form>
      </fieldset>
      
    </div>
  )
}

export default Contact
