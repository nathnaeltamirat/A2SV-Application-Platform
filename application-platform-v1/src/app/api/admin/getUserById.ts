export const getUserById = async (userID:string) => {
  const token = localStorage.getItem("accessToken");
  console.log("userId",userID)
  const response = await fetch(
    `https://a2sv-application-platform-backend-team9.onrender.com/admin/users/${userID}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const responseData = await response.json();
  console.log(responseData)
  if (!response.ok) {
    throw new Error("User not found or error")
  }
  return responseData.data.full_name;
};
