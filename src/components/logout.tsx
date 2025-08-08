import React from 'react'

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        window.location.href = '/auth/login';
    };

  return (
    <div>
      <button>Logout</button>
    </div>
  )
}

export default Logout
