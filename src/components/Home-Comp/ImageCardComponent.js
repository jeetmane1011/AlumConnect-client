import React from 'react'
import { Link } from 'react-router-dom';
import './ImageCardComponent.css'

function ImageCardComponent(props) {
    return (
      <>
      <div className='imgcards__item'>
        <Link className='imgcards__item__link' to={props.path}>
          <div className='imgcards__item__pic-wrap'>
            <img className='imgcards__item__img' alt='card_img' src={props.src}/>
          </div>
          <div className='imgcards__item__info'>
            <h2 className='imgcards__item__title'>{props.title}</h2>
            <h5 className='imgcards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </div>
      </>
    );
  }
export default ImageCardComponent