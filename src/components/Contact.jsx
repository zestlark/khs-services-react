import React, { useState } from 'react';
import Logo from '../assets/img/logo.png';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://khs-services-react-server.onrender.com/send-email-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      const data = await response.text();
      setEmail('')
      setMessage('')
      notification.notify(data, 'khsservices', Logo);
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };

  return (
    <div id="contact" className="webpage_section">
      <div className="container">
        <div className="heading" data-aos="fade-up">contact</div>

        <div className="footer">
          <img src={Logo} alt="" data-aos="fade-up" />
          <p data-aos="fade-up">We at KHS take our commitment to delivering value to our clients seriously.</p>
        </div>

        <div className="footer two">
          <form data-aos="fade-up" id="contactform" onSubmit={handleSubmit}>
            <input type="email" placeholder="Your Email" id="contactformemail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Your Message" id="contactformmessage" value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10"></textarea>
            <button type="submit">Submit</button>
          </form>

          <ul className="info" data-aos="fade-up">
            <h3>Email</h3>
            <li>khsservices95@gmail.com</li>
            <h3>phone</h3>
            <li>+917021119019/8108025049</li>
            <h3>address</h3>
            <li>grow more bliss B wing 604 gaikwad nagar mhada gate no 8 malvani malad west</li>
            <h3>social</h3>
            <li className="social">
              <a href="https://www.facebook.com/"><i className="ri-instagram-line"></i></a>
              <a href="https://www.instagram.com/"><i className="ri-facebook-line"></i></a>
              <a href="https://twitter.com/"><i className="ri-twitter-line"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
