import React, { useState } from 'react';

import Azolla from "../assets/images/Azolla.jpg";
import bview from "../assets/images/bview.jpeg";
import cagefix from "../assets/images/cagefix.jpg";
import cages from "../assets/images/cages.jpg";
import Eggs from "../assets/images/eggs.jpg";
import eggs2 from "../assets/images/eggs2.jpg";
import farmer from "../assets/images/farmer.jpg";
import fview from "../assets/images/fview.jpg";
import hback from "../assets/images/hback.jpg";
import hencage from "../assets/images/hencage.jpg";
import holes from "../assets/images/holes.jpg";
import isa from "../assets/images/isa.jpg";
import kale2 from "../assets/images/kale2.jpg";
import kales from "../assets/images/kales.jpeg";
import koti from "../assets/images/koti.jpg";
import lorineclient from "../assets/images/lorineclient.jpg";
import mboga from "../assets/images/mboga.jpg";
import meggs from "../assets/images/meggs.jpg";

import '../styles/Gallery.css';

const images = [
  { src: Azolla, alt: 'Azolla cultivation' },
  { src: bview, alt: 'Beautiful farm view' },
  { src: cagefix, alt: 'Cage installation' },
  { src: cages, alt: 'Layer cages' },
  { src: Eggs, alt: 'Fresh eggs collection' },
  { src: eggs2, alt: 'Egg trays' },
  { src: farmer, alt: 'Hardworking farmer' },
  { src: fview, alt: 'Farm overview' },
  { src: hback, alt: 'Hen backyard' },
  { src: hencage, alt: 'Hen cage structure' },
  { src: holes, alt: 'Planting holes' },
  { src: isa, alt: 'ISA Brown layers' },
  { src: kale2, alt: 'Kale farming' },
  { src: kales, alt: 'Healthy kales' },
  { src: koti, alt: 'Farm produce' },
  { src: lorineclient, alt: 'Happy client' },
  { src: mboga, alt: 'Green vegetables' },
  { src: meggs, alt: 'Egg production' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-heading" style={{ marginTop: "80px" }}>Explore Our Gallery</h1>
      <p className="gallery-description">
      Discover the heart of our community through images that showcase our agricultural journey and collective efforts.      </p>
      <div className="container">
        <div className="row">
          {images.map((image, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="gallery-item" onClick={() => openImage(index)}>
                <img src={image.src} alt={image.alt} className="gallery-image img-fluid rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
          <button className="prev-btn" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
          <button className="next-btn" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
