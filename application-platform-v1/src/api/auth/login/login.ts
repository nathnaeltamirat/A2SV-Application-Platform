export const loggedInformation = async (formData: {
  email: string;
  password: string;
}) => {
  const response = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/auth/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    }
  );

  const responseData = await response.json();
  if (response.ok) {
    localStorage.setItem("accessToken", responseData.data.access);
    localStorage.setItem("refreshToken", responseData.data.refresh);
    localStorage.setItem("role", responseData.data.role);
  }
  const token = localStorage.getItem("accessToken");
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/profile/me",
    options
  );
  const data = await res.json();
  localStorage.setItem("full_name", data.data.full_name);
  return responseData;
};
