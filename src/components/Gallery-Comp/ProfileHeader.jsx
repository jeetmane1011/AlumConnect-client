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
                    <h5>{props.city}, {props.country}</h5>
                </div>
            </div>
            
        </div>
        <div className='profile--panel'>   
            <Link to="/community">
                <button className='profile--msg-btn'>Message</button>
            </Link>
            <div className='profile--links'>
                {props.facebook && <a href={props.facebook} target="_blank" className='fa-brands fa-2xl fa-facebook'></a>}
                {props.instagram && <a href={props.instagram} target="_blank" className='fa-brands fa-2xl fa-instagram'></a>}
                {props.github && <a href={props.github} target="_blank" className='fa-brands fa-2xl fa-github'></a>}
                {props.linkedin && <a href={props.linkedin} target="_blank" className='fa-brands fa-2xl fa-linkedin'></a>}
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader;