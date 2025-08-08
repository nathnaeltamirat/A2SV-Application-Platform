import { format } from "date-fns";

export const applicationSubmitted = async () => {
  const token = localStorage.getItem('accessToken')
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
  if (data.message == "No application found.") {
    return null;
  }
  const dateString = data.data.submitted_at;
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
