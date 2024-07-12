import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-sections">
        <div className="hero-section-left">
          <h1>No more Googling what the Bible says about scripture topics.</h1>
          <p>See how Gods word and prayer can help you grow today.</p>
        </div>
        <div className="hero-section-right">
          <h1>No more Googling what the Bible says about scripture topics.</h1>
          <p>See how Gods word and prayer can help you grow today.</p>
          {/* <video src="/videos/greenbackground2.mp4" autoPlay loop muted /> */}
        </div>
      </div>

      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Sign-In/Sign-Up
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          How Does It Work?
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
