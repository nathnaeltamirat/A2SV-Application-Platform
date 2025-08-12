export interface assignReview {
  success: boolean;
  data: null;
  message: string;
}

export const assignReviewer = async (
  reviewerId: string,
  applicationId: string
): Promise<assignReview> => {
  const token = localStorage.getItem("accessToken");
  const data = {
    reviewer_id: reviewerId,
  };

  try {
    const res = await fetch(
      `https://a2sv-application-platform-backend-team9.onrender.com/manager/applications/${applicationId}/assign/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    const json = await res.json();
    console.log(json);

    if (json.success ) {
      return json;
    } else {
      console.log("Unexpected API structure:", json);
      return {
        success: false,
        data: null,
        message: "assigned unsuccesfull",
      };
    }
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    alert("An error occurred while fetching applications.");
    return {
      success: false,
      data: null,
      message: "assigned unsuccesfull",
    };
  }
};
