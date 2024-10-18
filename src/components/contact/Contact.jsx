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
                    <input type="text" className='contact__input-1' placeholder='Enter your Name'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact