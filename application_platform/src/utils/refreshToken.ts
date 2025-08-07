const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem('refreshToken')

  if (!refreshToken) {
    alert("Session expired. Please log in again.")
    window.location.href = "/login"
    throw new Error("No refresh token")
  }

  const res = await fetch('https://a2sv-application-platform-backend-team9.onrender.com/auth/token/refresh', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  })

  const data = await res.json()

  if (!res.ok || !data.success) {
    localStorage.clear()
    alert("Session expired. Please log in again.")
    window.location.href = "/login"
    throw new Error("Failed to refresh access token")
  }

  localStorage.setItem('accessToken', data.data.access)
  return data.data.access
}