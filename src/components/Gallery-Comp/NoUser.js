import { Link } from 'react-router-dom'
import React from 'react'
import './NoUser.css'

function NoUser() {
  return (
    <div className='user-body'>
      <i className="fa-solid fa-users fa-2xl"></i>
      <h2>Login as a User to view</h2>
      <Link to="/signup">
        <button className='btn btn-lg btn-dark rounded'>Log In</button>
      </Link>
    </div>
  )
}

export default NoUser