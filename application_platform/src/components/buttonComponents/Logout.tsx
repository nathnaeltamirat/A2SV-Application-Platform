'use client'
import React from 'react'

const Logout = () => {
    const handleLogout = () => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('role');

          window.location.href = '/';
    };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
