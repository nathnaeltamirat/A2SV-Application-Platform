"use client";
import { useState } from "react";
export type Cycle = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
};

interface CycleCardProps {
  cycle: Cycle;
  onStatusChange?: (id: number, isActive: boolean) => void;
}

export default function CycleCard({ cycle, onStatusChange }: CycleCardProps) {
  const [localCycle, setLocalCycle] = useState(cycle);
  const isActive = localCycle.is_active;
  const statusLabel = isActive ? "Active" : "Closed";

  const [generation, month] = localCycle.name.split(" ");
  const genNumber = parseInt(generation.replace("G", ""));

  const suffixes = ["th", "st", "nd", "rd"];
  const v = genNumber % 100;
  const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];

  const description = `The ${genNumber}${suffix} generation of A2SV, ${month} Intake.`;

  const handleClose = () => {
    const updatedCycle = {
      ...localCycle,
      is_active: false,
    };
    setLocalCycle(updatedCycle);
    if (onStatusChange) {
      onStatusChange(localCycle.id, false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition relative">
      <button
        onClick={handleClose}
        className={`px-3 py-1 text-sm rounded-full font-medium absolute top-3 right-3 ${
          isActive
            ? "bg-[#E57046] text-white hover:bg-[#d45f35]"
            : "bg-[#4F46E5] text-white hover:bg-[#3f38c4]"
        }`}
        aria-label="Close"
      >
        {isActive ? 'Active': 'Close'}
      </button>

      <h2 className="text-xl font-bold mb-2 text-gray-800 pr-6">
        {localCycle.name}
      </h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex items-center">
        <span className="font-medium mr-2 text-black">Status:</span>
        <span
          className={`px-3 py-1 text-sm rounded-full font-medium ${
            isActive
              ? "bg-green-100 text-green-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {statusLabel}
        </span>
      </div>
    </div>
  );
}
