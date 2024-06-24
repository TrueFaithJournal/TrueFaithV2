import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/greenbackground2.mp4" autoPlay loop muted />
      <h1>What is on your mind today?</h1>
      <p>How can the Word help?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>Log New Entry</Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>View Previous Entries</Button>
      </div>
    </div>
  )
}

export default HeroSection
