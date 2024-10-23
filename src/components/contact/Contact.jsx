import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import "./contact.scss";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedBack, setFeedBack] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Formning default xatti-harakatini to'xtatadi

    if (name && email && feedBack) {
      toast.success("Thanks for your feedback!");
      // Formni tozalash yoki boshqa xatti-harakatlar qilishingiz mumkin
    } else if (!name) {
      toast.info("Write your Name");
    } else if (!email) {
      toast.info("Write your Email");
    } else if (!feedBack) {
      toast.error("Write your FeedBack");
    } else {
      toast.error("Complete inputs");
    }
  }

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleFeedBack = (e) => setFeedBack(e.target.value);

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__box">
          <div className="contact__box-first">
            <h2 className="contact__title">Send a Message</h2>
            <p className="contact__txt">We look forward to your thoughts. Please fill out the fields below and send your message.</p>
            <form onSubmit={handleSubmit}>
              <input type="text" className='contact__input-1' placeholder='Enter your Name' onChange={handleName} />
              <input type="email" className='contact__input-1' placeholder='Enter your Email' onChange={handleEmail} />
              <textarea placeholder='Write your Opinion...' className='contact__input-text' onChange={handleFeedBack}></textarea>
              <button type='submit' className="header__link contact__link">Send message</button>
            </form>
          </div>
          <div className="contact__box-sec">
            <h2 className="contact__sec-title">Contact Me</h2>
            <div className="contact__box-email">
              <p className="contact__sec-txt">Email:</p>
              <a href="mailto:shamshodochilov160@gmail.com" className="contact__email">shamshodochilov160@gmail.com</a>
            </div>
            <div className="contact__box-email">
              <p className="contact__sec-txt">Phone Number:</p>
              <a href="tel:+998335004510" className="contact__email">+998 33 500 45 10</a>
            </div>
            <div className="contact__line"></div>
            <div className="contact__icons">
              <a href="#" className="contact__icon"><img src="15.png" alt="" /></a>
              <a href="#" className="contact__icon"><img src="16.png" alt="" /></a>
              <a href="#" className="contact__icon"><img src="17.png" alt="" /></a>
              <a href="#" className="contact__icon"><img src="18.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
