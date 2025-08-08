export const createCycleAPI = async (
  e: React.FormEvent,
  cyclename: string,
  start: string,
  end: string
) => {
  e.preventDefault()
  try {
    let token = localStorage.getItem('accessToken')

    let response = await fetch('https://a2sv-application-platform-backend-team9.onrender.com/admin/cycles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: cyclename,
        start_date: start,
        end_date: end,
      }),
    })

    if (response.status === 401 || response.status === 403) {
      console.log("Access token expired, refreshing...")
      token = await refreshAccessToken()

      response = await fetch('https://a2sv-application-platform-backend-team9.onrender.com/admin/cycles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: cyclename,
          start_date: start,
          end_date: end,
        }),
      })
    }

    const data = await response.json()
    console.log('Server response:', data)

    if (response.ok && data.success) {
      
    } else {
      alert(data.message || "Failed to create cycle")
    }
  } catch (err) {
    console.error("Error:", err)
    alert("An error occurred while creating the cycle")
  }
}
