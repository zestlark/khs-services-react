import React from 'react';

import GalleryImg1 from '../assets/gallery/63bc3f5518b8e.jpg';
import GalleryImg2 from '../assets/gallery/65f11c9e2a2ed.jpg';
import GalleryImg3 from '../assets/gallery/65f11c9e2a82b.jpg';
import GalleryImg4 from '../assets/gallery/65f11c9e2ad6e.jpg';
import GalleryImg5 from '../assets/gallery/65f11c9e2b26c.jpg';
import GalleryImg6 from '../assets/gallery/65f11c9e2b816.jpg';
import GalleryImg7 from '../assets/gallery/65f11c9e2bd31.jpg';
import GalleryImg8 from '../assets/gallery/65f11c9e2c75f.jpg';
import GalleryImg9 from '../assets/gallery/65f11c9e2c238.jpg';
import GalleryImg10 from '../assets/gallery/65f11c9e2cc88.jpg';
import GalleryImg11 from '../assets/gallery/65f11c9e27e9e.jpg';
import GalleryImg12 from '../assets/gallery/65f11c9e28a42.jpg';
import GalleryImg13 from '../assets/gallery/65f11c9e28f45.jpg';
import GalleryImg14 from '../assets/gallery/65f11c9e29e21.jpg';
import GalleryImg15 from '../assets/gallery/65f11c9e28545.jpg';
import GalleryImg16 from '../assets/gallery/65f11c9e29413.jpg';
import GalleryImg17 from '../assets/gallery/65f11c9e29929.jpg';

const galleryImages = [
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg4,
  GalleryImg5,
  GalleryImg6,
  GalleryImg7,
  GalleryImg8,
  GalleryImg9,
  GalleryImg10,
  GalleryImg11,
  GalleryImg12,
  GalleryImg13,
  GalleryImg14,
  GalleryImg15,
  GalleryImg16,
  GalleryImg17,
];


const Gallery = () => {
  const handleClick = (image) => {
    // Define your gallery image open logic here
    console.log(`Open ${image}`);
  };

  return (
    <div id="gallery" className="webpage_section">
      <div className="container">
        <div className="heading" data-aos="fade-up">Gallery</div>
        <div id="photos">
          {galleryImages.slice(0, 20).map((image, index) => (
            <img
              key={index}
              onClick={() => handleClick(image)}
              src={image}
              alt=""
              data-aos="fade-up"
            />
          ))}
        </div>

        {galleryImages.length > 20 && (
          <div className="btn-box" data-aos="fade-up">
            <button><a href="./gallery">view all photos</a></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;