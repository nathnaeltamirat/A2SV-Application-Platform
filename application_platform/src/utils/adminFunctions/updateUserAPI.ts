
export const updateUserAPI = async (
    e: React.FormEvent,
    name: string,
    email: string,
    role: string

    ) => {
        e.preventDefault()
    const USER_ID = '223277f0-af11-44c5-843e-23afcb194ea8'
    let token = localStorage.getItem('accessToken')

    const updatePayload = {
      full_name: name,
      email,
      role,
    }

    let res = await fetch(`https://a2sv-application-platform-backend-team9.onrender.com/admin/users/${USER_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        full_name: name,
        email,
        role,
      }),
    })

    
    if (res.status === 401 || res.status === 403) {
      try {
        token = await refreshAccessToken()
        res = await fetch(`https://a2sv-application-platform-backend-team9.onrender.com/admin/users/${USER_ID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({full_name: name,
          email,
          role,}),
        })
      } catch (err) {
        alert("Session expired. Please log in again.")
        return
      }
    }

    const data = await res.json()
    console.log("Update response:", data)

    if (res.ok && data.success) {
      alert("User updated successfully!")
      window.location.reload()
    } else {
      alert(data.message || "Failed to update user")
    }
  }