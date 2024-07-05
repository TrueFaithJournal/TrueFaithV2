import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';

function OurMission() {
  return (
    <div className="ourMission">
      <video src="/videos/greenbackground2.mp4" autoPlay loop muted />
      <h1 className="mission">
        Bridging Hearts to God and Self Through Scripture and Prayer
      </h1>
    </div>
  );
}

export default OurMission;
