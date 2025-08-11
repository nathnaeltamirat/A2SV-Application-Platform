"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import CycleCard from "./CycleCard";
import { FetchWithAuth } from "@/utils/fetchWithAuth";

export type Cycle = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
};

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="Component 1.png" />
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600"
            >
              Dashboard
            </Link>
            <Link href="/users" className="text-gray-600 hover:text-indigo-600">
              Users
            </Link>
            <Link href="/cycles" className="text-indigo-600 font-medium">
              Cycles
            </Link>
            <Link
              href="/analytics"
              className="text-gray-600 hover:text-indigo-600"
            >
              Analytics
            </Link>
          </nav>
        </div>
        <div className="relative flex items-center space-x-4">
          <Link className="text-sm " href="admin/Profile">
            Your Profile
          </Link>
          <Link className="text-sm " href="admin/Admin User">
            Admin User
          </Link>
          {/* <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg> */}
          <button className="text-gray-600 hover:text-indigo-600">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default function CyclesPage() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 6;

  useEffect(() => {
    async function fetchCycles() {
      const res = await FetchWithAuth(
        `https://a2sv-application-platform-backend-team9.onrender.com/cycles/?page=${currentPage}&limit=${limit}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      setCycles(data.data?.cycles || []);
      setTotalCount(data.data?.total_count || 0);
    }

    fetchCycles();
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Application Cycles
            </h1>
            <Link href="/admin/CreateCycles">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                Create New Cycle
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {cycles.map((cycle) => (
              <CycleCard key={cycle.id} cycle={cycle} />
            ))}
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>
              Showing {(currentPage - 1) * limit + 1} to{" "}
              {Math.min(currentPage * limit, totalCount)} of {totalCount}{" "}
              results
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage <= 1}
                className="border rounded px-3 py-1 disabled:opacity-50"
              >
                &lt;
              </button>
              {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                const pageNum =
                  currentPage <= 2
                    ? i + 1
                    : currentPage >= totalPages - 1
                    ? totalPages - 2 + i
                    : currentPage - 1 + i;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`border rounded px-3 py-1 ${
                      currentPage === pageNum
                        ? "bg-indigo-50 text-indigo-600"
                        : ""
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage >= totalPages}
                className="border rounded px-3 py-1 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
