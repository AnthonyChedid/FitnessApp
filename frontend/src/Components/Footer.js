import React from 'react';
import '../Styling/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Links </h2>
            <Link to='/'>Home</Link>
            <Link to='/Services'>Services</Link>
            <Link to='/Trainers'>Trainers</Link>
            <Link to='/SignUp'>Sign Up</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Our Address</h2>
              <address>
                121, Clear Water Bay Road<br></br>
                Clear Water Bay, Kowloon<br></br>
                Lebanon<br></br>
                <i class="fa fa-phone fa-sm "></i>: +961 78818644<br></br>
                <i class="fa fa-fax fa-sm "></i>: +961 76455213<br></br>
                <i class="fa fa-envelope fa-sm "></i>: 
                <a href="mailto:getfit@gmail.com ">getfit@gmail.com</a>
              </address>
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              GetFit
              <i class='fas fa-dumbbell' />
            </Link>
          </div>
          <small class='website-rights'>GetFit © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;