import { UpdatedData } from "@/types/reviwer.type";

export const updateReviewData = async (
  application_id: string,
  formData: UpdatedData
) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `https://a2sv-application-platform-backend-team9.onrender.com/reviews/${application_id}/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};
