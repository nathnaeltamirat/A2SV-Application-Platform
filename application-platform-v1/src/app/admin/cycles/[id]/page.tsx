"use client";
import { activateCycle } from "@/app/api/admin/activateCycle";
import { deActivateCycle } from "@/app/api/admin/deActivateCycle";
import { deleteCycle } from "@/app/api/admin/deleteCycle";
import { getCycleById } from "@/app/api/admin/getCycleId";
import { updateCycle } from "@/app/api/admin/updateCycle";
import Footer from "@/components/footer/Footer";

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
    if (!params?.id || !router) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        if (!params) return;
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
  }, [params?.id, router]);

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
      alert("Cycle deactivated successfully!");
      router.back();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to deactivate cycle"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteCycle(cycle.id);
      alert("Cycle deleted successfully!");
      router.back();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete cycle");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-blue-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow text-center border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-blue-600 hover:underline font-medium"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-10 text-black flex flex-col min-h-screen">
      <div className="flex-grow p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-blue-100 mt-6">
        <h1 className="text-3xl font-bold text-black-500 mb-6">
          Manage Cycle Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cycle Name */}
          <div>
            <label className="block text-sm font-semibold text-black-400 mb-2">
              Cycle Name
            </label>
            <input
              type="text"
              value={cycle.name}
              onChange={(e) => setCycle({ ...cycle, name: e.target.value })}
              className="border border-blue-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter cycle name"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-semibold text-black-400 mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={cycle.start_date}
              onChange={(e) =>
                setCycle({ ...cycle, start_date: e.target.value })
              }
              className="border border-blue-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black-400 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={cycle.end_date}
              onChange={(e) => setCycle({ ...cycle, end_date: e.target.value })}
              className="border border-blue-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black-400 mb-2">
              Description
            </label>
            <textarea
              value={cycle.description || ""}
              onChange={(e) =>
                setCycle({ ...cycle, description: e.target.value })
              }
              className="border border-blue-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter cycle description"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-md shadow transition duration-200"
          >
            Update Cycle
          </button>
        </form>

        <div className="flex gap-4 mt-6">
          <button
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-md shadow transition duration-200"
            onClick={handleDelete}
          >
            Delete
          </button>

          {cycle.is_active ? (
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-md shadow transition duration-200"
              onClick={handleDeactivate}
            >
              Deactivate
            </button>
          ) : (
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-md shadow transition duration-200"
              onClick={handleActivate}
            >
              Activate Cycle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
