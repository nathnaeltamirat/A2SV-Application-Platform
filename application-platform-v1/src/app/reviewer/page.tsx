"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Application } from "@/types/reviwer.type";
import ReviwerHeader from "@/components/reviewer/ReviwerHeader";

import { fetchAssignedApplications } from "@/api/reviwer/fetchApplication";

export default function ReviewerDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const limit = 6;

  useEffect(() => {
    const getApplication = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAssignedApplications(1, 100);
        if (data == null) return;
        setApplications(data.reviews || []);
        setTotalCount(data.total_count || 0);
      } catch (error) {
        console.error("Error fetching applications:", error);
        setError("Failed to load applications. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getApplication();
  }, [currentPage, activeFilter]);

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "New":
        return "bg-[#DBEAFE] text-[#166534]";
      case "Under Review":
        return "bg-[#FEF9C3] text-[#854D0E]";
      case "Complete":
        return "bg-[#DBEAFE] text-[#166534]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };


  const filteredApplications =
    activeFilter === "All"
      ? applications
      : applications.filter((app) => app.status === activeFilter);

  //   const totalPages = 5;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="min-h-screen flex flex-col text-black bg-gray-100">
      <ReviwerHeader />
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Assigned Applications
          </h1>
          <p className="text-gray-600">
            {loading
              ? "Loading..."
              : `You have ${totalCount} applications waiting for your review`}
          </p>
        </header>

        {/* Status Filters */}
        <div className="flex space-x-2 mb-6">
          {["All", "New", "Under Review", "Complete"].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeFilter === filter
                  ? "bg-[#4F46E5] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4F46E5]"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApplications.map((app) => (
                <div
                  key={app.application_id}
                  className="bg-white p-6 rounded-lg shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-lg font-medium">
                        {app.applicant_name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {app.applicant_name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(app.submission_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </div>

                  <Link
                    href={`/reviewer/${app.application_id}`}
                    className={`block w-full text-center py-2 px-4 rounded hover:opacity-90 transition-opacity ${
                      app.status === "Complete"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-[#4F46E5] text-white"
                    }`}
                  >
                    {app.status === "Complete"
                      ? "View Details"
                      : app.status === "New"
                      ? "Start Review"
                      : "Continue Review"}
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-8">
                <div className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * limit + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(currentPage * limit, totalCount)}
                  </span>{" "}
                  of <span className="font-medium">{totalCount}</span> results
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded-md text-sm font-medium disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 border rounded-md text-sm font-medium ${
                          currentPage === pageNum
                            ? "bg-[#4F46E5] text-white"
                            : ""
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded-md text-sm font-medium disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      
    </div>
  );
}
