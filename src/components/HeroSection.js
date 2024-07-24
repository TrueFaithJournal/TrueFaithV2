import React from 'react';
import '../App.css';
import { Button } from './Button';
import Testimonials from './Testimonials.js';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-sections">
        <div className="hero-section-left">
          <h1 className="left-phrase-top">
            No more googling what the Bible says about scripture topics.
          </h1>
          <br></br>
          <p className="left-phrase-bottom">
            See how God's Word and prayer can help you grow today.
          </p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Get Started
            </Button>
            {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          How Does It Work?
        </Button> */}
          </div>
        </div>
        <div className="hero-section-right">
          {<video src="/videos/Demo.mov" autoPlay loop muted />}
        </div>
      </div>

    </div>
  );
}

export default HeroSection;
