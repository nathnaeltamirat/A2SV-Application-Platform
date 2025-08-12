export const fetchReviwedData = async (application_id:string) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `https://a2sv-application-platform-backend-team9.onrender.com/reviews/${application_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = response.json();
  console.log(data)
  return data;
};


