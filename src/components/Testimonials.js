import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const data = [
    {
      id: 1,
      Title: 'Engineer',
      Name: 'Calvin',
      Age: '25',
      Testimonial: '"True Faith has helped me build a more passionate and consistent relationship with the Lord."',
      Image: '',
    },
    {
      id: 2,
      Title: 'iOS Engineer',
      Name: 'Daniel',
      Age: '37',
      Testimonial: '"This website changed my life!"',
    },
    {
      id: 3,
      Title: 'Coach',
      Name: 'John',
      Age: 'Ageless',
      Testimonial: '"This is peanut butter to my jelly."',
    },
  ];

  const testimonialCards = data.map((testimonial) => (
    <div className="testimonial-card" key={testimonial.id}>
      <div className="name-age-container">
        <div className='testimonial-name'>{testimonial.Name},</div>
        <div>{testimonial.Age},</div>
        <div>{testimonial.Title},</div>
      </div>
      <div className='testimonial-field'>{testimonial.Testimonial}</div>
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
