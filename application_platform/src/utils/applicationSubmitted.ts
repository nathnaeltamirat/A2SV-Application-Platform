import { format } from "date-fns";

export const applicationSubmitted = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZmRmMjExNi0yOGRhLTQ0ODgtODY5MS02ZmMwM2RkMTg5ZGYiLCJleHAiOjE3NTQ1NzA3NjQsInR5cGUiOiJhY2Nlc3MifQ.VdksIJ3qV2-FsGZx0Y08ecNqa7JO9rD0dqgiFlu48aY";
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/applications/my-status",
    options
  );
  const data = await res.json();
  console.log("data", data);
  if (data.message == "No application found.") {
    return null;
  }
  console.log("data", data);
  const dateString = data.data.submitted_at;

  console.log("date and time ", dateString);
  const monthMap = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };

  const date = new Date(dateString);

  const day = date.getDate(); 
  const month =
    monthMap[
      date.getMonth() + 1 < 10
        ? `0${date.getUTCMonth() + 1}`
        : `${date.getUTCMonth() + 1}`
    ];
  const year = date.getFullYear();

  const formattedDate = isNaN(date.getTime())
    ? "N/A"
    : `${day}, ${month}, ${year}`;
  console.log(formattedDate);
  return formattedDate;
};
