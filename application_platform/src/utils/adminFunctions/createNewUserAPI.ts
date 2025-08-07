export const createNewUserAPI = async (
  e: React.FormEvent,
  name: string,
  email: string,
  password: string,
  role: string
) => {
  e.preventDefault()
  console.log("Form submitted")

  try {
    let token = localStorage.getItem('accessToken')

    let response = await fetch('https://a2sv-application-platform-backend-team9.onrender.com/admin/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        full_name: name,
        email,
        password,
        role,
      }),
    })

    if (response.status === 401 || response.status === 403) {
      console.log("Access token expired, refreshing...")
      token = await refreshAccessToken()

      response = await fetch('https://a2sv-application-platform-backend-team9.onrender.com/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          full_name: name,
          email,
          password,
          role,
        }),
      })
    }

    const data = await response.json()
    console.log("Server response:", data)

    if (response.ok) {
      alert("User created successfully!")
      window.location.reload()
    } else {
      alert(data.message || "Failed to create user")
    }

  } catch (err) {
    console.error("Error:", err)
    alert("An error occurred")
  }
}
