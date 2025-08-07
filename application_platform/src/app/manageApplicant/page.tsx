import { useRouter } from "next/router";
import Link from "next/link";
import { useMemo, useEffect, useState } from "react";

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
};

type Review = {
  activity_check_notes?: string;
  resume_score?: number;
  essay_why_a2sv_score?: number;
  essay_about_you_score?: number;
  technical_interview_score?: number;
  behavioral_interview_score?: number;
  interview_notes?: string;
};

export default function ManageApplicant() {
  const router = useRouter();
  const { application } = router.query;

  const app = useMemo(() => {
    try {
      return application ? JSON.parse(application as string) : null;
    } catch (e) {
      return null;
    }
  }, [application]);

  const [review, setReview] = useState<Review | null>(null);

  useEffect(() => {
    if (app?.id) {
      fetch(`https://a2sv-application-platform-backend-team9.onrender.com/reviews/${app.id}`)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data) setReview(data);
        })
        .catch(err => console.error("Error fetching review:", err));
    }
  }, [app?.id]);

  if (!app) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <Link href="/" className="text-sm text-gray-500 mb-2 inline-block">
        &lt; Back to Dashboard
      </Link>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Manage: {app.applicantName}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Applicant Profile</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p><span className="font-medium">School:</span> {app.school || "N/A"}</p>
            </div>
            <div>
              <p><span className="font-medium">Degree Program:</span> {app.degree || "N/A"}</p>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <p className="font-medium mb-1">Coding Profiles:</p>
            <div className="flex space-x-4 text-blue-600">
              {app.github && <a href={app.github}>GitHub</a>}
              {app.leetcode && <a href={app.leetcode}>LeetCode</a>}
              {app.codeforces && <a href={app.codeforces}>Codeforces</a>}
            </div>
          </div>

          <div className="mt-4 text-sm space-y-2">
            <p><span className="font-medium">Essay 1:</span> Tell us about yourself?</p>
            <p className="text-gray-700">{app.essay1 || "No response provided."}</p>

            <p><span className="font-medium">Essay 2:</span> Why do you want to join us?</p>
            <p className="text-gray-700">{app.essay2 || "No response provided."}</p>
          </div>

          <div className="mt-4 text-sm">
            <p className="font-medium">Resume:</p>
            <a href={app.resumeUrl || "#"} className="text-blue-600 underline">View Resume.pdf</a>
          </div>
        </div>

        {/* Manager Actions */}
        <div className="bg-white p-6 rounded-xl shadow space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Manager Actions</h2>
            <label className="block text-sm mb-1">Assign Reviewer</label>
            <input type="text" value={app.assignedReviewer || "Not Assigned"} className="w-full border border-gray-300 p-2 rounded" disabled />
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Confirm</button>
          </div>
          <div>
            <h2 className="text-sm text-gray-700 mb-2 font-semibold">Final Decision</h2>
            <p className="text-xs text-gray-500 mb-3">This action is final and will notify the applicant.</p>
            <div className="flex space-x-2">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Reject</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Accept</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow col-span-2">
        <h2 className="text-lg font-semibold mb-4">Reviewer's Feedback ({app.assignedReviewer || "Not Assigned"})</h2>

        {review ? (
          <>
            <p className="text-sm text-gray-700 mb-4">
              Activity Check Notes: <span className="font-medium">{review.activity_check_notes || "N/A"}</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <p><span className="font-medium">Resume Score:</span> {review.resume_score ?? "-"}</p>
              <p><span className="font-medium">Essay 1 Score:</span> {review.essay_about_you_score ?? "-"}</p>
              <p><span className="font-medium">Essay 2 Score:</span> {review.essay_why_a2sv_score ?? "-"}</p>
              <p><span className="font-medium">Technical Interview:</span> {review.technical_interview_score ?? "-"}</p>
              <p><span className="font-medium">Behavioral Interview:</span> {review.behavioral_interview_score ?? "-"}</p>
            </div>

            <div className="mt-4 text-sm">
              <p className="font-medium">Interviewer Notes:</p>
              <p>{review.interview_notes || "No notes available."}</p>
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-600 italic">No review submitted yet.</p>
        )}
      </div>
    </div>
  );
}
