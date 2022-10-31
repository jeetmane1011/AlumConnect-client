import React from 'react'
import {Link} from 'react-router-dom'
import './ProfileHeader.css'

function ProfileHeader(props) {
  return (
    <div>
        <div className='profile--header rounded-top'>
            <div className='profile--main'>
                <img className='profile--image' src={props.img}/>
                <div className='px-5'>
                    <h2>{props.name}</h2>
                    <h5>{props.city}</h5>
                </div>
                
            </div>
            
        </div>
        <div className='profile--panel'>
            <Link to="/chatroom">
                <button className='profile--msg-btn'>Message</button>
            </Link>
            <div className='profile--links'>
                <a href="#" className='fa-brands fa-2xl fa-facebook'></a>
                <a href="#" className='fa-brands fa-2xl fa-instagram'></a>
                <a href="#" className='fa-brands fa-2xl fa-github'></a>
                <a href="#" className='fa-brands fa-2xl fa-linkedin'></a>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader;