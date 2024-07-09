import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <image src="/images/staticbackground.webp" autoPlay loop muted />
      <h1>What is on your mind today?</h1>
      <p>How can the Word help?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>Sign-In/Sign-Up</Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>How Does It Work?</Button>
      </div>
    </div>
  )
}

export default HeroSection
