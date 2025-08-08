export const SignedInfo = async (formData: {
  full_name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
      }),
    }
  );
  let responseData;
  try {
    responseData = await response.json();
  } catch (e) {
    throw new Error("Invalid server response");
  }

  if (!response.ok) {
    throw new Error(responseData?.message || "Registration failed");
  }

  return responseData;
};
