import React from 'react'
import "./about.scss";

const About = () => {
  return (
    <div className='about'>
      <div className="about__box">
        <p className="about__txt">About Me</p>
        <h2 className="about__title">I'm Wamwod</h2>
        <p className="about__text"> <span>Year:</span> 2007</p>
        <p className="about__text"> <span>Region:</span> Tashkent</p>
        <p className="about__text"> <span>Job:</span> Web-Developer</p>
        <p className="about__text"> <span>Study:</span> Proweb</p>
        <p className="about__text"> <span>Languages:</span> Uzbek, English</p>
        <p className="about__text"> <span>Hobbies:</span> Coding, Learning new technologies, Gaming</p>
        <p className="about__text"> <span>Experience:</span> Completed a 10 month web development course in <span className='about__span'>"Proweb"</span></p>
      </div>
      <img className='about__img' src="7.png" alt="" />
    </div>
  )
}

export default About