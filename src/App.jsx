import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import VideoShow from './components/VideoShow';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Review from './components/Review';
import Clients from './components/Clinets';
import Contact from './components/Contact';

import Logo from './assets/img/logo.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };

    setTimeout(
      function () {
        setIsLoading(false);
      }, 9000
    )
  }, []);

  return (
    <>
      {isLoading && (
        <div id="preload">
          <img width="100px" src={Logo} alt="" />
        </div>
      )}
      <Home />
      <About />
      <VideoShow />
      <Services />
      <Gallery />
      <Review />
      <Clients />
      <Contact />
    </>
  );
}

export default App;
