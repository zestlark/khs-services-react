import React from 'react';

// Importing images
import Clinetsimg1 from '../assets/clients/65f124c410cb1.jpg';
import Clinetsimg2 from '../assets/clients/65f124c41141c.jpg';
import Clinetsimg3 from '../assets/clients/65f124cecd630.jpg';
import Clinetsimg4 from '../assets/clients/65f156906fe5d.png';
import Clinetsimg5 from '../assets/clients/65f1569070723.png';
import Clinetsimg6 from '../assets/clients/ashospital.png'

const clientImages = [Clinetsimg1, Clinetsimg2, Clinetsimg3, Clinetsimg4, Clinetsimg5,Clinetsimg6];

const Clients = () => {
  return (
    <div id="clients" className="webpage_section">
      <div className="heading" data-aos="fade-up">client</div>
      <marquee behavior="" direction="">
        {clientImages.map((image, index) => (
          <a key={index}>
            <img src={image} alt="" />
          </a>
        ))}
      </marquee>
    </div>
  );
};

export default Clients;
