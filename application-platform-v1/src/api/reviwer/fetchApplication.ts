export interface ApplicationItem {
  application_id: string;
  applicant_name: string;
  status: "pending_review" | "accepted" | "rejected";
  submission_date: string;
}

export type ReviewerItemResponse = {
  reviews: ApplicationItem[];
  total_count: number;
  page: number;
  limit: number;
};

export const fetchAssignedApplications = async (
  page: number,
  limit: number
): Promise<ReviewerItemResponse> => {
  const token = localStorage.getItem("accessToken");
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  try {
    const res = await fetch(
      `https://a2sv-application-platform-backend-team9.onrender.com/reviews/assigned/?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();
    console.log(json);

    if (json.success && Array.isArray(json.data.reviews)) {
      return json.data as ReviewerItemResponse;
    } else {
      console.log("Unexpected API structure:", json);
      return {
        reviews: [],
        total_count: 0,
        page: 0,
        limit: 0,
      };
    }
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    alert("An error occurred while fetching applications.");
    return {
      reviews: [],
      total_count: 0,
      page: 0,
      limit: 0,
    };
  }
};
