"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ApplicationItem, ApplicationResponse } from "@/types/manager.type";
import { fetchApplications } from "@/api/manager/fetchTotalApplication";
import ManagersHeader from "@/components/manager/managerHeader";
import Footer from "@/components/footer/Footer";

const performers = [
  {
    name: "Jane R.",
    totalReviews: 12,
    assigned: 3,
    avgDays: 2.5,
  },
  {
    name: "Mike R.",
    totalReviews: 8,
    assigned: 5,
    avgDays: 3.1,
  },
];

export default function ManagerDashboard() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [applications, setApplications] = useState<ApplicationItem[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const [statusCounts, setStatusCounts] = useState({
    total: 0,
    underReview: 0,
    interview: 0,
    accepted: 0,
  });

  const router = useRouter();

  useEffect(() => {
    const loadApplications = async () => {
      const data: ApplicationResponse = await fetchApplications(
        page,
        limit,
        selectedStatus
      );
      setApplications(data.applications);

      const counts = {
        total: data.total_count,
        underReview: data.applications.filter(
          (app) => app.status !== "rejected" && app.status !== "accepted"
        ).length,
        interview: data.applications.filter((app) => app.status === "Interview")
          .length,
        accepted: data.applications.filter((app) => app.status === "accepted")
          .length,
      };

      setStatusCounts(counts);
    };

    loadApplications();
  }, [page, selectedStatus]);

  const handleRowClick = (app: ApplicationItem) => {
    router.push(`/manager/manage?id=${app.id}`);
  };

  return (
    <div className="bg-gray-100">
      <ManagersHeader />
      <div className="p-8 text-black ">
        <h1 className="text-2xl font-bold ml-4">Manager Dashboard</h1>
        <p className="text-gray-400 mb-4 ml-4">G7 November intake</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded">
            <p>Total Applicants</p>
            <h2 className="text-xl font-semibold">{statusCounts.total}</h2>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p>Under Review</p>
            <h2 className="text-xl font-semibold">
              {statusCounts.underReview}
            </h2>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p>Interview Stage</p>
            <h2 className="text-xl font-semibold">{statusCounts.interview}</h2>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p>Accepted</p>
            <h2 className="text-xl font-semibold">{statusCounts.accepted}</h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="bg-white p-6 rounded-lg shadow w-full sm:w-2/3 lg:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">All Applications</h2>
              <select
                className="border text-sm rounded px-2 py-1"
                value={selectedStatus || ""}
                onChange={(e) => {
                  setSelectedStatus(e.target.value || null);
                  setPage(1);
                }}
              >
                <option value="">Filter by Status</option>
                <option value="in_progress">Under Review</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="pending_review">Pending Review</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-separate border-spacing-y-4">
                <thead>
                  <tr className="border-b my-4 text-gray-500">
                    <th className="text-left text-lg text-gray-700 font-bold">
                      Applicant
                    </th>
                    <th className="text-left text-lg text-gray-700 font-bold">
                      Assigned Reviewer
                    </th>
                    <th className="text-left text-lg text-gray-700 font-bold">
                      Status
                    </th>
                    {/*       <th className="py-2">Actions</th>*/}
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr
                      key={app.id}
                      className="border-b border-b-gray-200 last:border-0 cursor-pointer h-20 text-lg hover:bg-gray-50"
                      onClick={() => handleRowClick(app)}
                      role="link"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleRowClick(app);
                        }
                      }}
                    >
                      <td className="font-bold whitespace-normal break-words">
                        {app.applicant_name || "Unknown"}
                      </td>
                      <td className="py-2">
                        <span
                          className={`bg-gray-100 ${
                            app.assigned_reviewer_name
                              ? "text-green-500"
                              : "text-red-700"
                          }  px-2 py-1 rounded`}
                        >
                          {app.assigned_reviewer_name || "Not Assigned"}
                        </span>
                      </td>
                      <td className="py-2 ">
                        <span
                          className={`px-2 py-1 rounded text-sm font-medium ${
                            app.status === "New"
                              ? "bg-blue-100 text-blue-700"
                              : app.status === "rejected"
                              ? "bg-red-100 text-red-700"
                              : app.status !== "accepted" &&
                                app.status !== "rejected"
                              ? "bg-yellow-100 text-yellow-700"
                              : app.status === "accepted"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {applications.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center py-6 text-gray-400"
                      >
                        No applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Previous
                </button>

                <span className="text-sm text-gray-600">Page {page}</span>

                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow h-50 w-full sm:w-1/3 lg:w-1/4">
            <h2 className="font-bold text-lg mb-4">Team Performance</h2>
            {performers.map((p, i) => (
              <div
                key={i}
                className={
                  i !== 0 ? "pt-4 border-t border-t-gray-300 my-2" : ""
                }
              >
                <div className="flex justify-between items-center font-medium">
                  <span>{p.name}</span>
                  <span className="text-sm text-gray-600">
                    {p.totalReviews} Reviews
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {p.assigned} Assigned / Avg. {p.avgDays} days
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
