import React from 'react';
import './ProfileBody.css';

function ProfileBody(props) {
  return (
    <div className='profile--body'>
      <h3><b>About Me</b></h3>
      <br />
      <div className='profile--desc'>
        <div className='d-flex justify-content-between'>
          <h6><strong>{props.job}</strong></h6>
          <h2>{props.age}, {props.gender}</h2>
        </div>
        <p className='lead'>{props.institute}</p>
        <br />
        <hr></hr>
        <br />
        <h6>
          {props.desc}
        </h6>
      </div>
    </div>
  )
}

export default ProfileBody;