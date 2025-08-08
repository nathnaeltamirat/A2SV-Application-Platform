import { applicationState } from "@/types/applicant.types";
import { getResumeFile } from "@/utils/fileStore";
import { useRouter } from "next/navigation";

const sendApplicantData = async (applicationInfo: applicationState) => {
  const token = localStorage.getItem("accessToken"); 

  if (!token) {
    console.error("No access token found");
    return { success: false, message: "Not authenticated" };
  }

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
    // router.push("/user/confirmation");
    return result;
  } catch (error) {
    console.error("Error submitting applicant data:", error);
    throw error;
  }
};

export default sendApplicantData;
