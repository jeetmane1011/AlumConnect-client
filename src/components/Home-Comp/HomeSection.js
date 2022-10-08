import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HomeSection.css';

function HeroSection() {
  return (
    <div>
      <img id='background' src='/images/bg_img.jpeg' alt='background_img'></img>
      <div className='hero-container'>
        <h1>WELCOME TO</h1>
        <h1>AlumConnect</h1>
        <p id='home-para'>Network | Learn | Flourish</p>
        <div className='hero-btns'>
          {/* <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            SIGN UP
          </Button> */}
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
