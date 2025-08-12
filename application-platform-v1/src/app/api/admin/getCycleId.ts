export const getCycleById = async (id:string) => {
  console.log("cycleId",id)
  const response = await fetch(
    `https://a2sv-application-platform-backend-team9.onrender.com/cycles/${id}/`,
    {
      method: "GET",

    }
  );

  const responseData = await response.json();
  console.log(responseData)
  if (!response.ok) {
    throw new Error("User not found or error")
  }
  return responseData.data;
};
