import React from 'react';
import {Link}  from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider.js';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const { logout } = useAuth();

  return (
    <div className="dropdown">
      <button>
        <img alt={user.name} src={user.pic.url} />
        <i className="fa-solid fa-caret-down fa-xs"></i>
      </button>
      <div className="dropdown-content">
        <li>
          <Link to={`/profile/${user._id}`}>
            <button className='dropdown-item'><i className="fa-solid fa-user"></i>View Profile</button>
          </Link>
        </li>
        <li>
          <Link to={`/edit/${user._id}`}>
            <button className='dropdown-item'><i className="fa-solid fa-pen-to-square"></i>Edit Profile</button>
          </Link>
        </li>
        <li>
          <button className="dropdown-item" onClick={logout}><i className="fa-solid fa-right-from-bracket"></i>Logout</button>
        </li>
      </div>
    </div>
  )
}

export default ProfileButton;