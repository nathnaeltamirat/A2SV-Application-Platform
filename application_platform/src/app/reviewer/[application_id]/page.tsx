"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type ApplicantDetails = {
  id: string;
  applicant_name: string;
  status: string;
  school: string;
  student_id: string;
  leetcode_handle: string;
  codeforces_handle: string;
  essay_why_a2sv: string;
  essay_about_you: string;
  resume_url: string;
  submitted_at: string;
  updated_at: string;
};

type ReviewDetails = {
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
  created_at: string;
  updated_at: string;
};

export default function ReviewPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [applicant, setApplicant] = useState<ApplicantDetails | null>(null);
  const [review, setReview] = useState<ReviewDetails | null>(null);
  const [formData, setFormData] = useState({
    activity_check_notes: "",
    resume_score: 0,
    essay_why_a2sv_score: 0,
    essay_about_you_score: 0,
    technical_interview_score: 0,
    behavioral_interview_score: 0,
    interview_notes: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MWU4YzM3Mi1jNDcwLTRhMGEtODhkNC1hNmMyY2EzN2NkODYiLCJleHAiOjE3NTQ1NTQ2NDQsInR5cGUiOiJhY2Nlc3MifQ.BYY-hAcxuRrGvT7l8jaEnXXKJVqnexp80NjBVrQ389o";
        const response = await fetch(
          `https://a2sv-application-platform-backend-team9.onrender.com/reviews/${params.application_id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API Response:", response);
        if (!response.ok) {
          if (response.status === 401) {
            router.push("/login");
          }
          throw new Error("Failed to fetch application details");
        }

        const data = await response.json();
        setApplicant(data.data.applicant_details);
        setReview(data.data.review_details);

        if (data.data.review_details) {
          setFormData({
            activity_check_notes:
              data.data.review_details.activity_check_notes || "",
            resume_score: data.data.review_details.resume_score || 0,
            essay_why_a2sv_score:
              data.data.review_details.essay_why_a2sv_score || 0,
            essay_about_you_score:
              data.data.review_details.essay_about_you_score || 0,
            technical_interview_score:
              data.data.review_details.technical_interview_score || 0,
            behavioral_interview_score:
              data.data.review_details.behavioral_interview_score || 0,
            interview_notes: data.data.review_details.interview_notes || "",
          });
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.application_id, router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes("score") ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://a2sv-application-platform-backend-team9.onrender.com/reviews/${params.application_id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update review");
      }

      const data = await response.json();
      setReview(data.data);
      alert("Review updated successfully!");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update review");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4F46E5]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-blue-600 hover:underline"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!applicant) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold mb-4">Application Not Found</h2>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-blue-600 hover:underline"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button
        onClick={() => router.back()}
        className="text-blue-600 hover:underline mb-6 flex items-center"
      >
        <span className="mr-1">←</span> Back to Dashboard
      </button>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Review: {applicant.applicant_name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Applicant Profile */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Applicant Profile
          </h2>

          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-700">School</p>
              <p className="text-gray-600">{applicant.school}</p>
            </div>

            <div>
              <p className="font-medium text-gray-700">Student ID</p>
              <p className="text-gray-600">{applicant.student_id}</p>
            </div>

            <div>
              <p className="font-medium text-gray-700">Coding Profiles</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {applicant.leetcode_handle && (
                  <a
                    href={`https://leetcode.com/${applicant.leetcode_handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LeetCode
                  </a>
                )}
                {applicant.codeforces_handle && (
                  <a
                    href={`https://codeforces.com/profile/${applicant.codeforces_handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Codeforces
                  </a>
                )}
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-700">
                Essay: Tell us about yourself
              </p>
              <p className="text-gray-600 bg-gray-50 p-3 rounded mt-1">
                {applicant.essay_about_you}
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-700">
                Essay: Why do you want to join A2SV?
              </p>
              <p className="text-gray-600 bg-gray-50 p-3 rounded mt-1">
                {applicant.essay_why_a2sv}
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-700">Resume</p>
              <a
                href={applicant.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Evaluation Form */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Evaluation Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Activity Check Notes
              </label>
              <textarea
                name="activity_check_notes"
                value={formData.activity_check_notes}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Enter your evaluation notes..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Resume Score (0-10)
                </label>
                <input
                  type="number"
                  name="resume_score"
                  min="0"
                  max="10"
                  value={formData.resume_score}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  "Why A2SV" Essay Score (0-10)
                </label>
                <input
                  type="number"
                  name="essay_why_a2sv_score"
                  min="0"
                  max="10"
                  value={formData.essay_why_a2sv_score}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  "About You" Essay Score (0-10)
                </label>
                <input
                  type="number"
                  name="essay_about_you_score"
                  min="0"
                  max="10"
                  value={formData.essay_about_you_score}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Technical Interview Score (0-10)
                </label>
                <input
                  type="number"
                  name="technical_interview_score"
                  min="0"
                  max="10"
                  value={formData.technical_interview_score}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Behavioral Interview Score (0-10)
                </label>
                <input
                  type="number"
                  name="behavioral_interview_score"
                  min="0"
                  max="10"
                  value={formData.behavioral_interview_score}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Interview Notes
              </label>
              <textarea
                name="interview_notes"
                value={formData.interview_notes}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Enter interview notes..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#4F46E5] text-white py-3 px-4 rounded hover:bg-[#4338CA] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Saving..." : "Save & Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
