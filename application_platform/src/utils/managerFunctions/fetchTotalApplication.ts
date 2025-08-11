import { FetchWithAuth } from "../fetchWithAuth";

export type Application = {
  id: string;
  status: string;
  applicant_name: string;
  assigned_reviewer_name: string;
};

export const fetchApplications = async (): Promise<Application[]> => {
  const token = localStorage.getItem("accessToken");

  try {
    const res = await FetchWithAuth(
      "https://a2sv-application-platform-backend-team9.onrender.com/manager/applications",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();
    console.log(json)

    if (json.success && Array.isArray(json.data.applications)) {
      console.log(
        "fetchApplications: successfully fetched applications:",
        json.data.applications
      );
      return json.data.applications;
    } else {
      console.log("Unexpected API structure:", json);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    alert("An error occurred while fetching applications.");
    return [];
  }
};
