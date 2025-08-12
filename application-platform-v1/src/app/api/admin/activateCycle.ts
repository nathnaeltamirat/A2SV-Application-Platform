export const activateCycle = async (cycleId: number) => {
  const token = localStorage.getItem("accessToken");
  const options = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(
    `https://a2sv-application-platform-backend-team9.onrender.com/admin/cycles/${cycleId}/activate`,
    options
  );

  if (!res.ok) {
    const text = await res.text();
    console.log(text)
    throw new Error(`Update failed: ${text}`);
  }

  return res.json();
};
