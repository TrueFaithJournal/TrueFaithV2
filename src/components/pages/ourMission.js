import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import './OurMission.css';

function OurMission() {
  return (
    <div className="ourMission">
      <img src="/images/staticbackground.webp" autoPlay loop muted></img>
      <h1 className="mission">
        Bridging Hearts to God and Self Through Scripture and Prayer
      </h1>
      <br></br>
      <p1 className='mission-statement'>At True Faith Journal, our mission is to nurture the soul by bridging the gap between personal
         reflection and divine guidance. We believe that every journal entry is an opportunity to deepen
          one’s relationship with God and cultivate self-confidence. Through our innovative application,
           we transform these intimate reflections into personalized spiritual support, offering carefully
            selected Bible scriptures and customized prayers tailored to each individual’s unique pains and
             needs. Our goal is to provide solace, wisdom, and encouragement, empowering users to navigate
              life’s challenges with faith, hope, and grace. By fostering a deeper connection with their 
              spiritual journey and a renewed belief in their own abilities, we aim to help individuals discover 
              their inner strength and divine grace at every step of their journey.</p1>
              <br></br>
              <br></br>
<br></br>
<br></br>
<div class="benefit-container">
        <h1>Benefits to Others</h1>

        <p className='selling-point'>TFJ offers instant, personalized Bible scriptures and prayers to calm
         your heart and provide deeper context beyond popular verses, eliminating the need to Google
          specific topics, while encouraging regular prayer, introspection, and documenting your growth
           journey, ultimately offering peace through truth.</p>

        <h2>Benefits:</h2>
        <ol>
            <li>No more Googling what the Bible says about specific topics.</li>
            <li>Custom prayers available on demand.</li>
            <li>Calms your heart based on your feelings.</li>
            <li>Provides deeper context beyond popular Bible verses.</li>
        </ol>

        <h2>Problems Solved:</h2>
        <ul>
            <li>Offers peace through truth.</li>
            <li>Encourages regular prayer.</li>
            <li>Promotes introspection.</li>
            <li>Documents your growth journey.</li>
        </ul>
    </div>
    </div>
  );
}

export default OurMission;
