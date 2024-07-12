import React from 'react';
import '../../App.css';
import SSComponent from '../SSComponent';

export default function NewEntry() {
  return (
    
    <div className="hero-container">
      <img src="/images/staticbackground.webp" autoPlay loop muted></img>
      <br></br>
      <br></br>
      <h1 className="newentry">What`s on your mind?</h1>
      <SSComponent />
    </div>
  );
}
