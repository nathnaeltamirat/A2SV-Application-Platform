import { applicationState } from "@/types/applicant.types";
import { getResumeFile } from "@/utils/fileStore";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZmRmMjExNi0yOGRhLTQ0ODgtODY5MS02ZmMwM2RkMTg5ZGYiLCJleHAiOjE3NTQ1NTQ5OTIsInR5cGUiOiJhY2Nlc3MifQ.-ggHZdbyLpSqysCLiczUwADUFVwSEZeED2oFLu6E2qU";

const sendApplicantData = async (applicationInfo: applicationState) => {
  const formData = new FormData();

  formData.append("codeforces_handle", applicationInfo.codeforces_handle || "");
  formData.append("degree", applicationInfo.degree || "");
  formData.append("essay_about_you", applicationInfo.essay_about_you || "");
  formData.append("essay_why_a2sv", applicationInfo.essay_why_a2sv || "");
  formData.append("leetcode_handle", applicationInfo.leetcode_handle || "");
  formData.append("school", applicationInfo.school || "");
  formData.append("student_id", applicationInfo.student_id || "");
  formData.append("country", applicationInfo.country || "");
  const resumeFile = getResumeFile();
  if (resumeFile) {
    formData.append("resume", resumeFile);
  }

  try {
    const res = await fetch(
      "https://a2sv-application-platform-backend-team9.onrender.com/applications",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    const result = await res.json();
    console.log("Backend response:", result);
    return result;
  } catch (error) {
    console.error("Error submitting applicant data:", error);
    throw error;
  }
};

export default sendApplicantData;
