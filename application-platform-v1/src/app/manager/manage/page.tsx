"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import { ApplicationWithReviewData, fetchApplicationById } from "@/api/manager/fetchApplicationById";
import { fetchAllReviewers, ReviewerItem } from "@/api/manager/fetchAllReviewers";
import { assignReviewer } from "@/api/manager/assignReviewer";
import { getUserById } from "@/api/admin/getUserById";
import { Decission } from "@/api/manager/decession";
import ManagersHeader from "@/components/manager/managerHeader";

export default function ManageApplicant() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [isReviewerSelected, setIsReviewerSelected] = useState(false);
  const [app, setApp] = useState<ApplicationWithReviewData | null>(null);
  const [status, setStatus] = useState("Final Decission");
  const [reviewers, setReviewers] = useState<ReviewerItem[]>([]);
  const [filteredReviewers, setFilteredReviewers] = useState<ReviewerItem[]>(
    []
  );
  const [selectedReviewerId, setSelectedReviewerId] = useState<string | null>(
    null
  );
  const [message, setMessage] = useState("");

  const [reviewerName, setReviewerName] = useState("");
  const handleAssigningReviewer = async () => {
    if (!selectedReviewerId || !app) return;

    const res = await assignReviewer(selectedReviewerId, app.application.id);

    if (res.success) {
      setMessage(`Reviewer Assigned ${reviewerName}`);

      const updatedApp = await fetchApplicationById(app.application.id);
      if (updatedApp?.data) {
        setApp(updatedApp.data);
      }
    }
  };
  useEffect(() => {
    if (!reviewerName || isReviewerSelected) {
      setFilteredReviewers([]);
      return;
    }
    const filtered = reviewers.filter((r) =>
      r.full_name.toLowerCase().includes(reviewerName.toLowerCase())
    );
    setFilteredReviewers(filtered);
  }, [reviewerName, reviewers]);
  useEffect(() => {
    const loadApp = async () => {
      if (!id) return;

      const fetchedApp = await fetchApplicationById(id);
      const data = fetchedApp?.data;
      if (!data) return;
      console.log(fetchedApp);
      if (fetchedApp) {
        setApp(data);
      }
    };

    loadApp();
  }, [id]);
  useEffect(() => {
    const loadReviewers = async () => {
      const allReviewers = await fetchAllReviewers(1, 100); // you implement this
      setReviewers(allReviewers.reviewers);
    };
    loadReviewers();
  }, []);
  useEffect(() => {
    if (!app) return;

    const fetchReviewerName = async () => {
      const reviewerId = app.review?.reviewer_id;
      if (!reviewerId) return;

      const name = await getUserById(reviewerId);
      setReviewerName(name);
    };

    fetchReviewerName();
  }, [app]);

  if (!app) {
    return (
      <div className="bg-gray-100 p-6 min-h-screen">
        <div className="p-6 text-gray-600">Loading application...</div>
      </div>
    );
  }

  const handleDecisson = async (decission: string) => {
    const getFinalData = async () => {
      await Decission(status, decission, id);
    };
    getFinalData();
  };

  return (
<div className="bg-gray-100 text-black">
          <ManagersHeader />
    <div className="bg-gray-100 p-6 min-h-screen">
      <Link href="/dashboard" className="text-sm text-gray-500 mb-2 inline-block">
        &lt; Back to Dashboard
      </Link>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Manage: {app.application.applicant_name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Applicant Profile: {app.application.applicant_name}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p>
                <span className="font-medium">School:</span>{" "}
                {app.application.school || "N/A"}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Degree Program:</span>{" "}
                {app.application.degree || "N/A"}
              </p>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <p className="font-medium mb-1">Coding Profiles:</p>
            <div className="flex space-x-4 text-blue-600">
              {app.application.leetcode_handle && (
                <a href={app.application.leetcode_handle}>LeetCode</a>
              )}
              {app.application.codeforces_handle && (
                <a href={app.application.codeforces_handle}>Codeforces</a>
              )}
            </div>
          </div>

          <div className="mt-4 text-sm space-y-2">
            <p>
              <span className="font-medium">Essay 1:</span> Tell us about
              yourself?
            </p>
            <p className="text-gray-700">
              {app.application.essay_about_you || "No response provided."}
            </p>

            <p>
              <span className="font-medium">Essay 2:</span> Why do you want to
              join us?
            </p>
            <p className="text-gray-700">
              {app.application.essay_why_a2sv || "No response provided."}
            </p>
          </div>

          <div className="mt-4 text-sm">
            <p className="font-medium">Resume:</p>
            <a
              href={app.application.resume_url || "#"}
              className="text-blue-600 underline"
            >
              View Resume.pdf
            </a>
          </div>
        </div>

        {/* Manager Actions */}
        <div className="bg-white p-6 rounded-xl shadow space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Manager Actions</h2>
            <label className="block text-sm mb-1">Assign Reviewer</label>
            <div className="relative">
              <input
                type="text"
                value={reviewerName}
                placeholder="Not Assigned"
                onChange={(e) => {
                  setReviewerName(e.target.value);
                  setIsReviewerSelected(false);
                }}
                className="w-full border border-gray-300 p-2 rounded"
                autoComplete="off"
              />
              {filteredReviewers.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 w-full max-h-40 overflow-auto z-10">
                  {filteredReviewers.map(({ id, full_name }) => (
                    <li
                      key={id}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setReviewerName(full_name);
                        setFilteredReviewers([]);
                        setSelectedReviewerId(id);
                        setIsReviewerSelected(true);
                      }}
                    >
                      {full_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              onClick={() => {
                handleAssigningReviewer();
              }}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Confirm
            </button>
            {message && <p className="block text-green-500 m-2">{message}</p>}
          </div>
          <div>
            <h2 className="text-sm text-gray-700 mb-2 font-semibold">
              Final Decision
            </h2>

            <div className="flex space-x-2">
              {app.application.status == "accepted" ? (
                <p>
                  Status:{" "}
                  <span className="bg-green-500 p-2 rounded-md text-white">
                    Accepted
                  </span>
                </p>
              ) : app.application.status == "rejected" ? (
                <p>
                  Status:{" "}
                  <span className="bg-red-500 p-2 rounded-md text-white">
                    Rejected
                  </span>
                </p>
              ) : (
                <>
                  <p className="text-xs text-gray-500 mb-3">
                    This action is final and will notify the applicant.
                  </p>
                  <button
                    onClick={() => handleDecisson("rejected")}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleDecisson("accepted")}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Accept
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow col-span-2">
        <h2 className="text-lg font-semibold mb-4">
          Reviewers Feedback {reviewerName || ""}
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Activity Check:{" "}
          <span className="font-medium">
            {app.review?.activity_check_notes || "N/A"}
          </span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <p>
            <span className="font-medium">Resume Score: </span>{" "}
            {app.review?.resume_score || "-"}
          </p>
          <p>
            <span className="font-medium">Essay about you score: </span>{" "}
            {app.review?.essay_about_you_score || "-"}
          </p>
          <p>
            <span className="font-medium">Essay about why a2sv score: </span>{" "}
            {app.review?.essay_why_a2sv_score || "-"}
          </p>
          <p>
            <span className="font-medium">Tech Interview score: </span>{" "}
            {app.review?.technical_interview_score || "-"}
          </p>
          <p>
            <span className="font-medium">Behavioral:</span>{" "}
            {app.review?.behavioral_interview_score || "-"}
          </p>
        </div>

        <div className="mt-4 text-sm">
          <p className="font-medium">Interviewer Notes:</p>
          <p>{app.review?.interview_notes || "No notes available."}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
