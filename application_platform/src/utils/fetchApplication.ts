const fetchApplications = async () => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://a2sv-application-platform-backend-team9.onrender.com/reviews/assigned`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("API Response:", response);

    if (!response.ok) {
      if (response.status === 401) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Data:", data);

    if (!data.data) {
      throw new Error("Invalid API response structure");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};
