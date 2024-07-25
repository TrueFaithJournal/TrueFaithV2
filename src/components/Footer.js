import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className="footer-subscription-heading">
            Want More TrueFaith?
        </p>
        <div className='input-areas'>
            <form>
                <input type='email' name='email' className='footer-input' placeholder='Your Email'/>
                <Button buttonStyle='btn-outline'>Subscribe</Button>
            </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to=''>How It Works</Link>
                <Link to='/testimonials'>Testimonials</Link>
                <Link to='/terms-of-service'>Terms of Service</Link>
                <Link to='/pricing'>Pricing</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to=''>Contacts</Link>
                <Link to='/testimonials'>Support</Link>
                <Link to='/terms-of-service'>Ministry</Link>
                <Link to='/pricing'>More</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                <Link to=''>Instagram</Link>
                <Link to='/testimonials'>Facebook</Link>
                <Link to='/terms-of-service'>Youtube</Link>
                <Link to='/pricing'>Twitter</Link>
            </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to="/" className="social-logo">
                    <img src='images/TrueFaithLogoWide.jpg'></img>
                </Link>
            </div>
            <small className='website-rights'>TrueFaith 2024</small>
            <div className='social-icons'>
                <Link className='social-icon-link-facebook'
                to='/'
                target="_blank"
                aria-label='Facebook'>
                    <i className='fab fa-facebook-f'></i>
                </Link>
                <Link className='social-icon-link-instagram'
                to='/'
                target="_blank"
                aria-label='Instagram'>
                    <i className='fab fa-instagram'></i>
                </Link>
                <Link className='social-icon-link-youtube'
                to='/'
                target="_blank"
                aria-label='Youtube'>
                    <i className='fab fa-youtube'></i>
                </Link>
                <Link className='social-icon-link-twitter'
                to='/'
                target="_blank"
                aria-label='Twitter'>
                    <i className='fab fa-twitter'></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
