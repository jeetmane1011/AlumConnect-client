import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider.js';

function PrivateRoute({ children }) {
    const { user } = useAuth();
    return user? children: <Navigate to='/signup'/>;
}

export default PrivateRoute