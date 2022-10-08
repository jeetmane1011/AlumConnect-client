import React from 'react';
import './GalleryCarousel.css';
import './ImageCardComponent.css'
import ImageCardComponent from './ImageCardComponent';
import { Button } from './Button';

function GalleryCarousel() {
  return (
    <div className='home-gallery'>
      <h1 id='alumni-title'>Alumni</h1>
      <h1 id='alumni-heading'>Meet our Alumni</h1>
      <div className='ImageCards__container'>
          <div className='img-cards-wrapper'>
            <ImageCardComponent
              src='images/man1.jpg'
              title='Vicky Kaushal'
              text='Batch 2015 | Actor and Producer | Forbes 40 under 40'
              path='/services'
            />
            <ImageCardComponent
              src='images/man1.jpg'
              title='Tejasswi Prakash'
              text='Batch 2017 | Actor and Producer | Big Boss Winner 2022'
              label='alumni'
              path='/products'
            />
            <ImageCardComponent
              src='images/man1.jpg'
              title='Ravi Dubey'
              text='Batch 2015 | Actor, Model, Television Presenter & Producer | Forbes 40 under 40'
              label='alumni'
              path='/sign-up'
            />
          </div>
      </div>
      <div className='hero-btns-gallery'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            LEARN MORE
          </Button>
      </div>
    </div>
  );
}

export default GalleryCarousel;
