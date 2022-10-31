import React from 'react'
import { useParams } from 'react-router-dom';

function EditProfile() {
  const {userid} = useParams();

  return (
    <div>
        <h1>EditProfile</h1>
        <h2>{userid}</h2>
    </div>
  )
}

export default EditProfile;