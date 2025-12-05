import React, { useState, useEffect } from "react";
import "../../style/Slider.css";

export default function Slider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // هر 5 ثانیه

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      <img src={images[index]} alt="slider" className="slider-image" />
    </div>
  );
}
