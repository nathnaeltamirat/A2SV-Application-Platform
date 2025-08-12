export type ReviewerItem = {
  id: string;
  full_name: string;
  email: string;
};

export type ReviewerItemResponse = {
  reviewers: ReviewerItem[];
  total_count: number;
};

export const fetchAllReviewers = async (
  page = 1,
  limit = 10
): Promise<ReviewerItemResponse> => {
  const token = localStorage.getItem("accessToken");
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  try {
    const res = await fetch(
      `https://a2sv-application-platform-backend-team9.onrender.com/manager/applications/available-reviewers/?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();
    console.log(json);

    if (json.success && Array.isArray(json.data.reviewers)) {
      return json.data as ReviewerItemResponse;
    } else {
      console.log("Unexpected API structure:", json);
      return {
        reviewers: [],
        total_count: 0,
      };
    }
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    alert("An error occurred while fetching applications.");
    return { reviewers: [], total_count: 0 };
  }
};
