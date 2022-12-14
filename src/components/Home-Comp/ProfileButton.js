import React, { useState } from 'react';
import {Link}  from 'react-router-dom';
import { ChatState } from "../../Context/ChatProvider.js"
import './ProfileButton.css';

function ProfileButton({ user }) {
  const { logout } = ChatState();

  return (
    <div class="dropdown">
      <button>
        <img alt={user.name} src={user.pic} />
        <i class="fa-solid fa-caret-down fa-xs"></i>
      </button>
      <div class="dropdown-content">
        <li>
          <Link to={`/profile/${user._id}`}>
            <button className='dropdown-item'><i class="fa-solid fa-user"></i>View Profile</button>
          </Link>
        </li>
        <li>
          <Link to={`/edit/${user._id}`}>
            <button className='dropdown-item'><i class="fa-solid fa-pen-to-square"></i>Edit Profile</button>
          </Link>
        </li>
        <li>
          <button className="dropdown-item" onClick={logout}><i class="fa-solid fa-right-from-bracket"></i>Logout</button>
        </li>
      </div>
    </div>
  )
}

export default ProfileButton;