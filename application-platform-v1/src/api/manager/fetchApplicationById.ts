interface Application {
  id: string;
  status: string;
  school: string;
  student_id: string;
  country: string;
  degree: string;
  leetcode_handle: string;
  codeforces_handle: string;
  essay_why_a2sv: string;
  essay_about_you: string;
  resume_url: string;
  submitted_at: string; // ISO date string
  updated_at: string;   // ISO date string
  applicant_name: string;
}

interface Review {
  id: string;
  application_id: string;
  reviewer_id: string;
  activity_check_notes: string;
  resume_score: number;
  essay_why_a2sv_score: number;
  essay_about_you_score: number;
  technical_interview_score: number;
  behavioral_interview_score: number;
  interview_notes: string;
  created_at: string;  // ISO date string
  updated_at: string;  // ISO date string
}

export interface ApplicationWithReviewData {
  application: Application;
  review: Review;
}

export interface ApplicationWithReviewResponse {
  success: boolean;
  data: ApplicationWithReviewData;
  message: string;
}

export const fetchApplicationById = async (
  id: string
): Promise<ApplicationWithReviewResponse | null> => {
  const token = localStorage.getItem("accessToken"); // or get it however your app handles auth

  try {
    const res = await fetch(
      `https://a2sv-application-platform-backend-team9.onrender.com/manager/applications/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();
    console.log("response",json)
    if (json.success && json.data.application) {
      return json;
    }

    console.error("Failed to fetch application:", json);
    return null;
  } catch (error) {
    console.error("Error fetching application by ID:", error);
    return null;
  }
};
