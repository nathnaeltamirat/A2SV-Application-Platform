import { applicationState } from "@/types/applicant.types";

const sendApplicantData = async (applicationInfo: applicationState) => {
    console.log(process.env.NEXT_PUBLIC_ACCESS_TOKEN);
  const res = await fetch('https://a2sv-application-platform-backend-team9.onrender.com/applications', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxOWE2NWE0MS02MDExLTQxNGItYmI1Ni01YzI0NzQ0ZTUyNWEiLCJleHAiOjE3NTQ0MDEyNTUsInR5cGUiOiJhY2Nlc3MifQ.Ex7wm48zHbG0t9jnAvoFB_rkB1Ht-Vlghw9dRe1qCMY`,
    },
    body: JSON.stringify(applicationInfo),
  });

  const result = await res.json();
  return result;
};

export default sendApplicantData;
