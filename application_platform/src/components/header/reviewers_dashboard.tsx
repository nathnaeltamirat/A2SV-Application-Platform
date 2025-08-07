import React from "react";
import Link from "next/link";

const Reviewers_dashboard = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src="Component 1.png" />
          </div>
          <Link
            href="#"
            className="text-gray-900 inline-flex items-center px-1 text-sm font-medium border-b-2 border-[#4F46E5]"
          >
            Dashboard
          </Link>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 text-sm font-medium"
            >
              Your Profile
            </Link>
            <span className="text-gray-500 inline-flex items-center px-1 text-sm font-medium">
              Reviewer Name
            </span>
            <button className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 text-sm font-medium">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Reviewers_dashboard;
