"use client";
import React, { useState } from "react";
import { createCycleAPI } from "../../../utils/adminFunctions/createCycleAPI";
import AdminHeader from "@/components/header/adminHeader";
import { useRouter } from "next/navigation";
import Admin from "@/components/header/Admin";

const CreateNewCycle = () => {
  const router = useRouter();
  const [cyclename, setCycleName] = useState("");
  const [start, setStart] = useState("");
  const [country, setCountry] = useState("");
  const [end, setEnd] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    await createCycleAPI(e, cyclename, start, end);
    router.push('/dashboard')
  };

  return (
    <>
      <AdminHeader />
      <div
        className="min-h-screen pl-[250px] pr-[40px] pt-[50px] pb-[60px]"
        style={{ background: "rgb(243, 244, 246)" }}
      >
        <div className="text-black mb-8">
          <h1 className="text-3xl font-bold mb-1">Create New Cycle</h1>
          <p className="text-gray-600">
            Use this form to create a new cycle and assign periods.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-2xl p-8 max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Cycle Name
              </label>
              <input
                type="text"
                value={cyclename}
                onChange={(e) => setCycleName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter cycle name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter country"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                End Date
              </label>
              <input
                type="date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Save Cycle
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNewCycle;
