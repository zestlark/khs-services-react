import React, { useEffect } from 'react'
import Poster from '../assets/img/poster.png'
import OceanVideo from '../assets/img/3d_ocean.mp4'
import Logo from '../assets/img/logo.png'

export default function Home() {

  useEffect(() => {
    document.getElementById('bar').addEventListener('click', function () {
      document.getElementsByClassName('nav')[0].style.right = '0';
    })

    document.getElementsByClassName('close')[0].addEventListener('click', function () {
      document.getElementsByClassName('nav')[0].style.right = '-100%';
    })

    // header scroll
    window.onscroll = function () {
      if (window.pageYOffset > 60) {
        document.getElementsByClassName('header')[0].classList.add('scroll');
      } else {
        document.getElementsByClassName('header')[0].classList.remove('scroll');
      }
      document.getElementsByClassName('close')[0].click();
    }


    function pagewatcher() {
      let sections = document.querySelectorAll(".webpage_section");
      let navLi = document.querySelectorAll(".nav li");
      window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
          let sectionTop = section.offsetTop;
          let sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 5) {
            current = section.getAttribute("id");
          }
        });

        navLi.forEach((li) => {
          li.classList.remove("active");
          if (li.classList.contains(current)) {
            li.classList.add("active");
          }
        });
      });
    }
    pagewatcher()

  }, [])

  return (
    <div id="home" className="webpage_section">

      <div className="video-container">
        <video poster={Poster} src={OceanVideo} muted autoPlay loop></video>
      </div>

      <div className="big-container">
        <div className="container">
          <div className="header">
            <div className="logo">
              <img src={Logo} alt="" />
              <span>KHS Services</span>
            </div>

            <ul className="nav" >
              <li className="home active"><a href="#home"><i className="ri-home-line"></i>Home</a></li>
              <li className="about"><a href="#about"><i className="ri-information-line"></i>About us</a></li>
              <li className="services"><a href="#services"><i className="ri-service-fill"></i>Services</a></li>
              <li className="gallery"><a href="#gallery"><i className="ri-gallery-line"></i>Gallery</a></li>
              <li className="review"><a href="#review"><i className="ri-star-line"></i>Reviews</a></li>
              <li className="clients"><a href="#clients"><i className="ri-user-line"></i>Clients</a></li>
              <li className="contact"><a href="#contact"><i className="ri-phone-line"></i>Contact us</a></li>
              <li className="close"><a><i className="ri-close-line"></i>Close</a></li>
            </ul>

            <div className="bar" id="bar"><i className="ri-menu-3-line"></i></div>
          </div>

          <div className="hero">
            <h1 >
              WELCOME TO <span className="highlight">KHS SERVICES</span>
            </h1>
            <p>
              We work hard to ensure that we provide the best possible service and products to them, and that we always meet their expectations.
            </p>
            <button><a href="./enquiry">Enquiry</a></button>
          </div>

          <div className="shades" >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
      </div>
    </div>
  )
}
