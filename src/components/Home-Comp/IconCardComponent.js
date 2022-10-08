import React from 'react';
import { IoIosPeople } from "react-icons/io";
import {Link} from 'react-router-dom';
import './IconCardComponent.css'

function IconCardComponent(props) {

  return (
    <>
    <div className='iconcards__item'>
      <Link className='iconcards__item__link' to={props.path}>
        <div className='iconcards__item__icon'>
          <IoIosPeople className='icon'/>
        </div>
        <div className='iconcards__item__info'>
          <h2 className='iconcards__item__title'>{props.title}</h2>
          <h5 className='iconcards__item__text'>{props.text}</h5>
        </div>
      </Link>
    </div>
    </>
  );
}
export default IconCardComponent

