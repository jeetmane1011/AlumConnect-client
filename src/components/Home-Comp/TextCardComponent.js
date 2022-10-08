import React from 'react';
import { Button } from './Button';
import './TextCardComponent.css'

function TextCardComponent(props) {

  return (
    <>
    <div className='textcards__item'>
      <div className='textcards__item__wrap'>
        <div className='textcards__item__info'>
          <h2 className='textcards__item__title'>{props.title}</h2>
          <h5 className='textcards__item__text'>{props.text}</h5>
        </div>
        <div className='textcards__btn'>
            <Button
                className='text-res-btn'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
                VIEW
            </Button>
        </div>
      </div>
    </div>
    </>
  );
}
export default TextCardComponent

