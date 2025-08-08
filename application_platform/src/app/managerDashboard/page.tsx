"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  fetchApplications,
  Application,
} from "../../utils/managerFunctions/fetchTotalApplication";
import ManagersHeader from "@/components/header/managers_dashboard";

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
  const [applications, setApplications] = useState<Application[]>([]);
  const [statusCounts, setStatusCounts] = useState({
    total: 0,
    underReview: 0,
    interview: 0,
    accepted: 0,
  });


  const router = useRouter();

  useEffect(() => {
    const loadApplications = async () => {
      const apps = await fetchApplications();
      console.log("Loaded applications in component:", apps);
      setApplications(apps);

      const counts = {
        total: apps.length,
        underReview: apps.length,
        interview: apps.filter((app) => app.status === "Interview").length,
        accepted: apps.filter((app) => app.status === "Accepted").length,
      };

      setStatusCounts(counts);
    };

    loadApplications();
  }, []);

  // Function to handle clicking a row and navigate with query param
  const handleRowClick = (app: Application) => {
    router.push(`/manageApplicant?id=${app.id}`);
  };

  return (
    <>
    <ManagersHeader/>
      <div className="p-8">
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
              <select className="border text-sm rounded px-2 py-1">
                <option>Filter by Status</option>
                <option>New</option>
                <option>Under Review</option>
                <option>Interview</option>
                <option>Accepted</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-left border-b text-gray-500">
                    <th className="py-2 pr-4">Applicant</th>
                    <th className="py-2 pr-4">Assigned Reviewer</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr
                      key={app.id}
                      className="border-b last:border-0 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleRowClick(app)}
                      role="link"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleRowClick(app);
                        }
                      }}
                    >
                      <td className="py-2 pr-4 font-medium whitespace-normal break-words">
                        {app.applicant_name || "Unknown"}
                      </td>
                      <td className="py-2 pr-4">
                        <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded">
                          {app.assigned_reviewer_name || "Not Assigned"}
                        </span>
                      </td>
                      <td className="py-2 pr-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            app.status === "New"
                              ? "bg-blue-100 text-blue-700"
                              : app.status === "Under Review"
                              ? "bg-yellow-100 text-yellow-700"
                              : app.status === "Interview"
                              ? "bg-purple-100 text-purple-700"
                              : app.status === "Accepted"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="py-2">
                        <button className="text-blue-600 hover:underline text-sm">
                          Actions
                        </button>
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
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow w-full sm:w-1/3 lg:w-1/4">
            <h2 className="font-bold text-lg mb-4">Team Performance</h2>
            {performers.map((p, i) => (
              <div key={i} className={i !== 0 ? "pt-4 border-t" : ""}>
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
    </>
  );
}
