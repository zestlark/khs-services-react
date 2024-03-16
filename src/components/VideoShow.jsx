import React, { useEffect, useState } from 'react';
import VideoShowVideo from '../assets/img/63b5be740c688.mp4';

export default function VideoShow() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('videoshow-video');

    const togglePlay = () => {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    };

    document.getElementsByClassName('player')[0].addEventListener('click', togglePlay);

    const handleVideoEnded = () => {
      setIsPlaying(false);
      document.getElementsByClassName('videoshow-box')[0].classList.remove('play');
    };

    videoElement.addEventListener('ended', handleVideoEnded);

    return () => {
      document.getElementsByClassName('player')[0].removeEventListener('click', togglePlay);
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, [isPlaying]);

  return (
    <div id="videoshow" className="webpage_section">
      <div className="container">
        <div className="heading" data-aos="fade-up">video show</div>
        <div className="videoshow-box" data-aos="fade-up">
          <video preload="metadata" id="videoshow-video" src={VideoShowVideo}></video>
          <div className="player"><i className={`play ${isPlaying ? 'ri-pause-line' : 'ri-play-fill'}`}></i></div>
        </div>
      </div>
    </div>
  );
}
