import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__box">
          <div className="contact__box-first">
            <h2 className="contact__title">Send a Message</h2>
            <p className="contact__txt">We look forward to your thoughts. Please fill out the fields below and send your message.</p>
            <input type="text" className='contact__input-1' placeholder='Enter your Name' />
            <input type="email" className='contact__input-1' placeholder='Enter your Email (Not necessarily)' />
            <textarea placeholder='Write your Opinion...' className='contact__input-text'></textarea>
            <a href="" className="header__link contact__link">Send message </a>
          </div>
          <div className="contact__box-sec">
            <h2 className="contact__sec-title">Contact Me</h2>
            <div className="contact__box-email">
              <p className="contact__sec-txt">Email:</p>
              <a href="email:shamshodochilov160@gmail.com" className="contact__email">shamshodochilov160@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact