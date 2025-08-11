"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Cycle } from "@/types/admin.type";
import { fetchCycles } from "@/api/admin/fetchCycle";
import CycleCard from "@/components/admin/CycleCard";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/Footer";

export default function CyclesPage() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 6;
  const router = useRouter();
  useEffect(() => {
    const getCycles = async () => {
      const data = await fetchCycles(currentPage, limit);
      setCycles(data.data?.cycles || []);
      setTotalCount(data.data?.total_count || 0);
    };
    getCycles();
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="min-h-[90vh]">
      <div className="px-4  py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Application Cycles
            </h1>
            <Link href="/admin/cycles/new-cycle">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                Create New Cycle
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {cycles.map((cycle) => (
              <div
                key={cycle.id}
                onClick={() => {
                  router.push(`/admin/cycles/${cycle.id}`);
                }}
              >
                <CycleCard cycle={cycle} />
              </div>
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
