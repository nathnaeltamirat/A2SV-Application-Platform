export const updateCycle = async (cycleId: number, payload: {
  name: string;
  start_date: string;
  end_date: string;
  description: string | null;
}) => {
  const token = localStorage.getItem("accessToken");
  const options = {
    body: JSON.stringify(payload),
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(
    `https://a2sv-application-platform-backend-team9.onrender.com/admin/cycles/${cycleId}/`,
    options
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Update failed: ${text}`);
  }

  return res.json();
};
