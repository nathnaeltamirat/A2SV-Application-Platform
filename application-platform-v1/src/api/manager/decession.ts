import { format } from "date-fns";

export const Decission = async ( decision_notes, status,id) => {
  const token = localStorage.getItem("accessToken");

  const body = {
    status,
    decision_notes,
  };
  const options = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  };
  const data = await fetch(
    `https://a2sv-application-platform-backend-team9.onrender.com/manager/applications/${id}/decide`,
    options
  );
  const res = await data.json();
  window.location.reload()
  console.log(res);
};
