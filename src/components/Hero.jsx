import { useState, useEffect } from "react";
import "./Hero.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const videos = [video2, video1]; 

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      nextVideo();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div className="hero-container">
      <video
        key={currentIndex}
        className="video-background fade-in"
        autoPlay
        muted
        loop
      >
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>

      <div className="content">
        <h1 className="main-title">
          {/* Welcome to <span className="highlight">My Site</span> */}
        </h1>
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={prevVideo}>
        &#10094;
      </button>
      <button className="arrow right" onClick={nextVideo}>
        &#10095;
      </button>
    </div>
    
  );
}
