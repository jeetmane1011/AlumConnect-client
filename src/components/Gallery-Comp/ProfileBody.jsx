import React from 'react';
import './ProfileBody.css';

function ProfileBody(props) {
  return (
    <div className='profile--body'>
      <h3><b>About Me</b></h3>
      <div className='profile--desc'>
        <h6><strong>{props.job}</strong></h6>
        <p className='lead'>{props.institute}</p>
        <hr></hr>
        <h6>
          {props.desc}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consequuntur culpa perferendis. Ducimus exercitationem perspiciatis hic minima quo dolore earum laboriosam perferendis? Nam reprehenderit vero alias, dignissimos ad quam inventore.
        </h6>
      </div>
    </div>
  )
}

export default ProfileBody;