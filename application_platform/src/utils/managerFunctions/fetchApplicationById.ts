import { FetchWithAuth } from "../fetchWithAuth";

export type Application = {
  id: string;
  applicantName: string;
  school: string;
  degree: string;
  github: string;
  leetcode: string;
  codeforces: string;
  essay1: string;
  essay2: string;
  resumeUrl: string;
  assignedReviewer?: string;
  activityCheck?: string;
  resumeScore?: number;
  essayScore?: number;
  techInterview?: number;
  behavioral?: number;
  interviewerNotes?: string;
};

export const fetchApplicationById = async (
  id: string
): Promise<Application | null> => {
  const token = localStorage.getItem("accessToken"); // or get it however your app handles auth

  try {
    const res = await FetchWithAuth(
      `https://a2sv-application-platform-backend-team9.onrender.com/manager/applications/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();
    if (json.success && json.data.application) {
      return json.data.application;
    }

    console.error("Failed to fetch application:", json);
    return null;
  } catch (error) {
    console.error("Error fetching application by ID:", error);
    return null;
  }
};
