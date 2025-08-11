"use client";
import { activateCycle } from "@/api/admin/activateCycle";
import { deActivateCycle } from "@/api/admin/deActivateCycle";
import { deleteCycle } from "@/api/admin/deleteCycle";
import { getCycleById } from "@/api/admin/getCycleId";
import { updateCycle } from "@/api/admin/updateCycle";

import Footer2 from "@/components/footer/Footer2";

import { CycleData } from "@/types/admin.type";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CycleByIDPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cycle, setCycle] = useState<CycleData>({
    id: 0,
    name: "",
    start_date: "",
    end_date: "",
    is_active: false,
    created_at: "",
    description: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const id = params.id;

        if (typeof id != "string") return;
        const res = await getCycleById(id);
        setCycle(res);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateCycle(cycle.id, {
        name: cycle.name,
        start_date: cycle.start_date,
        end_date: cycle.end_date,
        description: cycle.description || "",
      });
      alert("Cycle updated successfully!");
      router.back();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update cycle");
    } finally {
      setLoading(false);
    }
  };
  const handleActivate = async () => {
    try {
      setLoading(true);
      await activateCycle(cycle.id);
      alert("Cycle activated successfully!");
      router.back();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to activate cycle");
    } finally {
      setLoading(false);
    }
  };
  const handleDeactivate = async () => {
    try {
      setLoading(true);
      await deActivateCycle(cycle.id);
      alert("Cycle Deactivated successfully!");
      router.back();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to activate cycle");
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteCycle(cycle.id);
      alert("Cycle Deleted successfully!");
      router.back();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to activate cycle");
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

  return (
    <div className="bg-gray-100 text-black flex flex-col min-h-screen">
      <div className="flex-grow p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={cycle.name}
            onChange={(e) => setCycle({ ...cycle, name: e.target.value })}
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Cycle Name"
          />

          <input
            type="date"
            value={cycle.start_date}
            onChange={(e) => setCycle({ ...cycle, start_date: e.target.value })}
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="date"
            value={cycle.end_date}
            onChange={(e) => setCycle({ ...cycle, end_date: e.target.value })}
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            value={cycle.description || ""}
            onChange={(e) =>
              setCycle({ ...cycle, description: e.target.value })
            }
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Cycle Description"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-md shadow"
          >
            Update Cycle
          </button>
        </form>

        <div className="flex gap-4 mt-6 justify-center">
          <button
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 rounded-md shadow"
            onClick={handleDelete}
          >
            Delete Cycle
          </button>

          {cycle.is_active ? (
            <button
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-3 rounded-md shadow"
              onClick={handleDeactivate}
            >
              Deactivate Cycle
            </button>
          ) : (
            <button
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-md shadow"
              onClick={handleActivate}
            >
              Activate Cycle
            </button>
          )}
        </div>
      </div>

      {/* <Footer2 /> */}
    </div>
  );
}
