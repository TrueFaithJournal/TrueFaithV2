import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const data = [
    {
      id: 1,
      Title: 'Engineer',
      Name: 'Calvin',
      Age: '25',
      Testimonial: 'Love this website',
      Image: '',
    },
    {
      id: 2,
      Title: 'iOS Engineer',
      Name: 'Daniel',
      Age: '37',
      Testimonial: 'This website changed my life',
    },
    {
      id: 3,
      Title: 'Coach',
      Name: 'John',
      Age: 'Ageless',
      Testimonial: 'This is peanut butter to my jelly',
    },
    {
      id: 4,
      Title: 'Best Friend',
      Name: 'Winnie',
      Age: 'Ageless',
      Testimonial: 'Roof Roof',
    },
  ];

  const testimonialCards = data.map((testimonial) => (
    <div className="testimonial-card" key={testimonial.id}>
      <div>Title: {testimonial.Title}</div>
      <div className="name-age-container">
        <div>Name: {testimonial.Name}</div>
        <div>Age: {testimonial.Age}</div>
      </div>
      <div>Testimonial: {testimonial.Testimonial}</div>
    </div>
  ));

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-title">Testimonials</h1>
      <div className="testimonials">{testimonialCards}</div>
    </div>
  );
}

export default Testimonials;
