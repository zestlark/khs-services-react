import React from 'react'
import AboutImage from '../assets/img/63bbc63e9e45e.jpg'

export default function About() {
  return (
    <div id="about" className="webpage_section">
      <div className="container">
        <div className="heading" data-aos="fade-up">about</div>
        <div className="about-box">
          <div className="section section1" data-aos="fade-up">
            <div className="circle one"></div>
            <img src={AboutImage} alt="" />
            <div className="circle two"></div>
          </div>
          <div className="section section2" data-aos="fade-up">
            Khs services established in 2017 with the motivate of providing the best Cleaning service to our prestigious client.
            We are proud to have a team of skilled and experienced workers who are dedicated to their work and committed to providing the best possible service to our clients.
            We offer a wide range of services including Hospital cleaning, building, car cleaning, and more.
          </div>
        </div>
      </div>
    </div>
  )
}
