import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Card from '../Card';
import Testimonials from '../Testimonials';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
