"use client";
import React from "react";

interface Props {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedRole: string;
  setSelectedRole: (val: string) => void;
}

const UserSearch: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
}) => {
  const roles = ["All Roles", "Applicant", "Reviewer", "Manager", "Admin"];

  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Search Input */}
      <div className="relative flex-grow max-w-full">
        <input
          type="text"
          placeholder="Search users by name or email..."
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Role Filter Dropdown */}
      <div className="relative w-40 flex-shrink-0">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-full appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 text-sm"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
