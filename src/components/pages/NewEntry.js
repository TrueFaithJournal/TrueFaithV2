import React from 'react';
import '../../App.css';
import SSComponent from '../SSComponent';

export default function NewEntry() {
  return (
    <div className="hero-container">
      <video src="/videos/greenbackground2.mp4" autoPlay loop muted />
      <h1 className="newentry">What`s on your mind?</h1>
      <SSComponent />
    </div>
  );
}
