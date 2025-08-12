// applicant_dashboard
// applicant_ dashboard_welcome
import React from "react";
import Link from "next/link";

const ApplicantsHeader = () => {
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
          </nav>
        </div>
        <div className="relative flex items-center space-x-4">
          <Link className="text-sm  text-indigo-600" href="admin/Profile">
            Your Profile
          </Link>
          <Link className="text-sm " href="admin/Admin User">
            Applicant Name
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

export default ApplicantsHeader;
