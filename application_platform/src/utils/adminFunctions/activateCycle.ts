const activateCycle = async (cycleId: number, token: string) => {
    try {
      const response = await fetch(`https://a2sv-application-platform-backend-team9.onrender.com/admin/cycles/${cycleId}/activate`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      console.log('Activation response:', data)

      if (response.ok && data.success) {
        alert("Cycle activated successfully!")
      } else {
        alert(data.message || "Failed to activate cycle")
      }
    } catch (err) {
      console.error("Activation error:", err)
    }
  }