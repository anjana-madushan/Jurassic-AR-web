import React, { useState } from 'react';
import image1 from '../assets/marker_vel.png';
import image2 from '../assets/marker-pter.png';
import image3 from '../assets/Stygimoloch.png';
import backgroundImage from '../assets/bg.jpg';
import separateImage from '../assets/bg-icon.png';

const images = [image1, image2, image3];
const descriptions = ["Description for Image 1", "Description for Image 2", "Description for Image 3"];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '60px', top: '-30px' }}>JURASSIC AR</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <div style={{ marginLeft: '150px', textAlign: 'center' }}>
          <img
            src={separateImage}
            alt="Separate Image"
            style={{ maxHeight: '800px', maxWidth: '100%', marginBottom: '5px' }}
          />
          <h2 style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>Welcome To The AR Adventure!!!</h2>
        </div>
        <div style={{ marginRight: '150px', textAlign: 'center' }}>
          <img
            src={images[index]}
            alt={`Image ${index + 1}`}
            style={{ maxHeight: '400px', maxWidth: '100%', marginTop: '10px' }}
          />
          <p style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>{descriptions[index]}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button style={{ borderRadius: '20%', backgroundColor: 'blue', color: 'white', marginRight: '10px', padding: '10px' }} onClick={handlePrev}>Prev</button>
            <button style={{ borderRadius: '20%', backgroundColor: 'green', color: 'white', padding: '10px' }} onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;

// Set background image for the entire page
document.body.style.backgroundImage = `url('${backgroundImage}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';
