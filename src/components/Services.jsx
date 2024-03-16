import React from 'react'

// Importing images
import deepImg from '../assets/services-icon/deep.png';
import buildingImg from '../assets/services-icon/building.png';
import hospitalImg from '../assets/services-icon/hospital.png';
import carImg from '../assets/services-icon/car.png';
import basementImg from '../assets/services-icon/basement.png';
import bungalowImg from '../assets/services-icon/bungalow.png';
import sofaImg from '../assets/services-icon/sofa.png';

const services = [
  {
    img: deepImg,
    name: 'deep-cleaning',
    link: 'enquiry/?type=deep-cleaning'
  },
  {
    img: buildingImg,
    name: 'building-cleaning',
    link: 'enquiry/?type=building-cleaning'
  },
  {
    img: hospitalImg,
    name: 'hospital-cleaning',
    link: 'enquiry/?type=hospital-cleaning'
  },
  {
    img: carImg,
    name: 'car-cleaning',
    link: 'enquiry/?type=car-cleaning'
  },
  {
    img: basementImg,
    name: 'basement-cleaning',
    link: 'enquiry/?type=basement-cleaning'
  },
  {
    img: bungalowImg,
    name: 'bungalow-cleaning',
    link: 'enquiry/?type=bungalow-cleaning'
  },
  {
    img: sofaImg,
    name: 'sofa-cleaning',
    link: 'enquiry/?type=sofa-cleaning'
  }
];

export default function Services() {
  return (
    <div id="services" className="webpage_section">
      <div className="container">
        <div className="heading" data-aos="fade-up">services</div>
        <div className="services-box" data-aos="fade-up">
          <p>
            We work hard to ensure that we provide the best possible service and products to them, and that we always meet their expectations.
          </p>
          <div className="collection">
            {services.map((service, index) => (
              <div className="box" data-aos="fade-up" key={index}>
                <span><img src={service.img} alt="" /></span>
                <p>{service.name}</p>
                <a href={service.link}><i className="ri-arrow-right-s-line"></i></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
