import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { GiCircleClaws } from "react-icons/gi";
import ContactForm from './ContactForm';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-subscription'>
        <p className='footer-subscription-heading'>
          CONTACT US
        </p>
      </div>
      <div className='form-map'>
        <div className='contact-form'>
          <ContactForm />
        </div>
        <div className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15078.756203599194!2d72.8237143!3d19.1212925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5767a74a751ccaf9!2sRajiv%20Gandhi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1664824808169!5m2!1sen!2sin" title="rgit-map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              AlumC< GiCircleClaws />nnect
            </Link>
          </div>
          <small className='website-rights'>AlumConnect © 2022</small>
          <div className='social-icons'>
            <a
              href='https://www.instagram.com/alum.connect/?utm_source=qr'
              className='social-icon-link facebook'
              
              rel='noreferrer'
              aria-label='Facebook'
            >
            <i className='fab fa-facebook-f' />
            </a>
            <a
              href='https://www.instagram.com/alum.connect/?utm_source=qr'
              className='social-icon-link instagram'
              
              rel='noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            
            <a href="https://youtube.com/channel/UCYKgzq0ah2_wmlwjvEPhDwQ" rel='noreferrer' className='social-icon-link youtube'>
              <i className='fab fa-youtube' /></a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/ConnectAlum?t=fWERjFdC2I2j8DO3ObYQxw&s=09'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
