import React from 'react'
import img1 from '../assets/img/img1.png';

const About = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='box1'>
          <div className='box2'>

          </div>
          <img
            src={img1}
            alt="Floating"
            className="floating-image2"
          />
        </div>
        <div className='card__text'>
          <span className='card__text1'>WHO IS BENITHA?</span><br />
          <span className='card__text2'>I am Passionate about software development; I excel at writing user-friendly code tailored to meet each organization's unique needs. A confident communicator and strategic thinker, I collaborate effectively with stakeholders at all levels. Dedication, results-orientation, and eagerness to explore new opportunities define me. Strong critical thinking, problem-solving, and analytical skills have been honed through coursework and practical experience.</span>
        </div>

      </div>
    </div>

  )
}

export default About