import React, { useState, useEffect } from 'react';

const SwiperSlideImg = ({ photo }) => {
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    import(`../images/${photo}`)
      .then(image => {
        setSlide(image.default);
      })
      .catch(error => {
        console.error('Error loading the image:', error);
      });
  }, [photo]);

  return <>{slide && <img src={slide} alt="slide" />}</>;
};

export default SwiperSlideImg;
