import { ApplicationResponse } from "@/types/manager.type";


export const fetchApplications = async (
  page = 1,
  limit = 10,
  status: string | null = null
): Promise<ApplicationResponse> => {
  const token = localStorage.getItem("accessToken");
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (status) {
    params.append("status", status);
  }

  try {
    const res = await fetch(
      `https://a2sv-application-platform-backend-team9.onrender.com/manager/applications?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();
    console.log(json);

    if (json.success && Array.isArray(json.data.applications)) {
      return json.data as ApplicationResponse;
    } else {
      console.log("Unexpected API structure:", json);
      return {
        applications: [],
        total_count: 0,
        page,
        limit,
        message: json.message || "",
      };
    }
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    alert("An error occurred while fetching applications.");
    return { applications: [], total_count: 0, page, limit, message: "" };
  }
};
